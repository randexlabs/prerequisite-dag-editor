# AGENTS.md

These instructions apply to the entire repository.

## Workflow

- Use test-driven development for behavior changes: write or update a failing test first, implement the smallest change that makes it pass, then refactor while keeping the test suite green.
- Run the relevant tests before concluding any task. For repository-wide changes, run `pnpm check`.
- Do not report a task as complete while formatting, linting, tests, type checking, the design-token check, or the build are failing. Fix failures introduced or exposed by the work before concluding.
- Do not tell the user that work is complete until the full GitHub Actions CI workflow has passed for the final commit on `main`. Local checks and partial jobs are necessary but do not replace a green CI run. If CI is pending, unavailable, cancelled, or failing, report that status instead of claiming completion.
- Keep changes focused. Do not mix unrelated refactors or cleanup into a feature or fix.

## Commits

- Use Conventional Commits, for example: `feat: highlight transitive graph neighborhood`, `fix: prevent selection overlay`, or `test: cover recursive adjacency`.
- Make commits atomic: each commit should represent one coherent change that can be understood, tested, and reverted independently.
- Prefer the normal development sequence of a dedicated test commit followed by the implementation commit when practicing TDD makes that separation useful.
- Do not use vague commit messages such as `update`, `changes`, `fix stuff`, or `aaa`.

## Validation

Before concluding work, apply the formatters and run the complete validation suite:

```bash
pnpm format
pnpm rust:fmt
pnpm check
```

When iterating, run the narrowest relevant test first, then run the full check before completion. Do not bypass the frozen pnpm lockfile in CI.
