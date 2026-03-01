# Testing Guide

This project enforces test coverage for all new features. All PRs must include corresponding e2e tests.

## Test Structure

Tests are located in the `test/e2e/` directory and organized by feature:

- `navigation.spec.ts` - Page navigation and routing
- `pages.spec.ts` - Page rendering and content
- `404.spec.ts` - Error handling
- `helpers.ts` - Shared test utilities

## Running Tests

### Local Development

```bash
# Run all e2e tests
npm run test:e2e

# Run tests in UI mode (interactive)
npm run test:e2e:ui

# Run tests in debug mode
npm run test:e2e:debug
```

### Continuous Integration

Tests automatically run on all PRs and before deployment. Tests must pass for code to be merged.

## Adding Tests for New Features

When adding a new feature, you **must** add corresponding e2e tests:

1. **Navigation Changes** → Add tests to `test/e2e/navigation.spec.ts`
   - New page? Test navigation to/from the page
   - New nav links? Test they work correctly

2. **UI/Content Changes** → Add tests to `test/e2e/pages.spec.ts`
   - New elements? Test they render and are visible
   - New forms? Test user interactions

3. **Error Handling** → Add tests to `test/e2e/404.spec.ts` or create new file
   - New error states? Test they display correctly

### Example: Adding a Test

```typescript
import { test, expect } from '@playwright/test';
import { setupConsoleErrorCapture } from './helpers';

test('new feature should work correctly', async ({ page }) => {
  const { getErrors } = setupConsoleErrorCapture(page);

  await page.goto('/your-page');

  // Use getByRole for better resilience
  await page.getByRole('button', { name: /submit/i }).click();

  // Assert your feature works
  await expect(page.locator('[data-testid="success"]')).toBeVisible();

  // Verify no console errors
  expect(getErrors()).toHaveLength(0);
});
```

## Best Practices

### Do's ✅

- Use `getByRole()` instead of CSS selectors for user-facing elements
- Use `getByTestId()` when explicit selection is needed
- Test what users see and do (behavior, not implementation)
- Use descriptive, meaningful test names
- Group related tests with `test.describe()`
- Test across browsers (Chromium, Firefox, WebKit)
- Keep tests isolated and independent
- Use helper functions from `helpers.ts` for common patterns

### Don'ts ❌

- Avoid CSS selectors like `a[href="/page"]` for navigation
- Don't use `.catch()` for error handling (use proper assertions)
- Don't hard-code timeouts (use config defaults)
- Don't create brittle tests that depend on exact DOM structure
- Don't test implementation details, only behavior
- Don't have tests that depend on execution order

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Writing tests guide](https://playwright.dev/docs/writing-tests)
- [Best practices](https://playwright.dev/docs/best-practices)
- [Locators guide](https://playwright.dev/docs/locators)
