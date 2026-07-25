# Prerequisite DAG Editor

A local-first visual editor for designing and navigating learning prerequisite graphs.

## Stack

- Tauri 2
- React 19 + TypeScript + Vite
- React Flow (`@xyflow/react`)
- Zustand
- Zod
- Vitest
- ESLint
- Prettier
- Rustfmt + Clippy
- pnpm

## Development

Prerequisites: Node.js 20.19+ and the platform requirements for Tauri 2, including Rust.

Enable Corepack so the `packageManager` field selects the pinned pnpm version:

```bash
corepack enable
```

When migrating an existing npm checkout, remove npm-generated artifacts once:

```bash
rm -rf node_modules package-lock.json
```

Install and start the frontend:

```bash
pnpm install
pnpm dev
```

Run the desktop app:

```bash
pnpm tauri dev
```

## Quality checks

Run the complete web and Rust validation suite:

```bash
pnpm check
```

Run individual checks:

```bash
pnpm format
pnpm format:check
pnpm lint
pnpm lint:fix
pnpm test
pnpm build
pnpm rust:fmt
pnpm rust:fmt:check
pnpm rust:clippy
pnpm rust:test
pnpm audit
pnpm audit:prod
```

`pnpm check` validates formatting across the complete repository, runs ESLint and Vitest, enforces the design-token policy, builds the web application, checks Rustfmt, runs Clippy with warnings denied, and executes the Rust tests.

Do not run `npm audit fix --force`; review and upgrade the affected direct dependency instead.

## Continuous integration

`.github/workflows/ci.yml` runs on every push to `main` and can also be started manually. It has separate web and Rust jobs.

The web job validates repository-wide formatting, ESLint, Vitest, the design-token policy, TypeScript, and the Vite production build. The Rust job generates the Tauri icons, checks Rustfmt, runs Clippy with warnings denied, and runs `cargo test`.

## Topic operations

- **Create:** use **Add topic** or press `N`.
- **Select:** click a topic. Drag with the left mouse button on empty canvas space to select multiple topics.
- **Move the canvas:** drag with the middle mouse button. `Space` plus left drag remains available as an alternative.
- **Add to selection:** hold `Ctrl`/`Cmd` while clicking topics.
- **Rename:** click the title inside a topic and type. `Enter` commits and `Escape` cancels. The card grows horizontally around its center until the maximum width, then wraps the title and grows vertically.
- **Duplicate:** select one or more topics and press `Ctrl`/`Cmd+D`. Copies keep their title and mastery state, are offset from the originals, and do not copy connections.
- **Change mastery:** click the status pill inside a topic and choose another status.
- **Delete:** select one or more topics or edges and press `Delete`/`Backspace`, or use the trash button.
- **Undo:** press `Ctrl`/`Cmd+Z` or use the back button.
- **Redo:** press `Ctrl`/`Cmd+Shift+Z`, `Ctrl+Y`, or use the forward button.
- **Clear selection:** press `Escape`.

Changes are autosaved locally. There is no explicit save button. Selection is temporary UI state and does not trigger document persistence or add entries to the undo history.

Deleting a topic also deletes every incoming and outgoing connection attached to it. A single undo step restores the complete deletion.

## Direction of edges

An edge always points from a prerequisite to the topic it unlocks:

```text
prerequisite -> dependent topic
```

Connections that would create a cycle are rejected before they are added.

## Design system

All concrete colors live in `src/theme.css`. Components must use semantic tokens such as `--color-surface`, `--color-text`, and `--color-accent`.

```bash
pnpm design:check
```

This check fails when raw hexadecimal, RGB, or HSL colors are added outside the theme file. See `docs/design-system.md` for interaction, spacing, accessibility, and component rules.
