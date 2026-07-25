# Prerequisite DAG Editor

A local-first visual editor for designing and navigating learning prerequisite graphs.

## Stack

- Tauri 2
- React 19 + TypeScript + Vite
- React Flow (`@xyflow/react`)
- Zustand
- Zod
- Vitest

## Development

Prerequisites: Node.js 20+ and the platform requirements for Tauri 2, including Rust.

```bash
npm install
npm run dev
```

Run the desktop app:

```bash
npm run tauri dev
```

Validate the frontend and graph domain logic:

```bash
npm run build
npm test
```

## Direction of edges

An edge always points from a prerequisite to the topic it unlocks:

```text
prerequisite -> dependent topic
```

Connections that would create a cycle are rejected before they are added.
