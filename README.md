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

Validate the frontend and graph domain logic:

```bash
pnpm build
pnpm test
```

Audit all dependencies or only production dependencies:

```bash
pnpm audit
pnpm audit:prod
```

Commit `pnpm-lock.yaml` after the first successful install. Do not run `npm audit fix --force`; review and upgrade the affected direct dependency instead.

## Topic operations

- **Create:** use **Add topic** in the header or the plus button in the topic list.
- **Read/select:** click a topic in the list or directly on the canvas.
- **Update/rename:** edit its name or mastery status in the inspector and choose **Save / rename**.
- **Delete:** use the trash button in the inspector, or press `Delete`/`Backspace` while a topic is selected and no text field is focused.
- Press `Escape` to clear the current selection.

Deleting a topic also deletes every incoming and outgoing connection attached to it.

## Direction of edges

An edge always points from a prerequisite to the topic it unlocks:

```text
prerequisite -> dependent topic
```

Connections that would create a cycle are rejected before they are added.
