import { Page } from '@playwright/test';

/**
 * Helper to capture console messages during page navigation
 * Useful for verifying no errors occur during user interactions
 */
export function setupConsoleErrorCapture(page: Page): {
  getErrors: () => string[];
} {
  const errors: string[] = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  return {
    getErrors: () => errors,
  };
}

/**
 * Navigate through all main pages and verify they load
 * Useful for smoke testing
 */
export async function visitAllPages(page: Page): Promise<void> {
  const pages = [
    { url: '/', name: 'home' },
    { url: '/about', name: 'about' },
    { url: '/skills', name: 'skills' },
    { url: '/contact', name: 'contact' },
  ];

  for (const p of pages) {
    await page.goto(p.url);
    // Give page time to fully render
    await page.waitForLoadState('domcontentloaded');
  }
}
