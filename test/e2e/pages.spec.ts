import { test, expect } from '@playwright/test';
import { howIWork } from '../../src/content';

test.describe('Pages Rendering', () => {
  test('how I work page lists principles and stack tags', async ({ page }) => {
    await page.goto('/how-i-work');

    await expect(
      page.getByRole('heading', { name: /the stack changes/i })
    ).toBeVisible();
    await expect(page.getByRole('listitem')).toHaveCount(3);
    await expect(page.getByText(/agents type/i)).toBeVisible();

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
      name: /hello@imaugust\.com/i,
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
});
