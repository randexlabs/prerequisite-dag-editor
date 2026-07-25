import { Handle, Position, type NodeProps } from "@xyflow/react";
import { BookOpen, CheckCircle2, Circle } from "lucide-react";
import type { LearningNode, MasteryStatus } from "../domain/graph";

const statusMeta: Record<
  MasteryStatus,
  { label: string; icon: typeof Circle }
> = {
  unknown: { label: "Not started", icon: Circle },
  learning: { label: "Learning", icon: BookOpen },
  mastered: { label: "Mastered", icon: CheckCircle2 },
};

export function TopicNode({ data, selected }: NodeProps<LearningNode>) {
  const status = statusMeta[data.status];
  const StatusIcon = status.icon;

  return (
    <article
      className={`topic-node-card topic-node-${data.status}${selected ? " is-selected" : ""}`}
      aria-label={`${data.label}, ${status.label}`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="topic-handle topic-handle-target"
      />

      <div className="topic-node-copy">
        <strong>{data.label}</strong>
        <span className="topic-node-status">
          <StatusIcon size={13} strokeWidth={2.3} aria-hidden="true" />
          {status.label}
        </span>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="topic-handle topic-handle-source"
      />
    </article>
  );
}
