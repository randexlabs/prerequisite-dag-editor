import { describe, expect, it } from "vitest";
import { wouldCreateCycle } from "./graph";

const edges = [
  { id: "a-b", source: "a", target: "b" },
  { id: "b-c", source: "b", target: "c" },
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
