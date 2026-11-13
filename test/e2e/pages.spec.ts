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

  test('how I work page should render with content', async ({ page }) => {
    await page.goto('/how-i-work');

    // Skills page should have main content area
    await expect(page.locator('main, section, article')).toBeVisible();
  });

  test('contact page should render with content', async ({ page }) => {
    await page.goto('/contact');

    // Contact page should have visible content
    await expect(page.locator('main, section, article')).toBeVisible();
  });

  test('about page shows heading and body copy', async ({ page }) => {
    await page.goto('/about');

    await expect(
      page.getByRole('heading', { name: /code by day/i })
    ).toBeVisible();
    await expect(page.getByText(/web-focused developer/i)).toBeVisible();
  });

  test('how I work page lists working principles', async ({ page }) => {
    await page.goto('/how-i-work');

    await expect(
      page.getByRole('heading', { name: /the stack changes/i })
    ).toBeVisible();
    await expect(page.locator('.principle')).toHaveCount(4);
    await expect(page.getByText(/agents type/i)).toBeVisible();
  });

  test('contact page offers email, LinkedIn and GitHub chips', async ({
    page,
  }) => {
    await page.goto('/contact');

    const mail = page.getByRole('link', { name: /say hi/i });
    await expect(mail).toBeVisible();
    await expect(mail).toHaveAttribute('href', /^mailto:/);

    await expect(page.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      /linkedin\.com/
    );
    await expect(page.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      /github\.com/
    );
  });

  test('404 page shows a not-found message with a way home', async ({
    page,
  }) => {
    await page.goto('/no-such-page');

    await expect(page.getByText('404')).toBeVisible();
    await expect(
      page.locator('.page-lede').getByRole('link', { name: /home/i })
    ).toBeVisible();
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
    await page.getByRole('link', { name: /how i work/i }).click();
    await page.getByRole('link', { name: /contact/i }).click();

    expect(consoleErrors).toHaveLength(0);
  });
});
