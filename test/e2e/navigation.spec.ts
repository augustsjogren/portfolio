import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should load home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Portfolio|August|Home/i);
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to skills page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /skills/i }).click();
    await expect(page).toHaveURL('/skills');
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('should navigate between all pages from navbar', async ({ page }) => {
    // Start from about
    await page.goto('/about');
    await expect(page).toHaveURL('/about');

    // Navigate to skills
    await page.getByRole('link', { name: /skills/i }).click();
    await expect(page).toHaveURL('/skills');

    // Navigate to contact
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL('/contact');

    // Navigate back to home
    await page.getByRole('link', { name: /home|portfolio/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('should support back button navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL('/about');

    await page.goBack();
    await expect(page).toHaveURL('/');
  });
});
