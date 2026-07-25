import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  SelectionMode,
  useReactFlow,
  type DefaultEdgeOptions,
} from "@xyflow/react";
import {
  ListTree,
  Map,
  Maximize2,
  Moon,
  MousePointer2,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Redo2,
  Search,
  Sun,
  Trash2,
  Undo2,
  X,
} from "lucide-react";
import { TopicNode } from "./components/TopicNode";
import { statusMeta } from "./components/status-meta";
import { getGraphNeighborhood } from "./domain/graph";
import { useGraphStore } from "./stores/graph-store";

const nodeTypes = { topic: TopicNode };
const fitViewOptions = { padding: 0.24 } as const;
const connectionLineStyle = {
  stroke: "var(--color-accent)",
  strokeWidth: 2,
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
    past,
    future,
    onNodesChange,
    onEdgesChange,
    connect,
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
  const { fitView } = useReactFlow();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [browserOpen, setBrowserOpen] = useState(true);
  const [minimapOpen, setMinimapOpen] = useState(false);
  const [isBoxSelecting, setIsBoxSelecting] = useState(false);
  const [query, setQuery] = useState("");

  const {
    renderedNodes,
    renderedEdges,
    selectedNodeIds,
    adjacentNodeIds,
  } = useMemo(() => {
    const selectedIds = new Set(
      nodes.filter((node) => node.selected).map((node) => node.id),
    );
    const neighborhood = getGraphNeighborhood(edges, selectedIds);

    return {
      selectedNodeIds: selectedIds,
      adjacentNodeIds: neighborhood.nodeIds,
      renderedNodes: nodes.map((node) => ({
        ...node,
        className: mergeClassNames(
          node.className,
          !node.selected && neighborhood.nodeIds.has(node.id) && "is-adjacent-node",
        ),
      })),
      renderedEdges: edges.map((edge) => ({
        ...edge,
        className: mergeClassNames(
          edge.className,
          neighborhood.edgeIds.has(edge.id) && "is-adjacent-edge",
        ),
      })),
    };
  }, [edges, nodes]);

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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("prereqgraph-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditing = target?.matches("input, textarea, select, [contenteditable='true']");
      const key = event.key.toLocaleLowerCase();
      const modifier = event.metaKey || event.ctrlKey;

      if (!isEditing && modifier && key === "z") {
        event.preventDefault();
        if (event.shiftKey) redo();
        else undo();
        return;
      }

      if (!isEditing && modifier && key === "y") {
        event.preventDefault();
        redo();
        return;
      }

      if (isEditing) return;

      if (event.key === "Escape") {
        clearSelection();
        return;
      }

      if ((event.key === "Delete" || event.key === "Backspace") && selectedElementCount > 0) {
        event.preventDefault();
        deleteSelected();
        return;
      }

      if (modifier || event.altKey) return;

      if (key === "n") {
        event.preventDefault();
        addNode();
        setBrowserOpen(true);
      }

      if (key === "f") {
        event.preventDefault();
        void fitView({ padding: 0.24, duration: 240 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    addNode,
    clearSelection,
    deleteSelected,
    fitView,
    redo,
    selectedElementCount,
    undo,
  ]);

  const addTopic = () => {
    addNode();
    setBrowserOpen(true);
  };

  return (
    <main className={`app-shell${isBoxSelecting ? " is-box-selecting" : ""}`}>
      <section className="canvas-surface" aria-label="Prerequisite graph canvas">
        <ReactFlow
          nodes={renderedNodes}
          edges={renderedEdges}
          nodeTypes={nodeTypes}
          colorMode={theme}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={connect}
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
          panActivationKeyCode="Space"
          panOnScroll
          autoPanOnSelection={false}
          elevateNodesOnSelect={false}
          onlyRenderVisibleElements
          multiSelectionKeyCode={["Meta", "Control"]}
          minZoom={0.2}
          maxZoom={2.2}
          fitView
          fitViewOptions={fitViewOptions}
          connectionLineStyle={connectionLineStyle}
          defaultEdgeOptions={defaultEdgeOptions}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={24}
            size={1.2}
            color="var(--color-canvas-grid)"
          />
          <Controls className="canvas-controls" showInteractive={false} />
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
            <div className="empty-canvas-icon"><Network size={24} /></div>
            <h1>Start with your first topic</h1>
            <p>Add a topic, then drag between its handles to define prerequisites.</p>
            <button type="button" className="primary-button" onClick={addTopic}>
              <Plus size={17} /> Add topic
            </button>
          </div>
        ) : null}
      </section>

      <div className="brand-pill floating-surface">
        <button
          type="button"
          className="icon-button"
          onClick={() => setBrowserOpen((open) => !open)}
          aria-label={browserOpen ? "Hide topic browser" : "Show topic browser"}
          title={browserOpen ? "Hide topics" : "Show topics"}
        >
          {browserOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
        </button>
        <div className="brand-mark"><Network size={18} /></div>
        <div className="brand-copy">
          <strong>PrereqGraph</strong>
          <span>Autosaved · {nodes.length} topics</span>
        </div>
      </div>

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
        <button type="button" className="tool-button" onClick={addTopic} aria-label="Add topic" title="Add topic (N)">
          <Plus size={19} />
          <kbd>N</kbd>
        </button>
        <button
          type="button"
          className="tool-button"
          onClick={() => void fitView({ padding: 0.24, duration: 240 })}
          aria-label="Fit graph to view"
          title="Fit to view (F)"
        >
          <Maximize2 size={18} />
          <kbd>F</kbd>
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

      {browserOpen ? (
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
      ) : null}

      <div className="canvas-hint floating-surface">
        <span>Left drag to select</span>
        <span>Middle drag to pan</span>
        <span><kbd>Space</kbd> + drag to pan</span>
      </div>

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
