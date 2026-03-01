# Contributing Guidelines

This document outlines the development practices and requirements for contributing to this project.

## Feature Development Requirements

### Every New Route or Feature Requires E2E Tests

When adding any new route, page, or feature to this portfolio, you **must**:

1. ✅ Implement the feature or route
2. ✅ Add corresponding e2e tests
3. ✅ Verify tests pass before submitting a PR

**No feature will be merged without test coverage.**

## When to Add Tests

### Adding a New Page/Route

If you're adding a new page (e.g., `/blog`, `/projects`), add tests to `test/e2e/navigation.spec.ts`:

```typescript
test('should navigate to new page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /new page/i }).click();
  await expect(page).toHaveURL('/new-page');
  await expect(page.locator('h1')).toBeVisible();
});
```

### Modifying Navigation

Changes to navbar, menu, or page links require updated navigation tests.

### Adding UI Components or Features

New interactive elements or forms should have tests in `test/e2e/pages.spec.ts`:

```typescript
test('new feature should work correctly', async ({ page }) => {
  await page.goto('/page-with-feature');

  // Test the feature works
  await page.getByRole('button', { name: /action/i }).click();
  await expect(page.locator('[data-testid="result"]')).toBeVisible();
});
```

### Error Cases

New error states or edge cases belong in appropriate test files or new spec files.

## Development Workflow

1. Create a feature branch
2. Implement your changes
3. Write e2e tests for the changes
4. Run `npm run test:e2e` locally to verify tests pass
5. Run `npm run lint` to check code quality
6. Submit a PR - CI will verify tests pass

## Test Expectations

- Tests should verify **user-visible behavior**, not implementation details
- Tests should work across browsers (Chromium, Firefox, WebKit)
- Use `getByRole()` for accessibility and resilience
- Tests should be independent and not depend on execution order
- Avoid hard-coded timeouts (use config defaults)

## Running Tests Locally

```bash
# Run all e2e tests
npm run test:e2e

# Run tests in interactive UI mode
npm run test:e2e:ui

# Run tests in debug mode
npm run test:e2e:debug
```

## CI/CD

All tests are automatically run on:

- Every pull request
- Every push to main/master

Tests must pass for PRs to be merged. Failing tests block deployment.

## Resources

- [Testing Guide](./TESTING.md) - Detailed testing documentation
- [Playwright Docs](https://playwright.dev) - Official Playwright documentation
- [Test Helpers](./test/e2e/helpers.ts) - Shared testing utilities

## Questions?

If you're unsure about test coverage or how to test a feature, check:

1. [TESTING.md](./TESTING.md) for examples
2. Similar tests in `test/e2e/` for patterns
3. Existing test files for reference implementations
