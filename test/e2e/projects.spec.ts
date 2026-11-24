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

  test('Seloria card links internally', async ({ page }) => {
    await page.goto('/projects');
    const card = page.getByRole('link', { name: /seloria/i });
    await expect(card).toHaveAttribute('href', '/seloria');
    await expect(card).not.toHaveAttribute('target', '_blank');
  });

  test('chef card links externally to GitHub', async ({ page }) => {
    await page.goto('/projects');
    const card = page.getByRole('link', { name: /chef/i });
    await expect(card).toHaveAttribute(
      'href',
      'https://github.com/augustsjogren/chef'
    );
    await expect(card).toHaveAttribute('target', '_blank');
    await expect(card).toHaveAttribute('rel', /noreferrer/);
  });

  test('sets description and canonical', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://imaugust.com/projects'
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Seloria/
    );
  });

  test('nav Projects tab is active on the page', async ({ page }) => {
    await page.goto('/projects');
    await expect(
      page.getByRole('banner').getByRole('link', { name: 'Projects', exact: true })
    ).toBeVisible();
  });
});
