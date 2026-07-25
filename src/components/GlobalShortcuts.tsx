import { useEffect } from "react";
import { duplicateSelectedTopics } from "../stores/topic-actions";
import { isDuplicateShortcut } from "./keyboard-shortcuts";

export function GlobalShortcuts() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditing = target?.matches(
        "input, textarea, select, [contenteditable='true']",
      );

      if (isEditing || event.repeat || !isDuplicateShortcut(event)) return;

      event.preventDefault();
      duplicateSelectedTopics();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
