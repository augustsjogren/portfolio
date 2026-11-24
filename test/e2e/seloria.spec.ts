import { test, expect } from '@playwright/test';
import { setupConsoleErrorCapture } from './helpers';
import { seloria } from '../../src/seloriaContent';

test.describe('Seloria showcase page', () => {
  test('renders hero, features and no console errors', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCapture(page);
    await page.goto('/seloria');

    await expect(
      page.getByRole('heading', { level: 1, name: 'Seloria' })
    ).toBeVisible();
    await expect(
      page.getByText(/native iOS player for your own Navidrome/i)
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /offline downloads/i })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /private by design/i })
    ).toBeVisible();
    await expect(page.getByText(/iOS Keychain/)).toBeVisible();
    await expect(page.getByTestId('seloria-coming-soon')).toBeVisible();
    expect(getErrors()).toHaveLength(0);
  });

  test('links to privacy and support', async ({ page }) => {
    await page.goto('/seloria');
    await expect(page.getByRole('link', { name: 'Privacy' })).toHaveAttribute(
      'href',
      '/seloria/privacy'
    );
    await expect(page.getByRole('link', { name: 'Support' })).toHaveAttribute(
      'href',
      '/seloria/support'
    );
  });

  test('has its own title, description and canonical', async ({ page }) => {
    await page.goto('/seloria');
    await expect(page).toHaveTitle(seloria.pageTitle);
    await expect
      .poll(async () =>
        page
          .locator('head meta[name="description"]')
          .evaluateAll((els) => els.map((el) => el.getAttribute('content')))
      )
      .toContain(seloria.description);
    await expect(
      page.locator(
        'head link[rel="canonical"][href="https://imaugust.com/seloria"]'
      )
    ).toHaveCount(1);
  });

  test('sitemap lists /seloria', async ({ request }) => {
    const body = await (await request.get('/sitemap.xml')).text();
    expect(body).toContain('<loc>https://imaugust.com/seloria</loc>');
  });

  test('is reachable from the home page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Seloria' }).click();
    await expect(page).toHaveURL(/\/seloria$/);
    await expect(
      page.getByRole('heading', { level: 1, name: 'Seloria' })
    ).toBeVisible();
  });

  test('deep link /seloria/* falls back to the app, not a server 404', async ({
    request,
  }) => {
    const res = await request.get('/seloria/privacy');
    expect(res.status()).toBe(200);
    expect(await res.text()).toContain('id="root"');
  });

  test('is usable on a narrow mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/seloria');
    await expect(
      page.getByRole('heading', { name: /streams from your own server/i })
    ).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(overflow).toBe(false);
  });

  test('shows app screenshots that load', async ({ page }) => {
    await page.goto('/seloria');
    const shots = page.getByRole('img', { name: /^Seloria /i });
    await expect(shots.first()).toBeVisible();
    expect(await shots.count()).toBeGreaterThanOrEqual(6);
    const broken = await shots.evaluateAll(
      (imgs) =>
        imgs.filter(
          (img) =>
            (img as HTMLImageElement).complete &&
            (img as HTMLImageElement).naturalWidth === 0
        ).length
    );
    expect(broken).toBe(0);
  });

  test('gallery chevrons scroll the screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 900 });
    await page.goto('/seloria');
    const prev = page.getByRole('button', { name: /previous screenshots/i });
    const next = page.getByRole('button', { name: /next screenshots/i });
    const list = page.locator('ul', {
      has: page.getByRole('img', { name: /home screen/i }),
    });

    await expect(prev).toBeDisabled();
    await expect(next).toBeEnabled();
    await next.click();
    await expect
      .poll(() => list.evaluate((el) => el.scrollLeft))
      .toBeGreaterThan(0);
    await expect(prev).toBeEnabled();
  });
});
