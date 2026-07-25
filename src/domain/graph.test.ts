import { describe, expect, it } from "vitest";
import { getGraphNeighborhood, wouldCreateCycle } from "./graph";

const edges = [
  { id: "a-b", source: "a", target: "b" },
  { id: "b-c", source: "b", target: "c" },
  { id: "d-b", source: "d", target: "b" },
  { id: "c-e", source: "c", target: "e" },
  { id: "x-y", source: "x", target: "y" },
];

describe("wouldCreateCycle", () => {
  it("rejects self references", () => {
    expect(wouldCreateCycle(edges, "a", "a")).toBe(true);
  });

  it("rejects a connection that closes a cycle", () => {
    expect(wouldCreateCycle(edges, "c", "a")).toBe(true);
  });

  it("accepts an acyclic connection", () => {
    expect(wouldCreateCycle(edges, "a", "c")).toBe(false);
  });
});

describe("getGraphNeighborhood", () => {
  it("returns only recursive descendants and their connecting edges", () => {
    const neighborhood = getGraphNeighborhood(edges, ["b"]);

    expect([...neighborhood.nodeIds].sort()).toEqual(["c", "e"]);
    expect([...neighborhood.edgeIds].sort()).toEqual(["b-c", "c-e"]);
  });

  it("does not highlight recursive predecessors", () => {
    const neighborhood = getGraphNeighborhood(edges, ["b"]);

    expect(neighborhood.nodeIds.has("a")).toBe(false);
    expect(neighborhood.nodeIds.has("d")).toBe(false);
    expect(neighborhood.edgeIds.has("a-b")).toBe(false);
    expect(neighborhood.edgeIds.has("d-b")).toBe(false);
  });

  it("does not cross into disconnected graph components", () => {
    const neighborhood = getGraphNeighborhood(edges, ["b"]);

    expect(neighborhood.nodeIds.has("x")).toBe(false);
    expect(neighborhood.nodeIds.has("y")).toBe(false);
    expect(neighborhood.edgeIds.has("x-y")).toBe(false);
  });

  it("does not return selected nodes as their own descendants", () => {
    const neighborhood = getGraphNeighborhood(edges, ["a", "b"]);

    expect([...neighborhood.nodeIds].sort()).toEqual(["c", "e"]);
    expect([...neighborhood.edgeIds].sort()).toEqual(["a-b", "b-c", "c-e"]);
  });
});
