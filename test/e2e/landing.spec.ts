import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('hero, location sticker and footer render', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/Hej! I'm August/i)).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /builder of software/i })
    ).toBeVisible();
    await expect(page.getByText('Malmö, SE').first()).toBeVisible();

    const footer = page.locator('footer');
    await expect(footer.getByText(/© August Sjögren/)).toBeVisible();
    await expect(footer.getByText('Malmö, SE')).toBeVisible();
  });

  test('currently section lists what August is up to', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Currently', { exact: true })).toBeVisible();
    await expect(page.getByText(/Work/).first()).toBeVisible();
    await expect(page.getByText(/Prefers/)).toBeVisible();
    await expect(page.getByText(/Building/).first()).toBeVisible();
    await expect(page.getByText(/Home lab/)).toBeVisible();
    await expect(page.getByText(/Off screen/)).toBeVisible();
  });

  test('links point to the right places', async ({ page }) => {
    await page.goto('/');

    const mpya = page.getByRole('link', { name: 'Mpya Digital' });
    await expect(mpya).toHaveAttribute('href', 'https://www.mpyadigital.com');

    const seloria = page.getByRole('link', { name: 'Seloria' });
    await expect(seloria).toHaveAttribute('href', '/seloria');
    await expect(seloria).not.toHaveAttribute('target', '_blank');

    await expect(page.getByRole('link', { name: 'chef' })).toHaveCount(0);

    await expect(page.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      /github\.com/
    );
    await expect(page.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      /linkedin\.com/
    );
    await expect(page.getByRole('link', { name: /email/i })).toHaveAttribute(
      'href',
      /^mailto:/
    );

    await page.getByRole('link', { name: /see all projects/i }).click();
    await expect(page).toHaveURL('/projects');
  });

  test('header stays stuck to the top when scrolling', async ({ page }) => {
    await page.goto('/');
    await page.mouse.wheel(0, 800);

    await expect
      .poll(async () => {
        const box = await page.locator('header').boundingBox();
        return box ? Math.round(box.y) : -1;
      })
      .toBe(0);
    await expect(page.locator('header')).toBeVisible();
  });
});
