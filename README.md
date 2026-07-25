# Prerequisite DAG Editor

A local-first visual editor for designing and navigating learning prerequisite graphs.

## Stack

- Tauri 2
- React 19 + TypeScript + Vite
- React Flow (`@xyflow/react`)
- Zustand
- Zod
- Vitest
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

Validate the full project:

```bash
pnpm check
```

The build includes `pnpm design:check`. It rejects raw hexadecimal, RGB, or HSL colors outside `src/theme.css`; components must use semantic theme tokens.

Audit all dependencies or only production dependencies:

```bash
pnpm audit
pnpm audit:prod
```

Do not run `npm audit fix --force`; review and upgrade the affected direct dependency instead.

## Canvas workspace

The interface is canvas-first:

- the graph occupies the complete application window;
- global tools live in the floating top toolbar;
- the topic browser can be collapsed from the brand control;
- selecting a topic opens its contextual inspector on the right;
- light and dark themes use the same semantic color roles;
- the minimap is optional and starts hidden.

Keyboard shortcuts:

- `N`: create and select a topic;
- `F`: fit the graph to the viewport;
- `Delete` or `Backspace`: delete the selected topic when no text field is focused;
- `Escape`: clear the current selection.

The design rules and token contract are documented in [`docs/design-system.md`](docs/design-system.md).

## Topic operations

- **Create:** use the plus button in the toolbar or topic browser.
- **Read/select:** click a topic in the browser or directly on the canvas.
- **Update/rename:** edit its name or mastery status in the inspector and choose **Save changes**.
- **Delete:** use **Delete** in the inspector, or the keyboard shortcut.

Deleting a topic also deletes every incoming and outgoing connection attached to it.

## Direction of edges

An edge always points from a prerequisite to the topic it unlocks:

```text
prerequisite -> dependent topic
```

Connections that would create a cycle are rejected before they are added.
