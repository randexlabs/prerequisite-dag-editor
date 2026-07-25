import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type EdgeChange,
  type NodeChange,
} from "@xyflow/react";
import { create } from "zustand";
import {
  type LearningNode,
  type LearningNodeData,
  type PrerequisiteEdge,
  wouldCreateCycle,
} from "../domain/graph";

const statusClass = (status: LearningNodeData["status"]) => `topic-node topic-${status}`;

const initialNodes: LearningNode[] = [
  {
    id: "fundamentals",
    position: { x: 80, y: 160 },
    data: { label: "Fundamentals", status: "mastered" },
    className: statusClass("mastered"),
  },
  {
    id: "intermediate",
    position: { x: 380, y: 80 },
    data: { label: "Intermediate topic", status: "learning" },
    className: statusClass("learning"),
  },
  {
    id: "goal",
    position: { x: 680, y: 160 },
    data: { label: "Learning goal", status: "unknown" },
    className: statusClass("unknown"),
  },
];

const initialEdges: PrerequisiteEdge[] = [
  { id: "fundamentals-intermediate", source: "fundamentals", target: "intermediate" },
  { id: "intermediate-goal", source: "intermediate", target: "goal" },
];

type TopicPatch = Partial<Pick<LearningNodeData, "label" | "status">>;

type GraphStore = {
  nodes: LearningNode[];
  edges: PrerequisiteEdge[];
  selectedNodeId: string | null;
  cycleMessage: string | null;
  onNodesChange: (changes: NodeChange<LearningNode>[]) => void;
  onEdgesChange: (changes: EdgeChange<PrerequisiteEdge>[]) => void;
  connect: (connection: Connection) => void;
  addNode: () => string;
  updateNode: (id: string, patch: TopicPatch) => void;
  deleteNode: (id: string) => void;
  selectNode: (id: string | null) => void;
  clearCycleMessage: () => void;
};

export const useGraphStore = create<GraphStore>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  selectedNodeId: null,
  cycleMessage: null,
  onNodesChange: (changes) =>
    set((state) => {
      const removedIds = new Set(
        changes.filter((change) => change.type === "remove").map((change) => change.id),
      );

      return {
        nodes: applyNodeChanges(changes, state.nodes),
        edges:
          removedIds.size === 0
            ? state.edges
            : state.edges.filter(
                (edge) => !removedIds.has(edge.source) && !removedIds.has(edge.target),
              ),
        selectedNodeId:
          state.selectedNodeId && removedIds.has(state.selectedNodeId)
            ? null
            : state.selectedNodeId,
      };
    }),
  onEdgesChange: (changes) =>
    set((state) => ({ edges: applyEdgeChanges(changes, state.edges) })),
  connect: (connection) => {
    if (!connection.source || !connection.target) return;

    if (wouldCreateCycle(get().edges, connection.source, connection.target)) {
      set({ cycleMessage: "Connection rejected: prerequisite graphs cannot contain cycles." });
      return;
    }

    set((state) => ({
      edges: addEdge({ ...connection, id: crypto.randomUUID() }, state.edges),
      cycleMessage: null,
    }));
  },
  addNode: () => {
    const id = crypto.randomUUID();

    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id,
          position: { x: 220 + state.nodes.length * 28, y: 220 + (state.nodes.length % 4) * 42 },
          data: { label: "New topic", status: "unknown" },
          className: statusClass("unknown"),
        },
      ],
      selectedNodeId: id,
    }));

    return id;
  },
  updateNode: (id, patch) =>
    set((state) => ({
      nodes: state.nodes.map((node) => {
        if (node.id !== id) return node;

        const data = {
          ...node.data,
          ...patch,
          label: patch.label === undefined ? node.data.label : patch.label.trim() || node.data.label,
        };

        return {
          ...node,
          data,
          className: statusClass(data.status),
        };
      }),
    })),
  deleteNode: (id) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== id),
      edges: state.edges.filter((edge) => edge.source !== id && edge.target !== id),
      selectedNodeId: state.selectedNodeId === id ? null : state.selectedNodeId,
    })),
  selectNode: (id) => set({ selectedNodeId: id }),
  clearCycleMessage: () => set({ cycleMessage: null }),
}));