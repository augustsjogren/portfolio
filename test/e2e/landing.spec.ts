import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('hero shows the greeting and headline', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/Hej! I'm August/i)).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /runner, beatmaker/i })
    ).toBeVisible();
  });

  test('portrait has a location sticker', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Malmö, SE')).toBeVisible();
  });

  test('currently section lists what August is up to', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Currently', { exact: true })).toBeVisible();
    await expect(page.getByText(/Making/)).toBeVisible();
    await expect(page.getByText(/Running/)).toBeVisible();
    await expect(page.getByText(/Building/)).toBeVisible();
  });

  test('find me section links to external profiles', async ({ page }) => {
    await page.goto('/');
    const github = page.getByRole('link', { name: /github/i });
    await expect(github).toBeVisible();
    await expect(github).toHaveAttribute('href', /github\.com/);

    const linkedin = page.getByRole('link', { name: /linkedin/i });
    await expect(linkedin).toBeVisible();
    await expect(linkedin).toHaveAttribute('href', /linkedin\.com/);
  });

  test('email chip opens a mail draft', async ({ page }) => {
    await page.goto('/');
    const mail = page.getByRole('link', { name: /say hi/i });
    await expect(mail).toBeVisible();
    await expect(mail).toHaveAttribute('href', /^mailto:/);
  });

  test('footer is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/built with too much coffee/i)).toBeVisible();
  });
});
