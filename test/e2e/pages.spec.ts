import { test, expect } from '@playwright/test';

test.describe('Pages Rendering', () => {
  test('home page should render without errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');

    // Check page loads without errors
    await expect(page).not.toHaveTitle(/error/i);
    expect(consoleErrors).toHaveLength(0);

    // Should have navigation
    await expect(page.locator('header, nav')).toBeVisible();
  });

  test('about page should render with content', async ({ page }) => {
    await page.goto('/about');

    // Page should have heading
    await expect(page.locator('h1, h2')).toBeVisible();
  });

  test('skills page should render with content', async ({ page }) => {
    await page.goto('/skills');

    // Skills page should have main content area
    await expect(page.locator('main, section, article')).toBeVisible();
  });

  test('contact page should render with content', async ({ page }) => {
    await page.goto('/contact');

    // Contact page should have visible content
    await expect(page.locator('main, section, article')).toBeVisible();
  });

  test('all pages should load without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Visit all pages
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).click();
    await page.getByRole('link', { name: /skills/i }).click();
    await page.getByRole('link', { name: /contact/i }).click();

    expect(consoleErrors).toHaveLength(0);
  });
});
