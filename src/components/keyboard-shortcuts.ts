type KeyboardShortcutEvent = Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey">;

export function isDuplicateShortcut(event: KeyboardShortcutEvent): boolean {
  return (event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === "d";
}
