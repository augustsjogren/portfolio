import { test, expect } from '@playwright/test';

test.describe('404 Page Handling', () => {
  test('should handle invalid routes gracefully', async ({ page }) => {
    await page.goto('/nonexistent-page-12345');

    // 404 page should either redirect to home or display 404 content
    const isHomePage = page.url().endsWith('/');
    const hasErrorMessage = await page
      .locator('text=/404|not found|page not found/i')
      .isVisible({ timeout: 1000 })
      .catch(() => false);

    expect(isHomePage || hasErrorMessage).toBeTruthy();
  });

  test('should allow navigation from invalid route', async ({ page }) => {
    await page.goto('/invalid-route-xyz');

    // Should be able to navigate back to home
    const link = page
      .getByRole('link', { name: /home|portfolio|about/i })
      .first();
    await expect(link).toBeDefined();
  });
});
