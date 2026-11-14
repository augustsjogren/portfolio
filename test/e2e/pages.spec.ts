import { test, expect } from '@playwright/test';
import { howIWork } from '../../src/content';

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

  test('how I work page lists working principles', async ({ page }) => {
    await page.goto('/how-i-work');

    await expect(
      page.getByRole('heading', { name: /the stack changes/i })
    ).toBeVisible();
    await expect(page.getByRole('listitem')).toHaveCount(3);
    await expect(page.getByText(/agents type/i)).toBeVisible();
  });

  test('how I work page shows current stack tags', async ({ page }) => {
    await page.goto('/how-i-work');

    await expect(page.getByText(/the stack, right now/i)).toBeVisible();
    for (const tool of howIWork.tools) {
      await expect(
        page.getByText(tool, { exact: true }).last()
      ).toBeVisible();
    }
  });

  test('contact page offers email, LinkedIn and GitHub chips', async ({
    page,
  }) => {
    await page.goto('/contact');

    const address = page.getByRole('link', {
      name: /hello@augustsjogren\.com/i,
    });
    await expect(address).toBeVisible();
    await expect(address).toHaveAttribute('href', /^mailto:/);

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
    const homeLink = page.getByRole('main').getByRole('link', {
      name: /home/i,
    });
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', '/');
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
    await page.getByRole('link', { name: /how i work/i }).click();
    await page.getByRole('link', { name: /contact/i }).click();

    expect(consoleErrors).toHaveLength(0);
  });
});
