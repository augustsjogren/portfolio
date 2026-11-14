import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should load home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Portfolio|August|Home/i);
  });

  test('should navigate to how I work page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /how i work/i }).click();
    await expect(page).toHaveURL('/how-i-work');
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('should navigate between all pages from navbar', async ({ page }) => {
    // Start from how I work
    await page.goto('/how-i-work');
    await expect(page).toHaveURL('/how-i-work');

    // Navigate to contact
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL('/contact');

    // Navigate back to home
    await page.getByRole('link', { name: /home|portfolio/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('should support back button navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /how i work/i }).click();
    await expect(page).toHaveURL('/how-i-work');

    await page.goBack();
    await expect(page).toHaveURL('/');
  });
});
