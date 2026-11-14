import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('hero shows the greeting and headline', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/Hej! I'm August/i)).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /builder of software/i })
    ).toBeVisible();
    await expect(page.getByText(/TypeScript · React · Node/)).toBeVisible();
  });

  test('portrait has a location sticker', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Malmö, SE').first()).toBeVisible();
  });

  test('currently section lists what August is up to', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Currently', { exact: true })).toBeVisible();
    await expect(page.getByText(/Work/).first()).toBeVisible();
    await expect(page.getByText(/Building/).first()).toBeVisible();
    await expect(page.getByText(/Home lab/)).toBeVisible();
    await expect(page.getByText(/Off screen/)).toBeVisible();
  });

  test('currently section links to Mpya Digital', async ({ page }) => {
    await page.goto('/');
    const mpya = page.getByRole('link', { name: 'Mpya Digital' });
    await expect(mpya).toBeVisible();
    await expect(mpya).toHaveAttribute('href', 'https://www.mpyadigital.com');
  });

  test('currently section links to the chef repo', async ({ page }) => {
    await page.goto('/');
    const chef = page.getByRole('link', { name: 'chef' });
    await expect(chef).toBeVisible();
    await expect(chef).toHaveAttribute(
      'href',
      'https://github.com/augustsjogren/chef'
    );
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
    const mail = page.getByRole('link', { name: /email/i });
    await expect(mail).toBeVisible();
    await expect(mail).toHaveAttribute('href', /^mailto:/);
  });

  test('footer is present', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.getByText(/© August Sjögren/)).toBeVisible();
    await expect(footer.getByText('Malmö, SE')).toBeVisible();
  });
});
