import type { LearningNode, PrerequisiteEdge } from "../domain/graph";
import { recenterNodeForTitle } from "../components/topic-layout";
import { useGraphStore } from "./graph-store";

const DUPLICATE_OFFSET = 32;
const HISTORY_LIMIT = 100;

function snapshotNode(node: LearningNode): LearningNode {
  return {
    ...structuredClone(node),
    type: "topic",
    selected: false,
    dragging: false,
  };
}

function snapshotEdge(edge: PrerequisiteEdge): PrerequisiteEdge {
  return {
    ...structuredClone(edge),
    selected: false,
  };
}

export function updateTopicTitle(id: string, title: string): void {
  const current = useGraphStore.getState().nodes.find((node) => node.id === id);
  if (!current || title.trim().length === 0) return;

  const resized = recenterNodeForTitle(current, title);
  const store = useGraphStore.getState();

  store.updateNode(id, { label: title });
  store.onNodesChange([
    {
      id,
      type: "position",
      position: resized.position,
      dragging: false,
    },
  ]);
}

export function duplicateSelectedTopics(): string[] {
  const state = useGraphStore.getState();
  const selectedNodes = state.nodes.filter((node) => node.selected);

  if (selectedNodes.length === 0) return [];

  const duplicatedIds: string[] = [];
  const duplicates = selectedNodes.map((node) => {
    const id = crypto.randomUUID();
    duplicatedIds.push(id);

    return {
      ...structuredClone(node),
      id,
      type: "topic" as const,
      position: {
        x: node.position.x + DUPLICATE_OFFSET,
        y: node.position.y + DUPLICATE_OFFSET,
      },
      selected: true,
      dragging: false,
    };
  });

  useGraphStore.setState({
    nodes: [...state.nodes.map((node) => ({ ...node, selected: false })), ...duplicates],
    edges: state.edges.map((edge) => ({ ...edge, selected: false })),
    past: [
      ...state.past,
      {
        nodes: state.nodes.map(snapshotNode),
        edges: state.edges.map(snapshotEdge),
      },
    ].slice(-HISTORY_LIMIT),
    future: [],
    historyTransaction: null,
    documentRevision: state.documentRevision + 1,
  });

  return duplicatedIds;
}
