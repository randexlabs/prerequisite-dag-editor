import type { Edge, Node } from "@xyflow/react";

export type MasteryStatus = "unknown" | "learning" | "mastered";

export type LearningNodeData = {
  label: string;
  status: MasteryStatus;
};

export type LearningNode = Node<LearningNodeData>;
export type PrerequisiteEdge = Edge;

export type GraphNeighborhood = {
  nodeIds: Set<string>;
  edgeIds: Set<string>;
};

export function getGraphNeighborhood(
  edges: PrerequisiteEdge[],
  selectedNodeIds: Iterable<string>,
): GraphNeighborhood {
  const selected = new Set(selectedNodeIds);
  const nodeIds = new Set<string>();
  const edgeIds = new Set<string>();

  if (selected.size === 0) return { nodeIds, edgeIds };

  for (const edge of edges) {
    const sourceSelected = selected.has(edge.source);
    const targetSelected = selected.has(edge.target);

    if (!sourceSelected && !targetSelected) continue;

    edgeIds.add(edge.id);
    if (!sourceSelected) nodeIds.add(edge.source);
    if (!targetSelected) nodeIds.add(edge.target);
  }

  return { nodeIds, edgeIds };
}

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
