# PrereqGraph design system

## Product principles

1. **Canvas first.** The graph is the product. Permanent chrome must stay compact and float above the canvas instead of shrinking it.
2. **Progressive disclosure.** Topic browsing and editing are available in contextual panels; they do not compete with the graph when they are not needed.
3. **One semantic action color.** Violet identifies selection, focus, and primary actions. Status colors are reserved for learning state.
4. **Color is never the only signal.** Every topic status includes text and an icon in addition to color.
5. **Predictable placement.** Global tools live at the top center, navigation at the left, editing at the right, and viewport controls at the bottom.
6. **Keyboard and pointer parity.** Important operations have visible buttons and keyboard shortcuts.

## Token policy

All visual colors are semantic CSS custom properties defined in `src/theme.css`.

Do not put hexadecimal, RGB, or HSL color literals in components or other stylesheets. Run:

```bash
pnpm design:check
```

The check fails when a raw color appears outside the token file.

Token names describe **roles**, not pigments:

- `--color-canvas`
- `--color-surface`
- `--color-text`
- `--color-border`
- `--color-accent`
- `--color-danger`
- `--color-status-learning`

A component must consume a role. It must not know the palette value behind that role.

## Color strategy

The interface is neutral-dominant so topic content receives visual priority. Violet is the only general-purpose accent because it remains distinct from the learning-state colors:

- neutral: canvas, surfaces, text, boundaries;
- violet: primary action, selection, keyboard focus;
- amber: learning;
- green: mastered;
- gray: not started;
- red: destructive action and errors.

Light and dark themes preserve the same semantic roles. Theme switching changes token values, never component rules.

## Interaction rules

- Interactive targets should be at least `40px` in their primary dimension.
- Keyboard focus uses an explicit high-contrast outline.
- Destructive actions require confirmation when they remove graph relationships.
- Floating panels must not cover the primary toolbar at their default positions.
- Motion must respect `prefers-reduced-motion`.

## Component geometry

- compact control: `32px`;
- default control: `40px`;
- prominent control: `48px`;
- standard radius: `12px`;
- floating surface radius: `16px`;
- spacing scale: `4, 8, 12, 16, 20, 24, 32px`.

## Canvas shortcuts

- `N`: add topic;
- `F`: fit graph to view;
- `Delete` or `Backspace`: delete selected topic;
- `Escape`: clear selection.
