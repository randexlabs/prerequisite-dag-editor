import { MarkerType } from "@xyflow/react";
import type { PrerequisiteEdge } from "../domain/graph";

const highlightedEdgeStyle = {
  stroke: "var(--color-adjacent)",
  strokeWidth: 3,
} as const;

const highlightedEdgeMarker = {
  type: MarkerType.ArrowClosed,
  color: "var(--color-adjacent)",
} as const;

function mergeClassNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function decorateEdgesForHighlight(
  edges: PrerequisiteEdge[],
  highlightedEdgeIds: ReadonlySet<string>,
): PrerequisiteEdge[] {
  return edges.map((edge) => {
    if (!highlightedEdgeIds.has(edge.id)) return edge;

    return {
      ...edge,
      className: mergeClassNames(edge.className, "is-adjacent-edge"),
      style: {
        ...edge.style,
        ...highlightedEdgeStyle,
      },
      markerEnd: highlightedEdgeMarker,
    };
  });
}
