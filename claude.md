# Instructions for Claude and AI Agents

This file contains critical guidelines for AI agents working on this project. Read this before implementing any features.

## Golden Rule

**Every new route, page, or feature MUST have corresponding e2e tests in `test/e2e/`.**

Tests must pass before the work is considered complete.

## Checklist for Any New Feature

When asked to add a feature, implement anything new, or modify routes:

- [ ] Implement the feature
- [ ] Add e2e tests to verify it works
- [ ] Run `npm run test:e2e` to verify all tests pass
- [ ] Run `npm run lint` to check code quality
- [ ] Confirm no existing tests are broken

**If you skip the tests, the work is incomplete.**

## Where to Add Tests

### New Page/Route

Add test to `test/e2e/navigation.spec.ts`:

```typescript
test('should navigate to [feature name]', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /[feature]/i }).click();
  await expect(page).toHaveURL('/[route]');
});
```

### New UI Component or Feature

Add test to `test/e2e/pages.spec.ts`:

```typescript
test('[feature] should work correctly', async ({ page }) => {
  await page.goto('/[page]');
  await page.getByRole('button', { name: /action/i }).click();
  await expect(page.locator('[data-testid="result"]')).toBeVisible();
});
```

### New Error Handling

Add test to `test/e2e/404.spec.ts` or create a new spec file.

## Test Guidelines

- Test **user behavior**, not implementation
- Use `getByRole()` instead of CSS selectors when possible
- Use `getByTestId()` when you need explicit selection
- Keep tests independent - no test should depend on another
- Use helper functions from `test/e2e/helpers.ts`

## Key Commands

```bash
# Run all e2e tests
npm run test:e2e

# Run tests in UI mode (interactive debugging)
npm run test:e2e:ui

# Run tests in debug mode
npm run test:e2e:debug

# Check code with linter
npm run lint

# Format code
npm run format
```

## Project Structure

- `src/` - Source code
- `test/e2e/` - E2E test files
  - `navigation.spec.ts` - Route/navigation tests
  - `pages.spec.ts` - Feature/rendering tests
  - `404.spec.ts` - Error handling tests
  - `helpers.ts` - Shared test utilities
- `playwright.config.ts` - Test configuration
- `TESTING.md` - Detailed testing documentation
- `CONTRIBUTING.md` - General contribution guidelines

## Important Files to Read

- [TESTING.md](./TESTING.md) - Complete testing guide with examples
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution policies
- [test/e2e/helpers.ts](./test/e2e/helpers.ts) - Helper functions you can use
- [playwright.config.ts](./playwright.config.ts) - Test configuration and timeouts

## CI/CD Pipeline

Tests run automatically on:

- Every pull request
- Every push to main branches

**Failing tests block merges.** This is intentional.

## If You're Unsure

1. Check existing tests in `test/e2e/` for examples
2. Review `TESTING.md` for patterns and best practices
3. Use `npm run test:e2e:ui` to debug interactively
4. Look at `test/e2e/helpers.ts` for utility functions

## Red Flags

If you find yourself:

- ❌ Skipping tests because "the feature is simple"
- ❌ Using `.catch()` in tests
- ❌ Hard-coding timeouts
- ❌ Selecting elements with CSS selectors like `a[href="/..."]`
- ❌ Creating tests that depend on execution order

...then you need to refactor. See [TESTING.md](./TESTING.md) for correct patterns.

---

**Summary:** No feature is complete without tests. Run the tests. Make sure they pass. Do not commit or submit work without verified test coverage.
