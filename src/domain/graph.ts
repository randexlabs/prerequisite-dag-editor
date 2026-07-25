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

  const outgoingEdges = new Map<string, PrerequisiteEdge[]>();

  for (const edge of edges) {
    outgoingEdges.set(edge.source, [...(outgoingEdges.get(edge.source) ?? []), edge]);
  }

  const visited = new Set(selected);
  const queue = [...selected];

  while (queue.length > 0) {
    const current = queue.shift()!;

    for (const edge of outgoingEdges.get(current) ?? []) {
      edgeIds.add(edge.id);

      if (visited.has(edge.target)) continue;

      visited.add(edge.target);
      queue.push(edge.target);

      if (!selected.has(edge.target)) {
        nodeIds.add(edge.target);
      }
    }
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
