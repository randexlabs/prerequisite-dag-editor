import { describe, expect, it } from "vitest";
import type { LearningNode } from "../domain/graph";
import {
  TOPIC_NODE_MAX_WIDTH,
  TOPIC_NODE_MIN_WIDTH,
  getTopicNodeWidth,
  recenterNodeForTitle,
} from "./topic-layout";

const node: LearningNode = {
  id: "topic",
  type: "topic",
  position: { x: 100, y: 80 },
  data: { label: "Short", status: "unknown" },
};

describe("topic layout", () => {
  it("grows horizontally until the maximum width", () => {
    expect(getTopicNodeWidth("Short")).toBe(TOPIC_NODE_MIN_WIDTH);
    expect(getTopicNodeWidth("A medium length topic title")).toBeGreaterThan(TOPIC_NODE_MIN_WIDTH);
    expect(getTopicNodeWidth("x".repeat(80))).toBe(TOPIC_NODE_MAX_WIDTH);
  });

  it("keeps the node center fixed while its title changes the width", () => {
    const previousWidth = getTopicNodeWidth(node.data.label);
    const resized = recenterNodeForTitle(node, "A substantially longer topic title");
    const nextWidth = getTopicNodeWidth(resized.data.label);

    expect(resized.position.x + nextWidth / 2).toBe(node.position.x + previousWidth / 2);
    expect(resized.position.y).toBe(node.position.y);
  });
});
