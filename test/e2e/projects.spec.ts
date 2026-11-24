import { test, expect } from '@playwright/test';
import { setupConsoleErrorCapture } from './helpers';

test.describe('Projects page', () => {
  test('renders heading and both project cards', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCapture(page);
    await page.goto('/projects');

    await expect(page).toHaveTitle(/Projects/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: 'Seloria' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: 'chef' })
    ).toBeVisible();
    expect(getErrors()).toHaveLength(0);
  });

  test('cards link to Seloria internally and chef externally', async ({
    page,
  }) => {
    await page.goto('/projects');

    const seloria = page.getByRole('link', { name: /seloria/i });
    await expect(seloria).toHaveAttribute('href', '/seloria');
    await expect(seloria).not.toHaveAttribute('target', '_blank');

    const chef = page.getByRole('link', { name: /chef/i });
    await expect(chef).toHaveAttribute(
      'href',
      'https://github.com/augustsjogren/chef'
    );
    await expect(chef).toHaveAttribute('target', '_blank');
    await expect(chef).toHaveAttribute('rel', /noreferrer/);
  });
});
