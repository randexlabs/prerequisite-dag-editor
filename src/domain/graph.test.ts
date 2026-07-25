import { describe, expect, it } from "vitest";
import { getGraphNeighborhood, wouldCreateCycle } from "./graph";

const edges = [
  { id: "a-b", source: "a", target: "b" },
  { id: "b-c", source: "b", target: "c" },
  { id: "d-b", source: "d", target: "b" },
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
  it("returns direct predecessors, successors, and their connecting edges", () => {
    const neighborhood = getGraphNeighborhood(edges, ["b"]);

    expect([...neighborhood.nodeIds].sort()).toEqual(["a", "c", "d"]);
    expect([...neighborhood.edgeIds].sort()).toEqual(["a-b", "b-c", "d-b"]);
  });

  it("does not return selected nodes as their own neighbors", () => {
    const neighborhood = getGraphNeighborhood(edges, ["a", "b"]);

    expect([...neighborhood.nodeIds].sort()).toEqual(["c", "d"]);
    expect([...neighborhood.edgeIds].sort()).toEqual(["a-b", "b-c", "d-b"]);
  });
});
