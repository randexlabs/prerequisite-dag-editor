import { execFileSync, spawnSync } from "node:child_process";

const baseSha = process.env.FORMAT_BASE_SHA;
const headSha = process.env.FORMAT_HEAD_SHA ?? "HEAD";
const isMissingBase = !baseSha || /^0+$/.test(baseSha);

function diffFiles(fromSha, toSha) {
  return execFileSync(
    "git",
    ["diff", "--name-only", "--diff-filter=ACMR", fromSha, toSha],
    { encoding: "utf8" },
  );
}

function listChangedFiles() {
  if (!isMissingBase) {
    try {
      return diffFiles(baseSha, headSha);
    } catch {
      // A force-push can make the event base unavailable in the local checkout.
    }
  }

  try {
    return diffFiles(`${headSha}^`, headSha);
  } catch {
    return execFileSync("git", ["ls-files"], { encoding: "utf8" });
  }
}

const supportedFile = /\.(?:[cm]?[jt]sx?|json|css|scss|md|mdx|ya?ml|html)$/u;
const ignoredPaths = ["dist/", "node_modules/", "src-tauri/icons/", "src-tauri/target/"];

const files = listChangedFiles()
  .split(/\r?\n/u)
  .map((file) => file.trim())
  .filter(Boolean)
  .filter((file) => supportedFile.test(file))
  .filter((file) => file !== "pnpm-lock.yaml")
  .filter((file) => !ignoredPaths.some((prefix) => file.startsWith(prefix)));

if (files.length === 0) {
  console.log("No changed files require Prettier validation.");
  process.exit(0);
}

console.log(`Checking Prettier formatting for ${files.length} changed file(s).`);

const pnpmCommand = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const result = spawnSync(pnpmCommand, ["exec", "prettier", "--check", ...files], {
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
