import type { LearningNode } from "../domain/graph";

export const TOPIC_NODE_MIN_WIDTH = 218;
export const TOPIC_NODE_MAX_WIDTH = 420;

const TOPIC_NODE_FIXED_SPACE = 104;
const TOPIC_TITLE_CHARACTER_WIDTH = 8.4;

export function getTopicNodeWidth(title: string): number {
  const visibleLength = Math.max(1, title.trim().length);
  const estimatedWidth = TOPIC_NODE_FIXED_SPACE + visibleLength * TOPIC_TITLE_CHARACTER_WIDTH;

  return Math.round(Math.min(TOPIC_NODE_MAX_WIDTH, Math.max(TOPIC_NODE_MIN_WIDTH, estimatedWidth)));
}

export function recenterNodeForTitle(node: LearningNode, nextTitle: string): LearningNode {
  const previousWidth = getTopicNodeWidth(node.data.label);
  const nextWidth = getTopicNodeWidth(nextTitle);

  return {
    ...node,
    position: {
      ...node.position,
      x: node.position.x - (nextWidth - previousWidth) / 2,
    },
    data: {
      ...node.data,
      label: nextTitle,
    },
  };
}
