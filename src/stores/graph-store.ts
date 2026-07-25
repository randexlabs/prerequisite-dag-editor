import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type EdgeChange,
  type NodeChange,
} from "@xyflow/react";
import { create } from "zustand";
import { connectionIssueMeta, getConnectionIssue } from "../domain/connection";
import type { LearningNode, LearningNodeData, PrerequisiteEdge } from "../domain/graph";

const STORAGE_KEY = "prereqgraph-document-v1";
const HISTORY_LIMIT = 100;
const AUTOSAVE_DELAY_MS = 180;

const initialNodes: LearningNode[] = [
  {
    id: "fundamentals",
    type: "topic",
    position: { x: 80, y: 160 },
    data: { label: "Fundamentals", status: "mastered" },
  },
  {
    id: "intermediate",
    type: "topic",
    position: { x: 380, y: 80 },
    data: { label: "Intermediate topic", status: "learning" },
  },
  {
    id: "goal",
    type: "topic",
    position: { x: 680, y: 160 },
    data: { label: "Learning goal", status: "unknown" },
  },
];

const initialEdges: PrerequisiteEdge[] = [
  { id: "fundamentals-intermediate", source: "fundamentals", target: "intermediate" },
  { id: "intermediate-goal", source: "intermediate", target: "goal" },
];

type TopicPatch = Partial<Pick<LearningNodeData, "label" | "status">>;
type SelectionMode = "replace" | "add" | "toggle";
export type TopicConnectionMode = "click" | "drag";

type GraphSnapshot = {
  nodes: LearningNode[];
  edges: PrerequisiteEdge[];
};

type PersistedDocument = GraphSnapshot & {
  version: 1;
};

type GraphStore = {
  nodes: LearningNode[];
  edges: PrerequisiteEdge[];
  cycleMessage: string | null;
  connectionSourceId: string | null;
  connectionMode: TopicConnectionMode | null;
  past: GraphSnapshot[];
  future: GraphSnapshot[];
  historyTransaction: GraphSnapshot | null;
  documentRevision: number;
  onNodesChange: (changes: NodeChange<LearningNode>[]) => void;
  onEdgesChange: (changes: EdgeChange<PrerequisiteEdge>[]) => void;
  connect: (connection: Connection) => void;
  beginConnection: (sourceId: string, mode: TopicConnectionMode) => void;
  connectToNode: (targetId: string) => void;
  finishConnectionGesture: () => void;
  cancelConnection: () => void;
  addNode: () => string;
  updateNode: (id: string, patch: TopicPatch) => void;
  deleteNode: (id: string) => void;
  deleteSelected: () => void;
  setSelectedNodes: (ids: string[], mode?: SelectionMode) => void;
  clearSelection: () => void;
  beginHistoryTransaction: () => void;
  endHistoryTransaction: () => void;
  undo: () => void;
  redo: () => void;
  clearCycleMessage: () => void;
};

function durableNode(node: LearningNode): LearningNode {
  return {
    ...structuredClone(node),
    type: "topic",
    selected: false,
    dragging: false,
  };
}

function durableEdge(edge: PrerequisiteEdge): PrerequisiteEdge {
  return {
    ...structuredClone(edge),
    selected: false,
  };
}

function createSnapshot(nodes: LearningNode[], edges: PrerequisiteEdge[]): GraphSnapshot {
  return {
    nodes: nodes.map(durableNode),
    edges: edges.map(durableEdge),
  };
}

function snapshotsEqual(left: GraphSnapshot, right: GraphSnapshot): boolean {
  return JSON.stringify(left) === JSON.stringify(right);
}

function historyState(state: GraphStore) {
  return {
    past: [...state.past, createSnapshot(state.nodes, state.edges)].slice(-HISTORY_LIMIT),
    future: [],
  };
}

function connectionUpdate(state: GraphStore, connection: Connection): Partial<GraphStore> {
  if (!connection.source || !connection.target) return {};

  const issue = getConnectionIssue(state.edges, connection.source, connection.target);
  if (issue) {
    return { cycleMessage: connectionIssueMeta[issue].message };
  }

  return {
    ...historyState(state),
    documentRevision: state.documentRevision + 1,
    edges: addEdge(
      {
        ...connection,
        id: crypto.randomUUID(),
        selected: false,
      },
      state.edges,
    ),
    cycleMessage: null,
    connectionSourceId: null,
    connectionMode: null,
  };
}

function loadDocument(): GraphSnapshot {
  if (typeof window === "undefined") {
    return createSnapshot(initialNodes, initialEdges);
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createSnapshot(initialNodes, initialEdges);

    const parsed = JSON.parse(raw) as Partial<PersistedDocument>;
    if (parsed.version !== 1 || !Array.isArray(parsed.nodes) || !Array.isArray(parsed.edges)) {
      return createSnapshot(initialNodes, initialEdges);
    }

    return createSnapshot(parsed.nodes as LearningNode[], parsed.edges as PrerequisiteEdge[]);
  } catch {
    return createSnapshot(initialNodes, initialEdges);
  }
}

const loadedDocument = loadDocument();

export const useGraphStore = create<GraphStore>((set, get) => ({
  nodes: loadedDocument.nodes,
  edges: loadedDocument.edges,
  cycleMessage: null,
  connectionSourceId: null,
  connectionMode: null,
  past: [],
  future: [],
  historyTransaction: null,
  documentRevision: 0,

  onNodesChange: (changes) =>
    set((state) => {
      const removedIds = new Set(
        changes.filter((change) => change.type === "remove").map((change) => change.id),
      );
      const hasDurableChange = changes.some(
        (change) => change.type === "position" || change.type === "remove",
      );
      const commitsImmediately = hasDurableChange && !state.historyTransaction;
      const nextNodes = applyNodeChanges(changes, state.nodes);
      const nextEdges =
        removedIds.size === 0
          ? state.edges
          : state.edges.filter(
              (edge) => !removedIds.has(edge.source) && !removedIds.has(edge.target),
            );
      const removedConnectionSource =
        state.connectionSourceId !== null && removedIds.has(state.connectionSourceId);

      return {
        ...(commitsImmediately ? historyState(state) : {}),
        documentRevision: commitsImmediately ? state.documentRevision + 1 : state.documentRevision,
        nodes: nextNodes,
        edges: nextEdges,
        connectionSourceId: removedConnectionSource ? null : state.connectionSourceId,
        connectionMode: removedConnectionSource ? null : state.connectionMode,
      };
    }),

  onEdgesChange: (changes) =>
    set((state) => {
      const hasDurableChange = changes.some((change) => change.type === "remove");
      return {
        ...(hasDurableChange ? historyState(state) : {}),
        documentRevision: hasDurableChange ? state.documentRevision + 1 : state.documentRevision,
        edges: applyEdgeChanges(changes, state.edges),
      };
    }),

  connect: (connection) => set((state) => connectionUpdate(state, connection)),

  beginConnection: (sourceId, mode) =>
    set((state) => {
      if (!state.nodes.some((node) => node.id === sourceId)) return state;

      return {
        connectionSourceId: sourceId,
        connectionMode: mode,
        cycleMessage: null,
        nodes: state.nodes.map((node) => ({ ...node, selected: node.id === sourceId })),
        edges: state.edges.map((edge) => ({ ...edge, selected: false })),
      };
    }),

  connectToNode: (targetId) => {
    const sourceId = get().connectionSourceId;
    if (!sourceId) return;

    set((state) =>
      connectionUpdate(state, {
        source: sourceId,
        sourceHandle: "unlocks-out",
        target: targetId,
        targetHandle: "prerequisite-in",
      }),
    );
  },

  finishConnectionGesture: () =>
    set((state) =>
      state.connectionMode === "drag"
        ? { connectionSourceId: null, connectionMode: null }
        : state,
    ),

  cancelConnection: () =>
    set({ connectionSourceId: null, connectionMode: null, cycleMessage: null }),

  addNode: () => {
    const id = crypto.randomUUID();

    set((state) => ({
      ...historyState(state),
      documentRevision: state.documentRevision + 1,
      connectionSourceId: null,
      connectionMode: null,
      nodes: [
        ...state.nodes.map((node) => ({ ...node, selected: false })),
        {
          id,
          type: "topic",
          position: {
            x: 220 + state.nodes.length * 28,
            y: 220 + (state.nodes.length % 4) * 42,
          },
          data: { label: "New topic", status: "unknown" },
          selected: true,
        },
      ],
      edges: state.edges.map((edge) => ({ ...edge, selected: false })),
    }));

    return id;
  },

  updateNode: (id, patch) =>
    set((state) => {
      const current = state.nodes.find((node) => node.id === id);
      if (!current) return state;

      const nextLabel =
        patch.label === undefined
          ? current.data.label
          : patch.label.trim().length > 0
            ? patch.label
            : current.data.label;
      const nextStatus = patch.status ?? current.data.status;

      if (nextLabel === current.data.label && nextStatus === current.data.status) {
        return state;
      }

      const commitsImmediately = !state.historyTransaction;

      return {
        ...(commitsImmediately ? historyState(state) : {}),
        documentRevision: commitsImmediately ? state.documentRevision + 1 : state.documentRevision,
        nodes: state.nodes.map((node) =>
          node.id === id
            ? {
                ...node,
                data: {
                  ...node.data,
                  label: nextLabel,
                  status: nextStatus,
                },
              }
            : node,
        ),
      };
    }),

  deleteNode: (id) =>
    set((state) => {
      if (!state.nodes.some((node) => node.id === id)) return state;

      const deletesConnectionSource = state.connectionSourceId === id;

      return {
        ...historyState(state),
        documentRevision: state.documentRevision + 1,
        nodes: state.nodes.filter((node) => node.id !== id),
        edges: state.edges.filter((edge) => edge.source !== id && edge.target !== id),
        connectionSourceId: deletesConnectionSource ? null : state.connectionSourceId,
        connectionMode: deletesConnectionSource ? null : state.connectionMode,
      };
    }),

  deleteSelected: () =>
    set((state) => {
      const selectedNodeIds = new Set(
        state.nodes.filter((node) => node.selected).map((node) => node.id),
      );
      const selectedEdgeIds = new Set(
        state.edges.filter((edge) => edge.selected).map((edge) => edge.id),
      );

      if (selectedNodeIds.size === 0 && selectedEdgeIds.size === 0) return state;

      const deletesConnectionSource =
        state.connectionSourceId !== null && selectedNodeIds.has(state.connectionSourceId);

      return {
        ...historyState(state),
        documentRevision: state.documentRevision + 1,
        nodes: state.nodes.filter((node) => !selectedNodeIds.has(node.id)),
        edges: state.edges.filter(
          (edge) =>
            !selectedEdgeIds.has(edge.id) &&
            !selectedNodeIds.has(edge.source) &&
            !selectedNodeIds.has(edge.target),
        ),
        connectionSourceId: deletesConnectionSource ? null : state.connectionSourceId,
        connectionMode: deletesConnectionSource ? null : state.connectionMode,
      };
    }),

  setSelectedNodes: (ids, mode = "replace") =>
    set((state) => {
      const targetIds = new Set(ids);

      return {
        nodes: state.nodes.map((node) => {
          if (mode === "replace") {
            return { ...node, selected: targetIds.has(node.id) };
          }

          if (!targetIds.has(node.id)) return node;
          if (mode === "add") return { ...node, selected: true };
          return { ...node, selected: !node.selected };
        }),
        edges:
          mode === "replace"
            ? state.edges.map((edge) => ({ ...edge, selected: false }))
            : state.edges,
      };
    }),

  clearSelection: () =>
    set((state) => ({
      nodes: state.nodes.map((node) => ({ ...node, selected: false })),
      edges: state.edges.map((edge) => ({ ...edge, selected: false })),
    })),

  beginHistoryTransaction: () =>
    set((state) =>
      state.historyTransaction
        ? state
        : { historyTransaction: createSnapshot(state.nodes, state.edges) },
    ),

  endHistoryTransaction: () =>
    set((state) => {
      if (!state.historyTransaction) return state;

      const current = createSnapshot(state.nodes, state.edges);
      if (snapshotsEqual(state.historyTransaction, current)) {
        return { historyTransaction: null };
      }

      return {
        past: [...state.past, state.historyTransaction].slice(-HISTORY_LIMIT),
        future: [],
        historyTransaction: null,
        documentRevision: state.documentRevision + 1,
      };
    }),

  undo: () =>
    set((state) => {
      const previous = state.past.at(-1);
      if (!previous) return state;

      return {
        nodes: structuredClone(previous.nodes),
        edges: structuredClone(previous.edges),
        past: state.past.slice(0, -1),
        future: [...state.future, createSnapshot(state.nodes, state.edges)].slice(-HISTORY_LIMIT),
        historyTransaction: null,
        documentRevision: state.documentRevision + 1,
        cycleMessage: null,
        connectionSourceId: null,
        connectionMode: null,
      };
    }),

  redo: () =>
    set((state) => {
      const next = state.future.at(-1);
      if (!next) return state;

      return {
        nodes: structuredClone(next.nodes),
        edges: structuredClone(next.edges),
        past: [...state.past, createSnapshot(state.nodes, state.edges)].slice(-HISTORY_LIMIT),
        future: state.future.slice(0, -1),
        historyTransaction: null,
        documentRevision: state.documentRevision + 1,
        cycleMessage: null,
        connectionSourceId: null,
        connectionMode: null,
      };
    }),

  clearCycleMessage: () => set({ cycleMessage: null }),
}));

if (typeof window !== "undefined") {
  let persistenceTimer: number | null = null;
  let observedRevision = useGraphStore.getState().documentRevision;
  let lastPersistedDocument = JSON.stringify({
    version: 1,
    ...createSnapshot(loadedDocument.nodes, loadedDocument.edges),
  } satisfies PersistedDocument);

  const flushDocument = () => {
    if (persistenceTimer !== null) {
      window.clearTimeout(persistenceTimer);
      persistenceTimer = null;
    }

    const state = useGraphStore.getState();
    const serialized = JSON.stringify({
      version: 1,
      ...createSnapshot(state.nodes, state.edges),
    } satisfies PersistedDocument);

    if (serialized === lastPersistedDocument) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, serialized);
      lastPersistedDocument = serialized;
    } catch {
      // Keep the in-memory document usable when storage is unavailable or full.
    }
  };

  useGraphStore.subscribe((state) => {
    if (state.documentRevision === observedRevision) return;
    observedRevision = state.documentRevision;

    if (persistenceTimer !== null) {
      window.clearTimeout(persistenceTimer);
    }

    persistenceTimer = window.setTimeout(flushDocument, AUTOSAVE_DELAY_MS);
  });

  window.addEventListener("beforeunload", flushDocument);
}
