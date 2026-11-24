import { test, expect } from '@playwright/test';
import { seloriaEmail } from '../../src/pages/seloria/content';

const pages = [
  { path: '/seloria/privacy', h1: /privacy policy/i },
  { path: '/seloria/support', h1: /support/i },
];

for (const { path, h1 } of pages) {
  test.describe(path, () => {
    test('renders with a single h1, back link, canonical and contact email', async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(h1);
      await expect(
        page.getByRole('link', { name: /back to seloria/i })
      ).toHaveAttribute('href', '/seloria');
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `https://imaugust.com${path}`
      );
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        'content',
        /Seloria/
      );
      await expect(
        page.getByRole('link', { name: seloriaEmail }).first()
      ).toHaveAttribute('href', `mailto:${seloriaEmail}`);
    });
  });
}

test('privacy page contains key policy statements', async ({ page }) => {
  await page.goto('/seloria/privacy');
  await expect(page.getByText('Last updated: 2026-11-24')).toBeVisible();
  await expect(
    page.getByText(
      'No tracking, no analytics, no advertising, no third-party SDKs.'
    )
  ).toBeVisible();
  await expect(page.getByText(/iOS Keychain/)).toBeVisible();
  await expect(
    page.getByText(/connects only to the server you enter/)
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { level: 2, name: 'Children' })
  ).toBeVisible();
});

test('support page explains what to include and the demo mode', async ({
  page,
}) => {
  await page.goto('/seloria/support');
  await expect(page.getByText(/iOS version, Seloria version/)).toBeVisible();
  await expect(page.getByText(/demo mode/)).toBeVisible();
});
