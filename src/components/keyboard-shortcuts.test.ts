import { describe, expect, it } from "vitest";
import { isDuplicateShortcut } from "./keyboard-shortcuts";

describe("keyboard shortcuts", () => {
  it("recognizes Ctrl+D and Cmd+D as duplicate", () => {
    expect(isDuplicateShortcut({ key: "d", ctrlKey: true, metaKey: false })).toBe(true);
    expect(isDuplicateShortcut({ key: "D", ctrlKey: false, metaKey: true })).toBe(true);
  });

  it("does not treat an unmodified D key as duplicate", () => {
    expect(isDuplicateShortcut({ key: "d", ctrlKey: false, metaKey: false })).toBe(false);
  });
});
