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
  type PrerequisiteEdge,
  wouldCreateCycle,
} from "../domain/graph";

const initialNodes: LearningNode[] = [
  {
    id: "fundamentals",
    position: { x: 80, y: 160 },
    data: { label: "Fundamentals", status: "mastered" },
  },
  {
    id: "intermediate",
    position: { x: 380, y: 80 },
    data: { label: "Intermediate topic", status: "learning" },
  },
  {
    id: "goal",
    position: { x: 680, y: 160 },
    data: { label: "Learning goal", status: "unknown" },
  },
];

const initialEdges: PrerequisiteEdge[] = [
  { id: "fundamentals-intermediate", source: "fundamentals", target: "intermediate" },
  { id: "intermediate-goal", source: "intermediate", target: "goal" },
];

type GraphStore = {
  nodes: LearningNode[];
  edges: PrerequisiteEdge[];
  cycleMessage: string | null;
  onNodesChange: (changes: NodeChange<LearningNode>[]) => void;
  onEdgesChange: (changes: EdgeChange<PrerequisiteEdge>[]) => void;
  connect: (connection: Connection) => void;
  addNode: () => void;
  clearCycleMessage: () => void;
};

export const useGraphStore = create<GraphStore>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  cycleMessage: null,
  onNodesChange: (changes) =>
    set((state) => ({ nodes: applyNodeChanges(changes, state.nodes) })),
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
  addNode: () =>
    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id: crypto.randomUUID(),
          position: { x: 260 + state.nodes.length * 24, y: 260 },
          data: { label: "New topic", status: "unknown" },
        },
      ],
    })),
  clearCycleMessage: () => set({ cycleMessage: null }),
}));
