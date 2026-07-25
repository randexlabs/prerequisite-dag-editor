type DuplicateShortcutEvent = Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey">;

type WorkspaceShortcutEvent = Pick<
  KeyboardEvent,
  "key" | "ctrlKey" | "metaKey" | "shiftKey" | "altKey"
>;

type WorkspaceShortcutContext = {
  isEditing: boolean;
  hasSelection: boolean;
  hasPendingConnection: boolean;
};

export type WorkspaceShortcut =
  | "undo"
  | "redo"
  | "cancel-connection"
  | "clear-selection"
  | "delete-selection"
  | "add-topic"
  | null;

export function isDuplicateShortcut(event: DuplicateShortcutEvent): boolean {
  return (event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === "d";
}

export function getWorkspaceShortcut(
  event: WorkspaceShortcutEvent,
  context: WorkspaceShortcutContext,
): WorkspaceShortcut {
  if (context.isEditing) return null;

  const key = event.key.toLocaleLowerCase();
  const modifier = event.metaKey || event.ctrlKey;

  if (!event.altKey && modifier && key === "z") {
    return event.shiftKey ? "redo" : "undo";
  }

  if (!event.altKey && modifier && key === "y") {
    return "redo";
  }

  if (modifier || event.altKey) return null;

  if (event.key === "Escape") {
    return context.hasPendingConnection ? "cancel-connection" : "clear-selection";
  }

  if (context.hasSelection && (event.key === "Delete" || event.key === "Backspace")) {
    return "delete-selection";
  }

  if (key === "n") return "add-topic";

  return null;
}
