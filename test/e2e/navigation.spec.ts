import { test, expect } from '@playwright/test';
import { setupConsoleErrorCapture } from './helpers';

test.describe('Navigation', () => {
  test('navbar links walk through every page without console errors, and back works', async ({
    page,
  }) => {
    const { getErrors } = setupConsoleErrorCapture(page);
    await page.goto('/');

    const nav = page.getByRole('banner');
    await expect(nav.getByRole('link')).toHaveText([
      'Home',
      'How I work',
      'Projects',
      'Contact',
    ]);

    await nav.getByRole('link', { name: 'How I work' }).click();
    await expect(page).toHaveURL('/how-i-work');

    await nav.getByRole('link', { name: 'Projects', exact: true }).click();
    await expect(page).toHaveURL('/projects');

    await nav.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');

    await nav.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('/');

    await page.goBack();
    await expect(page).toHaveURL('/contact');

    expect(getErrors()).toHaveLength(0);
  });
});
