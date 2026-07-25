import { memo, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { ArrowRight, ChevronDown, Plus, X } from "lucide-react";
import { connectionIssueMeta, getConnectionIssue } from "../domain/connection";
import type { LearningNode, MasteryStatus } from "../domain/graph";
import { useGraphStore } from "../stores/graph-store";
import { updateTopicTitle } from "../stores/topic-actions";
import { getTopicNodeWidth } from "./topic-layout";
import { masteryStatuses, statusMeta } from "./status-meta";

export const TopicNode = memo(function TopicNode({
  id,
  data,
  selected,
  isConnectable,
}: NodeProps<LearningNode>) {
  const updateNode = useGraphStore((state) => state.updateNode);
  const setSelectedNodes = useGraphStore((state) => state.setSelectedNodes);
  const beginHistoryTransaction = useGraphStore((state) => state.beginHistoryTransaction);
  const endHistoryTransaction = useGraphStore((state) => state.endHistoryTransaction);
  const edges = useGraphStore((state) => state.edges);
  const connectionSourceId = useGraphStore((state) => state.connectionSourceId);
  const connectionMode = useGraphStore((state) => state.connectionMode);
  const beginConnection = useGraphStore((state) => state.beginConnection);
  const connectToNode = useGraphStore((state) => state.connectToNode);
  const cancelConnection = useGraphStore((state) => state.cancelConnection);
  const [editingTitle, setEditingTitle] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [draft, setDraft] = useState(data.label);
  const originalTitle = useRef(data.label);
  const skipBlurCommit = useRef(false);
  const titleInputRef = useRef<HTMLTextAreaElement>(null);
  const status = statusMeta[data.status];
  const StatusIcon = status.icon;
  const isConnectionSource = connectionSourceId === id;
  const connectionIssue =
    connectionSourceId && !isConnectionSource
      ? getConnectionIssue(edges, connectionSourceId, id)
      : null;
  const isClickConnectionCandidate =
    connectionMode === "click" &&
    connectionSourceId !== null &&
    !isConnectionSource &&
    connectionIssue === null;
  const isUnavailableConnectionTarget =
    connectionMode === "click" && connectionSourceId !== null && connectionIssue !== null;
  const connectionIssueMessage = connectionIssue
    ? connectionIssueMeta[connectionIssue].message
    : undefined;
  const handlesEnabled = isConnectable && connectionMode !== "click";

  useEffect(() => {
    if (!editingTitle) setDraft(data.label);
  }, [data.label, editingTitle]);

  useEffect(() => {
    if (!editingTitle) return;
    titleInputRef.current?.focus();
    titleInputRef.current?.select();
  }, [editingTitle]);

  useLayoutEffect(() => {
    const input = titleInputRef.current;
    if (!editingTitle || !input) return;

    input.style.height = "0px";
    input.style.height = `${input.scrollHeight}px`;
  }, [draft, editingTitle]);

  const selectOnlyThisNode = () => setSelectedNodes([id], "replace");

  const startTitleEditing = () => {
    selectOnlyThisNode();
    originalTitle.current = data.label;
    skipBlurCommit.current = false;
    setDraft(data.label);
    beginHistoryTransaction();
    setEditingTitle(true);
    setStatusOpen(false);
  };

  const finishTitleEditing = () => {
    if (skipBlurCommit.current) {
      skipBlurCommit.current = false;
      return;
    }

    const nextTitle = draft.trim() || originalTitle.current;
    setDraft(nextTitle);
    updateTopicTitle(id, nextTitle);
    endHistoryTransaction();
    setEditingTitle(false);
  };

  const cancelTitleEditing = () => {
    skipBlurCommit.current = true;
    updateTopicTitle(id, originalTitle.current);
    setDraft(originalTitle.current);
    endHistoryTransaction();
    setEditingTitle(false);
  };

  const handleTitleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
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

  const toggleClickConnection = () => {
    if (isConnectionSource) {
      cancelConnection();
      return;
    }

    beginConnection(id, "click");
    setStatusOpen(false);
  };

  return (
    <article
      className={`topic-node-card topic-node-${data.status}${selected ? " is-selected" : ""}`}
      style={{ width: getTopicNodeWidth(data.label) }}
      aria-label={`${data.label}, ${status.label}`}
      aria-disabled={isUnavailableConnectionTarget || undefined}
      title={connectionIssueMessage}
    >
      <Handle
        id="prerequisite-in"
        type="target"
        position={Position.Left}
        className="topic-handle topic-handle-target"
        isConnectable={handlesEnabled}
        aria-label="Incoming prerequisite connection"
        title="Drop a prerequisite connection here"
      >
        <Plus className="topic-handle-icon" size={13} aria-hidden="true" />
      </Handle>

      <div className="topic-node-copy">
        {editingTitle ? (
          <textarea
            ref={titleInputRef}
            className="topic-title-input nodrag nopan"
            value={draft}
            rows={1}
            maxLength={80}
            aria-label="Topic title"
            onPointerDown={(event) => event.stopPropagation()}
            onChange={(event) => {
              const value = event.target.value;
              setDraft(value);
              if (value.trim()) updateTopicTitle(id, value);
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

        <div className="topic-node-footer">
          <div
            className="topic-status-control nodrag nopan"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as HTMLElement | null)) {
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
              }}
            >
              <StatusIcon size={13} strokeWidth={2.3} aria-hidden="true" />
              <span>{status.label}</span>
              <ChevronDown className="status-chevron" size={13} aria-hidden="true" />
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

          <button
            type="button"
            className={`topic-connect-action nodrag nopan${isConnectionSource ? " is-active" : ""}`}
            aria-pressed={isConnectionSource}
            aria-label={
              isConnectionSource
                ? `Cancel connection from ${data.label}`
                : `Connect ${data.label} to the topic it unlocks`
            }
            title={
              isConnectionSource
                ? "Cancel connection"
                : "Click to choose the next topic, or drag the right port"
            }
            disabled={connectionSourceId !== null && !isConnectionSource}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={toggleClickConnection}
          >
            {isConnectionSource ? (
              <X size={13} aria-hidden="true" />
            ) : (
              <ArrowRight size={13} aria-hidden="true" />
            )}
            <span>{isConnectionSource ? "Cancel" : "Connect"}</span>
          </button>
        </div>
      </div>

      {isClickConnectionCandidate ? (
        <button
          type="button"
          className="topic-connect-target nodrag nopan"
          aria-label={`Connect prerequisite to ${data.label}`}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => connectToNode(id)}
        >
          <span className="topic-connect-target-icon">
            <ArrowRight size={16} aria-hidden="true" />
          </span>
          <span>
            <strong>Connect here</strong>
            <small>This becomes the unlocked topic</small>
          </span>
        </button>
      ) : null}

      <Handle
        id="unlocks-out"
        type="source"
        position={Position.Right}
        className="topic-handle topic-handle-source"
        isConnectable={handlesEnabled}
        aria-label="Outgoing unlock connection"
        title="Drag to the topic this prerequisite unlocks"
      >
        <ArrowRight className="topic-handle-icon" size={13} aria-hidden="true" />
      </Handle>
    </article>
  );
});
