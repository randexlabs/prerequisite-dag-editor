import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
import { Network, Plus } from "lucide-react";
import { useGraphStore } from "./stores/graph-store";

export function App() {
  const {
    nodes,
    edges,
    cycleMessage,
    onNodesChange,
    onEdgesChange,
    connect,
    addNode,
    clearCycleMessage,
  } = useGraphStore();

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
          <p className="eyebrow">Workspace</p>
          <h1>Design learning paths without circular dependencies.</h1>
          <p>
            Connect prerequisites to dependent topics. Any edge that would create a cycle is rejected.
          </p>
          <div className="legend">
            <span><i className="dot mastered" /> Mastered</span>
            <span><i className="dot learning" /> Learning</span>
            <span><i className="dot unknown" /> Not started</span>
          </div>
        </aside>

        <div className="canvas-card">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={connect}
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
