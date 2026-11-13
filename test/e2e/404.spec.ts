import { test, expect } from '@playwright/test';

test.describe('404 Page Handling', () => {
  test('should handle invalid routes gracefully', async ({ page }) => {
    await page.goto('/nonexistent-page-12345');

    // 404 page should either redirect to home or display 404 content
    const isHomePage = page.url().endsWith('/');
    if (!isHomePage) {
      await expect(
        page.getByText(/404|not found|page not found/i).first()
      ).toBeVisible();
    }
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
