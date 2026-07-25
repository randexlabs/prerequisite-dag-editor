import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
import { Network, Plus, Save, Trash2 } from "lucide-react";
import type { LearningNode, MasteryStatus } from "./domain/graph";
import { useGraphStore } from "./stores/graph-store";

type TopicInspectorProps = {
  node: LearningNode;
  onSave: (label: string, status: MasteryStatus) => void;
  onDelete: () => void;
};

function TopicInspector({ node, onSave, onDelete }: TopicInspectorProps) {
  const [label, setLabel] = useState(node.data.label);
  const [status, setStatus] = useState<MasteryStatus>(node.data.status);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!label.trim()) return;
    onSave(label, status);
  };

  return (
    <form className="topic-inspector" onSubmit={submit}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected topic</p>
          <h2>Edit topic</h2>
        </div>
      </div>

      <label className="field">
        <span>Name</span>
        <input
          autoFocus
          maxLength={80}
          value={label}
          onChange={(event) => setLabel(event.target.value)}
          placeholder="Topic name"
        />
      </label>

      <label className="field">
        <span>Status</span>
        <select value={status} onChange={(event) => setStatus(event.target.value as MasteryStatus)}>
          <option value="unknown">Not started</option>
          <option value="learning">Learning</option>
          <option value="mastered">Mastered</option>
        </select>
      </label>

      <div className="inspector-actions">
        <button type="submit" className="primary-button grow">
          <Save size={16} /> Save / rename
        </button>
        <button type="button" className="danger-button" onClick={onDelete} aria-label="Delete topic">
          <Trash2 size={16} />
        </button>
      </div>
    </form>
  );
}

export function App() {
  const {
    nodes,
    edges,
    selectedNodeId,
    cycleMessage,
    onNodesChange,
    onEdgesChange,
    connect,
    addNode,
    updateNode,
    deleteNode,
    selectNode,
    clearCycleMessage,
  } = useGraphStore();

  const selectedNode = nodes.find((node) => node.id === selectedNodeId) ?? null;
  const displayedNodes = useMemo(
    () => nodes.map((node) => ({ ...node, selected: node.id === selectedNodeId })),
    [nodes, selectedNodeId],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditing = target?.matches("input, textarea, select, [contenteditable='true']");

      if (event.key === "Escape") {
        selectNode(null);
      }

      if ((event.key === "Delete" || event.key === "Backspace") && selectedNodeId && !isEditing) {
        event.preventDefault();
        deleteNode(selectedNodeId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [deleteNode, selectNode, selectedNodeId]);

  const removeSelectedNode = () => {
    if (!selectedNode) return;

    const confirmed = window.confirm(
      `Delete “${selectedNode.data.label}”? Its prerequisite connections will also be removed.`,
    );

    if (confirmed) deleteNode(selectedNode.id);
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark"><Network size={20} /></div>
          <div>
            <strong>PrereqGraph</strong>
            <span>Prerequisite DAG editor</span>
          </div>
        </div>
        <button type="button" className="primary-button" onClick={addNode}>
          <Plus size={17} /> Add topic
        </button>
      </header>

      <section className="workspace">
        <aside className="sidebar">
          <div className="sidebar-intro">
            <p className="eyebrow">Topics</p>
            <h1>Build the learning path.</h1>
            <p>Select a topic to rename it, change its status, or remove it.</p>
          </div>

          <div className="topic-list-heading">
            <strong>{nodes.length} topics</strong>
            <button type="button" className="icon-button" onClick={addNode} aria-label="Add topic">
              <Plus size={16} />
            </button>
          </div>

          <div className="topic-list" role="list">
            {nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                className={`topic-list-item${node.id === selectedNodeId ? " selected" : ""}`}
                onClick={() => selectNode(node.id)}
                role="listitem"
              >
                <i className={`dot ${node.data.status}`} />
                <span>{node.data.label}</span>
              </button>
            ))}
          </div>

          {selectedNode ? (
            <TopicInspector
              key={selectedNode.id}
              node={selectedNode}
              onSave={(label, status) => updateNode(selectedNode.id, { label, status })}
              onDelete={removeSelectedNode}
            />
          ) : (
            <div className="empty-inspector">
              <p>Select a topic in the list or canvas to edit it.</p>
            </div>
          )}

          <div className="legend">
            <span><i className="dot mastered" /> Mastered</span>
            <span><i className="dot learning" /> Learning</span>
            <span><i className="dot unknown" /> Not started</span>
          </div>
        </aside>

        <div className="canvas-card">
          <ReactFlow
            nodes={displayedNodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={connect}
            onNodeClick={(_, node) => selectNode(node.id)}
            onNodeDoubleClick={(_, node) => selectNode(node.id)}
            onPaneClick={() => selectNode(null)}
            deleteKeyCode={null}
            fitView
          >
            <Background gap={22} size={1} />
            <MiniMap pannable zoomable />
            <Controls />
          </ReactFlow>
        </div>
      </section>

      {cycleMessage ? (
        <button className="toast" type="button" onClick={clearCycleMessage}>
          {cycleMessage}
        </button>
      ) : null}
    </main>
  );
}