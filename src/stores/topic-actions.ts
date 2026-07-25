import { recenterNodeForTitle } from "../components/topic-layout";
import { useGraphStore } from "./graph-store";

export function updateTopicTitle(id: string, title: string): void {
  const current = useGraphStore.getState().nodes.find((node) => node.id === id);
  if (!current || title.trim().length === 0) return;

  const resized = recenterNodeForTitle(current, title);
  const store = useGraphStore.getState();

  store.updateNode(id, { label: title });
  store.onNodesChange([
    {
      id,
      type: "position",
      position: resized.position,
      dragging: false,
    },
  ]);
}
