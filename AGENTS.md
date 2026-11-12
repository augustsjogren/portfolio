# Agent Instructions

Instructions for AI agents working in this repo. Read this before making changes.

## What This Is

August's personal portfolio site, deployed on Cloudflare Pages.

- **Stack:** React 19, React Router 7, Vite 7, TypeScript (strict), Sass
- **Node:** 22 (see `.nvmrc`; CI pins the same version)
- **Entry point:** `src/main.tsx` (routes + `index.html`)

## Layout

```
src/
├── components/        # Shared components (navBar, layout, header, ...)
│   └── layout/        # Layout sub-components (mainContainer)
├── pages/             # One component per route
├── hooks/             # Shared hooks (e.g. useSkills)
├── styles/            # Sass: one file per page/component + _partials
└── images/            # Static assets (imported via Vite)
test/
└── e2e/               # Playwright end-to-end tests
    ├── navigation.spec.ts   # Route/navigation tests
    ├── pages.spec.ts        # Feature/rendering tests
    ├── 404.spec.ts          # Error handling tests
    └── helpers.ts           # Shared test utilities
```

## Routes

Defined in `src/main.tsx`: `/` (home), `/about`, `/skills`, `/contact`, plus a 404 page.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server on http://localhost:5173
npm run build        # tsc && vite build
npm run lint         # Biome lint on src/
npm run format       # Prettier
npm run test:e2e     # Playwright e2e tests (auto-starts the dev server)
npm run test:e2e:ui  # Interactive Playwright UI for debugging
```

Notes:

- `npm run test:e2e` starts the dev server itself — you do not need `npm run dev` running first (locally; in CI it's always started fresh).
- Tests run against chromium, firefox, webkit and Mobile Chrome.

## The Golden Rule

**Every new route, page, or feature MUST have corresponding e2e tests in `test/e2e/`.** Tests must pass before the work is complete.

Checklist for any new feature or route:

- [ ] Implement the feature
- [ ] Add e2e tests to verify it works
- [ ] Run `npm run test:e2e` — all tests pass
- [ ] Run `npm run lint`
- [ ] Confirm no existing tests are broken

Testing details, patterns and anti-patterns: see [TESTING.md](./TESTING.md) and [CONTRIBUTING.md](./CONTRIBUTING.md).

## Test Guidelines

- Test **user behavior**, not implementation
- Use `getByRole()` instead of CSS selectors; use `getByTestId()` when explicit selection is needed
- Keep tests independent — no test depends on another
- Use the helpers in `test/e2e/helpers.ts`
- No `.catch()` in tests, no hard-coded timeouts

## Conventions

- **TypeScript strict mode** is on — don't weaken it or add `any` to silence errors
- **Styling:** Sass, one stylesheet per page/component in `src/styles/`, imported from the component
- **Pre-commit hooks:** husky + lint-staged run Biome and Prettier on staged files — expect this on every commit
- **Don't commit build artifacts** (`dist/`, `cache/`, `tsconfig.tsbuildinfo`, `test-results/`, `playwright-report/` are gitignored)
- CI blocks merge on failing tests — that's intentional

## Related Docs

- [TESTING.md](./TESTING.md) — complete testing guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) — contribution guidelines
- [CLAUDE.md](./CLAUDE.md) — pointer for Claude-specific agents (this file is canonical)
