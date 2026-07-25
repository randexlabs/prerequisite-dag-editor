import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { LearningNode, MasteryStatus } from "../domain/graph";
import { useGraphStore } from "../stores/graph-store";
import { masteryStatuses, statusMeta } from "./status-meta";

export function TopicNode({ id, data, selected, isConnectable }: NodeProps<LearningNode>) {
  const updateNode = useGraphStore((state) => state.updateNode);
  const setSelectedNodes = useGraphStore((state) => state.setSelectedNodes);
  const beginHistoryTransaction = useGraphStore((state) => state.beginHistoryTransaction);
  const endHistoryTransaction = useGraphStore((state) => state.endHistoryTransaction);
  const [editingTitle, setEditingTitle] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [draft, setDraft] = useState(data.label);
  const originalTitle = useRef(data.label);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const status = statusMeta[data.status];
  const StatusIcon = status.icon;

  useEffect(() => {
    if (!editingTitle) setDraft(data.label);
  }, [data.label, editingTitle]);

  useEffect(() => {
    if (!editingTitle) return;
    titleInputRef.current?.focus();
    titleInputRef.current?.select();
  }, [editingTitle]);

  const selectOnlyThisNode = () => setSelectedNodes([id], "replace");

  const startTitleEditing = () => {
    selectOnlyThisNode();
    originalTitle.current = data.label;
    setDraft(data.label);
    beginHistoryTransaction();
    setEditingTitle(true);
    setStatusOpen(false);
  };

  const finishTitleEditing = () => {
    const nextTitle = draft.trim() || originalTitle.current;
    setDraft(nextTitle);
    updateNode(id, { label: nextTitle });
    endHistoryTransaction();
    setEditingTitle(false);
  };

  const cancelTitleEditing = () => {
    updateNode(id, { label: originalTitle.current });
    setDraft(originalTitle.current);
    endHistoryTransaction();
    setEditingTitle(false);
  };

  const handleTitleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();

    if (event.key === "Enter") {
      event.preventDefault();
      finishTitleEditing();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      cancelTitleEditing();
    }
  };

  const chooseStatus = (nextStatus: MasteryStatus) => {
    selectOnlyThisNode();
    updateNode(id, { status: nextStatus });
    setStatusOpen(false);
  };

  return (
    <article
      className={`topic-node-card topic-node-${data.status}${selected ? " is-selected" : ""}`}
      aria-label={`${data.label}, ${status.label}`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="topic-handle topic-handle-target"
        isConnectable={isConnectable}
      />

      <div className="topic-node-copy">
        {editingTitle ? (
          <input
            ref={titleInputRef}
            className="topic-title-input nodrag nopan"
            value={draft}
            maxLength={80}
            aria-label="Topic title"
            onPointerDown={(event) => event.stopPropagation()}
            onChange={(event) => {
              const value = event.target.value;
              setDraft(value);
              if (value.trim()) updateNode(id, { label: value });
            }}
            onBlur={finishTitleEditing}
            onKeyDown={handleTitleKeyDown}
          />
        ) : (
          <button
            type="button"
            className="topic-node-title nodrag nopan"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={startTitleEditing}
            title="Click to rename"
          >
            {data.label}
          </button>
        )}

        <div
          className="topic-status-control nodrag nopan"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as globalThis.Node | null)) {
              setStatusOpen(false);
            }
          }}
        >
          <button
            type="button"
            className={`topic-node-status status-${data.status}`}
            aria-haspopup="listbox"
            aria-expanded={statusOpen}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => {
              selectOnlyThisNode();
              setStatusOpen((open) => !open);
              setEditingTitle(false);
            }}
          >
            <StatusIcon size={13} strokeWidth={2.3} aria-hidden="true" />
            <span>{status.label}</span>
            <span className="status-chevron" aria-hidden="true">⌄</span>
          </button>

          {statusOpen ? (
            <div className="topic-status-menu" role="listbox" aria-label="Topic status">
              {masteryStatuses.map((value) => {
                const item = statusMeta[value];
                const ItemIcon = item.icon;

                return (
                  <button
                    key={value}
                    type="button"
                    role="option"
                    aria-selected={data.status === value}
                    className={`topic-status-option status-${value}`}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() => chooseStatus(value)}
                  >
                    <ItemIcon size={14} aria-hidden="true" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="topic-handle topic-handle-source"
        isConnectable={isConnectable}
      />
    </article>
  );
}
