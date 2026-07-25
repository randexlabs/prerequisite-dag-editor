import { describe, expect, it } from "vitest";
import { getWorkspaceShortcut, isDuplicateShortcut } from "./keyboard-shortcuts";

describe("keyboard shortcuts", () => {
  it("recognizes Ctrl+D and Cmd+D as duplicate", () => {
    expect(isDuplicateShortcut({ key: "d", ctrlKey: true, metaKey: false })).toBe(true);
    expect(isDuplicateShortcut({ key: "D", ctrlKey: false, metaKey: true })).toBe(true);
  });

  it("does not treat an unmodified D key as duplicate", () => {
    expect(isDuplicateShortcut({ key: "d", ctrlKey: false, metaKey: false })).toBe(false);
  });

  it("keeps only essential workspace shortcuts", () => {
    const context = { isEditing: false, hasSelection: true };

    expect(
      getWorkspaceShortcut(
        { key: "z", ctrlKey: true, metaKey: false, shiftKey: false, altKey: false },
        context,
      ),
    ).toBe("undo");
    expect(
      getWorkspaceShortcut(
        { key: "z", ctrlKey: true, metaKey: false, shiftKey: true, altKey: false },
        context,
      ),
    ).toBe("redo");
    expect(
      getWorkspaceShortcut(
        { key: "y", ctrlKey: true, metaKey: false, shiftKey: false, altKey: false },
        context,
      ),
    ).toBe("redo");
    expect(
      getWorkspaceShortcut(
        { key: "Escape", ctrlKey: false, metaKey: false, shiftKey: false, altKey: false },
        context,
      ),
    ).toBe("clear-selection");
    expect(
      getWorkspaceShortcut(
        { key: "Delete", ctrlKey: false, metaKey: false, shiftKey: false, altKey: false },
        context,
      ),
    ).toBe("delete-selection");
    expect(
      getWorkspaceShortcut(
        { key: "n", ctrlKey: false, metaKey: false, shiftKey: false, altKey: false },
        context,
      ),
    ).toBe("add-topic");
  });

  it("does not reserve fit-view or keyboard-pan shortcuts", () => {
    const context = { isEditing: false, hasSelection: false };

    expect(
      getWorkspaceShortcut(
        { key: "f", ctrlKey: false, metaKey: false, shiftKey: false, altKey: false },
        context,
      ),
    ).toBeNull();
    expect(
      getWorkspaceShortcut(
        { key: " ", ctrlKey: false, metaKey: false, shiftKey: false, altKey: false },
        context,
      ),
    ).toBeNull();
  });

  it("does not trigger workspace actions while editing", () => {
    expect(
      getWorkspaceShortcut(
        { key: "n", ctrlKey: false, metaKey: false, shiftKey: false, altKey: false },
        { isEditing: true, hasSelection: false },
      ),
    ).toBeNull();
  });
});
