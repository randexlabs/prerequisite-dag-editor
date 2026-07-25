import type { Edge, Node } from "@xyflow/react";

export type MasteryStatus = "unknown" | "learning" | "mastered";

export type LearningNodeData = {
  label: string;
  status: MasteryStatus;
};

export type LearningNode = Node<LearningNodeData>;
export type PrerequisiteEdge = Edge;

export function wouldCreateCycle(
  edges: PrerequisiteEdge[],
  source: string,
  target: string,
): boolean {
  if (source === target) return true;

  const adjacency = new Map<string, string[]>();
  for (const edge of edges) {
    const outgoing = adjacency.get(edge.source) ?? [];
    outgoing.push(edge.target);
    adjacency.set(edge.source, outgoing);
  }

  const stack = [target];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const current = stack.pop()!;
    if (current === source) return true;
    if (visited.has(current)) continue;
    visited.add(current);
    stack.push(...(adjacency.get(current) ?? []));
  }

  return false;
}
