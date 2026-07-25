import { beforeEach, describe, expect, it } from "vitest";
import type { LearningNode, PrerequisiteEdge } from "../domain/graph";
import { useGraphStore } from "./graph-store";
import { duplicateSelectedTopics } from "./topic-actions";

const nodes: LearningNode[] = [
  {
    id: "a",
    type: "topic",
    position: { x: 40, y: 60 },
    data: { label: "Topic A", status: "unknown" },
    selected: false,
  },
  {
    id: "b",
    type: "topic",
    position: { x: 240, y: 160 },
    data: { label: "Topic B", status: "learning" },
    selected: true,
  },
];

const edges: PrerequisiteEdge[] = [{ id: "a-b", source: "a", target: "b", selected: false }];

describe("topic actions", () => {
  beforeEach(() => {
    useGraphStore.setState({
      nodes: structuredClone(nodes),
      edges: structuredClone(edges),
      cycleMessage: null,
      past: [],
      future: [],
      historyTransaction: null,
      documentRevision: 0,
    });
  });

  it("duplicates selected topics as one undoable document change", () => {
    const duplicatedIds = duplicateSelectedTopics();
    const state = useGraphStore.getState();
    const duplicate = state.nodes.find((node) => node.id === duplicatedIds[0]);

    expect(duplicatedIds).toHaveLength(1);
    expect(duplicate?.data).toEqual(nodes[1].data);
    expect(duplicate?.position).toEqual({ x: 272, y: 192 });
    expect(duplicate?.selected).toBe(true);
    expect(state.nodes.find((node) => node.id === "b")?.selected).toBe(false);
    expect(state.edges).toEqual(edges);
    expect(state.past).toHaveLength(1);
    expect(state.documentRevision).toBe(1);

    state.undo();
    expect(useGraphStore.getState().nodes).toHaveLength(2);
  });

  it("does nothing when no topic is selected", () => {
    useGraphStore.getState().clearSelection();

    expect(duplicateSelectedTopics()).toEqual([]);
    expect(useGraphStore.getState().documentRevision).toBe(0);
  });
});
