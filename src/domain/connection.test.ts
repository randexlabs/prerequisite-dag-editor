import { describe, expect, it } from "vitest";
import type { PrerequisiteEdge } from "./graph";
import { getConnectionIssue } from "./connection";

const edges: PrerequisiteEdge[] = [
  { id: "a-b", source: "a", target: "b" },
  { id: "b-c", source: "b", target: "c" },
];

describe("getConnectionIssue", () => {
  it("identifies self connections before a gesture is committed", () => {
    expect(getConnectionIssue(edges, "a", "a")).toBe("self");
  });

  it("identifies duplicate prerequisite relationships", () => {
    expect(getConnectionIssue(edges, "a", "b")).toBe("duplicate");
  });

  it("identifies relationships that would close a cycle", () => {
    expect(getConnectionIssue(edges, "c", "a")).toBe("cycle");
  });

  it("accepts a new acyclic relationship", () => {
    expect(getConnectionIssue(edges, "a", "c")).toBeNull();
  });
});
