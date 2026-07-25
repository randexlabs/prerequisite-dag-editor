import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import process from "node:process";

const isWindows = process.platform === "win32";
const tauriArgs = process.argv.slice(2);
const iconPath = new URL("../src-tauri/icons/icon.ico", import.meta.url);

function run(args) {
  const command = isWindows ? (process.env.ComSpec ?? "cmd.exe") : "pnpm";
  const commandArgs = isWindows ? ["/d", "/s", "/c", "pnpm", ...args] : args;
  const result = spawnSync(command, commandArgs, {
    cwd: process.cwd(),
    stdio: "inherit",
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (!existsSync(iconPath)) {
  console.log("Tauri icons are missing; generating them from src-tauri/app-icon.svg...");
  run(["exec", "tauri", "icon", "src-tauri/app-icon.svg"]);
}

run(["exec", "tauri", ...tauriArgs]);
