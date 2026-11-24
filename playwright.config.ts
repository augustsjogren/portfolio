import { defineConfig, devices } from '@playwright/test';

const browserAgnostic = ['**/seo.spec.ts', '**/404.spec.ts'];

export default defineConfig({
  testDir: './test/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [
        ['html'],
        ['json', { outputFile: 'test-results/results.json' }],
        ['junit', { outputFile: 'test-results/junit.xml' }],
      ]
    : 'html',
  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Cross-browser projects only run with ALL_BROWSERS=1 (nightly / manual).
    // Browser-agnostic specs (SEO, 404) already run on chromium.
    ...(process.env.ALL_BROWSERS
      ? [
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
            testIgnore: browserAgnostic,
          },
          {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
            testIgnore: browserAgnostic,
          },
          {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
            testIgnore: browserAgnostic,
          },
        ]
      : []),
  ],
});
