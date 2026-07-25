import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Background,
  BackgroundVariant,
  ConnectionLineType,
  MarkerType,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  SelectionMode,
  type Connection,
  type DefaultEdgeOptions,
} from "@xyflow/react";
import {
  ListTree,
  Map,
  Moon,
  MousePointer2,
  Network,
  Plus,
  Redo2,
  Search,
  Sun,
  Trash2,
  Undo2,
  X,
} from "lucide-react";
import { TopicNode } from "./components/TopicNode";
import { decorateEdgesForHighlight } from "./components/graph-presentation";
import { getWorkspaceShortcut } from "./components/keyboard-shortcuts";
import { statusMeta } from "./components/status-meta";
import { getConnectionIssue } from "./domain/connection";
import { getGraphNeighborhood, type PrerequisiteEdge } from "./domain/graph";
import { useGraphStore } from "./stores/graph-store";

const nodeTypes = { topic: TopicNode };
const fitViewOptions = { padding: 0.24 } as const;
const proOptions = { hideAttribution: true } as const;
const connectionLineStyle = {
  stroke: "var(--color-accent)",
  strokeWidth: 3,
  strokeDasharray: "7 5",
} as const;
const defaultEdgeOptions: DefaultEdgeOptions = {
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed },
  style: { stroke: "var(--color-edge)", strokeWidth: 2 },
  interactionWidth: 20,
};

type Theme = "light" | "dark";

function mergeClassNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem("prereqgraph-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function Workspace() {
  const {
    nodes,
    edges,
    cycleMessage,
    connectionSourceId,
    past,
    future,
    onNodesChange,
    onEdgesChange,
    connect,
    beginConnection,
    finishConnectionGesture,
    addNode,
    deleteSelected,
    setSelectedNodes,
    clearSelection,
    beginHistoryTransaction,
    endHistoryTransaction,
    undo,
    redo,
    clearCycleMessage,
  } = useGraphStore();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [minimapOpen, setMinimapOpen] = useState(false);
  const [isBoxSelecting, setIsBoxSelecting] = useState(false);
  const [query, setQuery] = useState("");

  const { renderedNodes, renderedEdges, selectedNodeIds, adjacentNodeIds } = useMemo(() => {
    const selectedIds = new Set(nodes.filter((node) => node.selected).map((node) => node.id));
    const neighborhood = getGraphNeighborhood(edges, selectedIds);
    const highlightedEdgeIds = connectionSourceId ? new Set<string>() : neighborhood.edgeIds;

    return {
      selectedNodeIds: selectedIds,
      adjacentNodeIds: neighborhood.nodeIds,
      renderedNodes: nodes.map((node) => {
        const isConnectionSource = node.id === connectionSourceId;
        const connectionIssue =
          connectionSourceId && !isConnectionSource
            ? getConnectionIssue(edges, connectionSourceId, node.id)
            : null;

        return {
          ...node,
          className: mergeClassNames(
            node.className,
            !connectionSourceId &&
              !node.selected &&
              neighborhood.nodeIds.has(node.id) &&
              "is-adjacent-node",
            isConnectionSource && "is-connection-source",
            connectionSourceId !== null &&
              !isConnectionSource &&
              connectionIssue === null &&
              "is-connection-candidate",
            connectionSourceId !== null &&
              !isConnectionSource &&
              connectionIssue !== null &&
              "is-connection-unavailable",
          ),
        };
      }),
      renderedEdges: decorateEdgesForHighlight(edges, highlightedEdgeIds),
    };
  }, [connectionSourceId, edges, nodes]);

  const filteredNodes = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return nodes;
    return nodes.filter((node) => node.data.label.toLocaleLowerCase().includes(normalizedQuery));
  }, [nodes, query]);

  const selectedNodeCount = selectedNodeIds.size;
  const selectedEdgeCount = edges.filter((edge) => edge.selected).length;
  const selectedElementCount = selectedNodeCount + selectedEdgeCount;

  const startBoxSelection = useCallback(() => setIsBoxSelecting(true), []);
  const finishBoxSelection = useCallback(() => setIsBoxSelecting(false), []);
  const minimapNodeColor = useCallback(
    (node: (typeof nodes)[number]) => `var(--color-status-${node.data.status ?? "unknown"})`,
    [],
  );
  const isValidConnection = useCallback(
    (connection: Connection | PrerequisiteEdge) =>
      getConnectionIssue(edges, connection.source, connection.target) === null,
    [edges],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("prereqgraph-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const action = getWorkspaceShortcut(event, {
        isEditing: Boolean(target?.matches("input, textarea, select, [contenteditable='true']")),
        hasSelection: selectedElementCount > 0,
      });

      switch (action) {
        case "undo":
          event.preventDefault();
          undo();
          return;
        case "redo":
          event.preventDefault();
          redo();
          return;
        case "clear-selection":
          event.preventDefault();
          clearSelection();
          return;
        case "delete-selection":
          event.preventDefault();
          deleteSelected();
          return;
        case "add-topic":
          event.preventDefault();
          addNode();
          return;
        default:
          return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [addNode, clearSelection, deleteSelected, redo, selectedElementCount, undo]);

  const addTopic = () => {
    addNode();
  };

  return (
    <main
      className={mergeClassNames(
        "app-shell",
        isBoxSelecting && "is-box-selecting",
        connectionSourceId !== null && "is-connecting-topics",
      )}
    >
      <section className="canvas-surface" aria-label="Prerequisite graph canvas">
        <ReactFlow
          nodes={renderedNodes}
          edges={renderedEdges}
          nodeTypes={nodeTypes}
          colorMode={theme}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={connect}
          onConnectStart={(_, { nodeId, handleType }) => {
            if (nodeId && handleType === "source") beginConnection(nodeId);
          }}
          onConnectEnd={finishConnectionGesture}
          isValidConnection={isValidConnection}
          connectionRadius={48}
          connectionLineType={ConnectionLineType.SmoothStep}
          connectOnClick={false}
          onPaneClick={clearSelection}
          onNodeDragStart={beginHistoryTransaction}
          onNodeDragStop={endHistoryTransaction}
          onSelectionStart={startBoxSelection}
          onSelectionEnd={finishBoxSelection}
          deleteKeyCode={null}
          selectionKeyCode={null}
          selectionOnDrag
          selectionMode={SelectionMode.Full}
          panOnDrag={[1]}
          panActivationKeyCode={null}
          panOnScroll
          autoPanOnSelection={false}
          elevateNodesOnSelect={false}
          onlyRenderVisibleElements
          multiSelectionKeyCode={["Meta", "Control"]}
          minZoom={0.2}
          maxZoom={2.2}
          fitView
          fitViewOptions={fitViewOptions}
          proOptions={proOptions}
          connectionLineStyle={connectionLineStyle}
          defaultEdgeOptions={defaultEdgeOptions}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={24}
            size={1.2}
            color="var(--color-canvas-grid)"
          />
          {minimapOpen ? (
            <MiniMap
              className="canvas-minimap"
              pannable
              zoomable
              nodeStrokeWidth={3}
              nodeColor={minimapNodeColor}
            />
          ) : null}
        </ReactFlow>

        {nodes.length === 0 ? (
          <div className="empty-canvas">
            <div className="empty-canvas-icon">
              <Network size={24} />
            </div>
            <h1>Start with your first topic</h1>
            <p>Add topics, then drag from the right connector to the next topic.</p>
            <button type="button" className="primary-button" onClick={addTopic}>
              <Plus size={17} /> Add topic
            </button>
          </div>
        ) : null}
      </section>

      <nav className="tool-dock floating-surface" aria-label="Canvas tools">
        <button
          type="button"
          className="tool-button"
          onClick={undo}
          disabled={past.length === 0}
          aria-label="Undo"
          title="Undo (Ctrl/Cmd+Z)"
        >
          <Undo2 size={18} />
        </button>
        <button
          type="button"
          className="tool-button"
          onClick={redo}
          disabled={future.length === 0}
          aria-label="Redo"
          title="Redo (Ctrl/Cmd+Shift+Z)"
        >
          <Redo2 size={18} />
        </button>
        <span className="dock-divider" />
        <button type="button" className="tool-button is-active" aria-label="Select tool" title="Select">
          <MousePointer2 size={18} />
          <kbd>1</kbd>
        </button>
        <button
          type="button"
          className="tool-button"
          onClick={addTopic}
          aria-label="Add topic"
          title="Add topic (N)"
        >
          <Plus size={19} />
          <kbd>N</kbd>
        </button>
        <button
          type="button"
          className={`tool-button${minimapOpen ? " is-active" : ""}`}
          onClick={() => setMinimapOpen((open) => !open)}
          aria-pressed={minimapOpen}
          aria-label="Toggle minimap"
          title="Toggle minimap"
        >
          <Map size={18} />
        </button>
        <span className="dock-divider" />
        <button
          type="button"
          className="tool-button tool-button-danger"
          onClick={deleteSelected}
          disabled={selectedElementCount === 0}
          aria-label="Delete selection"
          title="Delete selection"
        >
          <Trash2 size={18} />
        </button>
        {selectedElementCount > 0 ? (
          <span className="selection-summary">{selectedElementCount} selected</span>
        ) : null}
        <span className="dock-divider" />
        <button
          type="button"
          className="tool-button"
          onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <aside className="floating-panel topic-browser" aria-label="Topic browser">
        <header className="panel-header">
          <div>
            <p className="eyebrow">Workspace</p>
            <h2>Topics</h2>
          </div>
          <button type="button" className="icon-button" onClick={addTopic} aria-label="Add topic">
            <Plus size={17} />
          </button>
        </header>

        <label className="search-field">
          <Search size={16} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics"
            aria-label="Search topics"
          />
          {query ? (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={14} />
            </button>
          ) : null}
        </label>

        <div className="topic-list" role="list">
          {filteredNodes.map((node) => {
            const item = statusMeta[node.data.status];
            const StatusIcon = item.icon;
            const isAdjacent = !node.selected && adjacentNodeIds.has(node.id);

            return (
              <button
                key={node.id}
                type="button"
                className={mergeClassNames(
                  "topic-list-item",
                  node.selected && "is-selected",
                  isAdjacent && "is-adjacent",
                )}
                onClick={(event) =>
                  setSelectedNodes(
                    [node.id],
                    event.metaKey || event.ctrlKey || event.shiftKey ? "toggle" : "replace",
                  )
                }
                role="listitem"
              >
                <span className={`status-icon status-${node.data.status}`}>
                  <StatusIcon size={15} aria-hidden="true" />
                </span>
                <span className="topic-list-copy">
                  <strong>{node.data.label}</strong>
                  <small>{item.label}</small>
                </span>
              </button>
            );
          })}

          {filteredNodes.length === 0 ? (
            <div className="empty-list">
              <ListTree size={20} />
              <span>No matching topics</span>
            </div>
          ) : null}
        </div>
      </aside>

      {cycleMessage ? (
        <button className="toast" type="button" onClick={clearCycleMessage}>
          <strong>Connection rejected</strong>
          <span>{cycleMessage}</span>
        </button>
      ) : null}
    </main>
  );
}

export function App() {
  return (
    <ReactFlowProvider>
      <Workspace />
    </ReactFlowProvider>
  );
}