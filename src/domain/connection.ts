import type { PrerequisiteEdge } from "./graph";
import { wouldCreateCycle } from "./graph";

export type ConnectionIssue = "self" | "duplicate" | "cycle";

export const connectionIssueMeta: Record<
  ConnectionIssue,
  { shortLabel: string; message: string }
> = {
  self: {
    shortLabel: "Same topic",
    message: "A topic cannot depend on itself.",
  },
  duplicate: {
    shortLabel: "Already connected",
    message: "These topics are already connected.",
  },
  cycle: {
    shortLabel: "Would create a cycle",
    message: "That connection would create a cycle.",
  },
};

export function getConnectionIssue(
  edges: PrerequisiteEdge[],
  source: string,
  target: string,
): ConnectionIssue | null {
  if (source === target) return "self";

  if (edges.some((edge) => edge.source === source && edge.target === target)) {
    return "duplicate";
  }

  if (wouldCreateCycle(edges, source, target)) return "cycle";

  return null;
}
