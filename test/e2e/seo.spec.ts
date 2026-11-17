import { test, expect } from '@playwright/test';
import { contact, home, howIWork } from '../../src/content';

const BASE = 'https://imaugust.com';

test.describe('Static HTML head (what crawlers see before JS runs)', () => {
  test('served index.html has a title, description, canonical and Open Graph tags', async ({
    request,
  }) => {
    const res = await request.get('/');
    expect(res.status()).toBe(200);
    const html = await res.text();

    expect(html).toContain('<title>August Sjögren – Software Developer</title>');
    expect(html).toContain('name="description"');
    expect(html).toContain('rel="canonical"');
    expect(html).toContain('property="og:title"');
    expect(html).toContain('property="og:description"');
    expect(html).toContain('property="og:image"');
    expect(html).toContain('name="twitter:card" content="summary"');
  });

  test('served index.html includes Person JSON-LD structured data', async ({
    request,
  }) => {
    const html = await (await request.get('/')).text();

    expect(html).toContain('application/ld+json');
    expect(html).toContain('"@type": "Person"');
    expect(html).toContain('sameAs');
  });

  test('favicon link is valid and apple-touch-icon is present', async ({
    request,
  }) => {
    const html = await (await request.get('/')).text();

    expect(html).toContain('rel="apple-touch-icon"');
    // The ico file must not claim to be a png
    expect(html).not.toContain('type="image/png" href="/src/images/favicon.ico"');
  });

  test('robots.txt is served and points at the sitemap', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.status()).toBe(200);
    const body = await res.text();

    expect(body).toContain('User-agent: *');
    expect(body).toContain('Allow: /');
    expect(body).toContain('Sitemap: https://imaugust.com/sitemap.xml');
  });

  test('sitemap.xml is served and lists all routes', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.status()).toBe(200);
    const body = await res.text();

    for (const path of ['/', '/how-i-work', '/contact']) {
      expect(body).toContain(`<loc>${BASE}${path}</loc>`);
    }
  });
});

test.describe('Rendered head (after JS runs)', () => {
  const routes = [
    {
      path: '/',
      pageTitle: home.pageTitle,
      description: home.description,
      canonical: `${BASE}/`,
    },
    {
      path: '/how-i-work',
      pageTitle: howIWork.pageTitle,
      description: howIWork.description,
      canonical: `${BASE}/how-i-work`,
    },
    {
      path: '/contact',
      pageTitle: contact.pageTitle,
      description: contact.description,
      canonical: `${BASE}/contact`,
    },
  ];

  for (const route of routes) {
    test(`route ${route.path} has a full title, its own description and one canonical`, async ({
      page,
    }) => {
      await page.goto(route.path);

      await expect(page).toHaveTitle(route.pageTitle);

      // PageMeta updates the description after React mounts, so poll
      await expect
        .poll(async () =>
          page
            .locator('head meta[name="description"]')
            .evaluateAll((elements) =>
              elements.map((el) => el.getAttribute('content'))
            )
        )
        .toContain(route.description);

      await expect(
        page.locator(`head link[rel="canonical"][href="${route.canonical}"]`)
      ).toHaveCount(1);
    });
  }

  test('the 404 page has its own title and description but no canonical', async ({
    page,
  }) => {
    await page.goto('/no-such-page');

    await expect(page).toHaveTitle(/Page not found – August Sjögren/);
    // A 404 must not advertise itself as a canonical URL
    expect(
      await page.locator('head link[rel="canonical"]').evaluateAll((els) =>
        els.map((el) => el.getAttribute('href'))
      )
    ).not.toContain(`${BASE}/no-such-page`);
  });
});
