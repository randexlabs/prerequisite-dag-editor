import { MarkerType } from "@xyflow/react";
import { describe, expect, it } from "vitest";
import type { PrerequisiteEdge } from "../domain/graph";
import { decorateEdgesForHighlight } from "./graph-presentation";

const edges: PrerequisiteEdge[] = [
  {
    id: "programming-functions",
    source: "programming",
    target: "functions",
    className: "existing-edge-class",
    style: { stroke: "var(--color-edge)", strokeWidth: 2 },
  },
  {
    id: "functions-input",
    source: "functions",
    target: "input",
    style: { stroke: "var(--color-edge)", strokeWidth: 2 },
  },
];

describe("decorateEdgesForHighlight", () => {
  it("applies an inline highlight to descendant edges and their arrow markers", () => {
    const [highlighted] = decorateEdgesForHighlight(
      edges,
      new Set(["programming-functions"]),
    );

    expect(highlighted.className).toContain("existing-edge-class");
    expect(highlighted.className).toContain("is-adjacent-edge");
    expect(highlighted.style).toMatchObject({
      stroke: "var(--color-adjacent)",
      strokeWidth: 3,
    });
    expect(highlighted.markerEnd).toEqual({
      type: MarkerType.ArrowClosed,
      color: "var(--color-adjacent)",
    });
  });

  it("leaves unrelated edges visually unchanged", () => {
    const [, unrelated] = decorateEdgesForHighlight(
      edges,
      new Set(["programming-functions"]),
    );

    expect(unrelated.className).toBeUndefined();
    expect(unrelated.style).toEqual({
      stroke: "var(--color-edge)",
      strokeWidth: 2,
    });
    expect(unrelated.markerEnd).toBeUndefined();
  });
});
