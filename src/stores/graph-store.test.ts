import { beforeEach, describe, expect, it } from "vitest";
import type { LearningNode, PrerequisiteEdge } from "../domain/graph";
import { useGraphStore } from "./graph-store";

const nodes: LearningNode[] = [
  {
    id: "a",
    type: "topic",
    position: { x: 0, y: 0 },
    data: { label: "Topic A", status: "unknown" },
    selected: false,
  },
  {
    id: "b",
    type: "topic",
    position: { x: 200, y: 0 },
    data: { label: "Topic B", status: "learning" },
    selected: false,
  },
  {
    id: "c",
    type: "topic",
    position: { x: 400, y: 0 },
    data: { label: "Topic C", status: "mastered" },
    selected: false,
  },
];

const edges: PrerequisiteEdge[] = [
  { id: "a-b", source: "a", target: "b", selected: false },
  { id: "b-c", source: "b", target: "c", selected: false },
];

describe("graph editing", () => {
  beforeEach(() => {
    useGraphStore.setState({
      nodes: structuredClone(nodes),
      edges: structuredClone(edges),
      cycleMessage: null,
      connectionSourceId: null,
      past: [],
      future: [],
      historyTransaction: null,
      documentRevision: 0,
    });
  });

  it("creates and selects a topic", () => {
    const id = useGraphStore.getState().addNode();
    const state = useGraphStore.getState();

    expect(state.nodes.some((node) => node.id === id && node.selected)).toBe(true);
    expect(state.nodes.filter((node) => node.selected)).toHaveLength(1);
    expect(state.past).toHaveLength(1);
    expect(state.documentRevision).toBe(1);
  });

  it("renames a topic and changes its status immediately", () => {
    useGraphStore.getState().updateNode("b", {
      label: "Renamed topic",
      status: "mastered",
    });
    const state = useGraphStore.getState();
    const node = state.nodes.find((item) => item.id === "b");

    expect(node?.data).toEqual({ label: "Renamed topic", status: "mastered" });
    expect(state.past).toHaveLength(1);
    expect(state.documentRevision).toBe(1);
  });

  it("supports additive and toggle selection without dirtying the document", () => {
    useGraphStore.getState().setSelectedNodes(["a"], "replace");
    useGraphStore.getState().setSelectedNodes(["b"], "add");

    expect(
      useGraphStore
        .getState()
        .nodes.filter((node) => node.selected)
        .map((node) => node.id),
    ).toEqual(["a", "b"]);

    useGraphStore.getState().setSelectedNodes(["a"], "toggle");
    const state = useGraphStore.getState();

    expect(state.nodes.filter((node) => node.selected).map((node) => node.id)).toEqual(["b"]);
    expect(state.past).toHaveLength(0);
    expect(state.documentRevision).toBe(0);
  });

  it("deletes multiple selected topics and their incident connections", () => {
    useGraphStore.getState().setSelectedNodes(["a", "b"], "replace");
    useGraphStore.getState().deleteSelected();
    const state = useGraphStore.getState();

    expect(state.nodes.map((node) => node.id)).toEqual(["c"]);
    expect(state.edges).toHaveLength(0);
    expect(state.past).toHaveLength(1);
    expect(state.documentRevision).toBe(1);
  });

  it("undoes and redoes graph changes", () => {
    useGraphStore.getState().updateNode("b", { label: "Changed" });
    useGraphStore.getState().undo();

    expect(useGraphStore.getState().nodes.find((node) => node.id === "b")?.data.label).toBe(
      "Topic B",
    );

    useGraphStore.getState().redo();

    expect(useGraphStore.getState().nodes.find((node) => node.id === "b")?.data.label).toBe(
      "Changed",
    );
    expect(useGraphStore.getState().documentRevision).toBe(3);
  });

  it("collapses a title editing transaction into one undo and save step", () => {
    const store = useGraphStore.getState();
    store.beginHistoryTransaction();
    store.updateNode("b", { label: "C" });
    store.updateNode("b", { label: "Ch" });
    store.updateNode("b", { label: "Changed" });

    expect(useGraphStore.getState().documentRevision).toBe(0);

    store.endHistoryTransaction();

    expect(useGraphStore.getState().past).toHaveLength(1);
    expect(useGraphStore.getState().documentRevision).toBe(1);

    useGraphStore.getState().undo();
    expect(useGraphStore.getState().nodes.find((node) => node.id === "b")?.data.label).toBe(
      "Topic B",
    );
  });

  it("tracks only the temporary source of a drag connection", () => {
    const store = useGraphStore.getState();
    store.beginConnection("a");

    expect(useGraphStore.getState().connectionSourceId).toBe("a");
    expect(useGraphStore.getState().nodes.find((node) => node.id === "a")?.selected).toBe(true);

    store.finishConnectionGesture();

    expect(useGraphStore.getState().connectionSourceId).toBeNull();
    expect(useGraphStore.getState().documentRevision).toBe(0);
  });

  it("creates a validated connection from the drag gesture", () => {
    const store = useGraphStore.getState();
    store.beginConnection("a");
    store.connect({
      source: "a",
      sourceHandle: "unlocks-out",
      target: "c",
      targetHandle: "prerequisite-in",
    });
    const state = useGraphStore.getState();

    expect(state.edges.some((edge) => edge.source === "a" && edge.target === "c")).toBe(true);
    expect(state.connectionSourceId).toBeNull();
    expect(state.past).toHaveLength(1);
    expect(state.documentRevision).toBe(1);
  });

  it("rejects an invalid drag connection without dirtying the document", () => {
    const store = useGraphStore.getState();
    store.beginConnection("c");
    store.connect({
      source: "c",
      sourceHandle: "unlocks-out",
      target: "a",
      targetHandle: "prerequisite-in",
    });
    const state = useGraphStore.getState();

    expect(state.edges).toEqual(edges);
    expect(state.cycleMessage).toBe("That connection would create a cycle.");
    expect(state.past).toHaveLength(0);
    expect(state.documentRevision).toBe(0);
  });
});
