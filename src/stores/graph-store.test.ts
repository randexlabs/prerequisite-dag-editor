import { beforeEach, describe, expect, it } from "vitest";
import type { LearningNode, PrerequisiteEdge } from "../domain/graph";
import { useGraphStore } from "./graph-store";

const nodes: LearningNode[] = [
  {
    id: "a",
    position: { x: 0, y: 0 },
    data: { label: "Topic A", status: "unknown" },
    className: "topic-node topic-unknown",
  },
  {
    id: "b",
    position: { x: 200, y: 0 },
    data: { label: "Topic B", status: "learning" },
    className: "topic-node topic-learning",
  },
];

const edges: PrerequisiteEdge[] = [{ id: "a-b", source: "a", target: "b" }];

describe("topic CRUD", () => {
  beforeEach(() => {
    useGraphStore.setState({
      nodes: structuredClone(nodes),
      edges: structuredClone(edges),
      selectedNodeId: "b",
      cycleMessage: null,
    });
  });

  it("creates and selects a topic", () => {
    const id = useGraphStore.getState().addNode();
    const state = useGraphStore.getState();

    expect(state.nodes.some((node) => node.id === id)).toBe(true);
    expect(state.selectedNodeId).toBe(id);
  });

  it("renames a topic and changes its status", () => {
    useGraphStore.getState().updateNode("b", { label: "Renamed topic", status: "mastered" });
    const node = useGraphStore.getState().nodes.find((item) => item.id === "b");

    expect(node?.data).toEqual({ label: "Renamed topic", status: "mastered" });
    expect(node?.className).toContain("topic-mastered");
  });

  it("deletes a topic and its incident connections", () => {
    useGraphStore.getState().deleteNode("b");
    const state = useGraphStore.getState();

    expect(state.nodes.some((node) => node.id === "b")).toBe(false);
    expect(state.edges).toHaveLength(0);
    expect(state.selectedNodeId).toBeNull();
  });
});
