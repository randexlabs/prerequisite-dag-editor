import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import process from "node:process";

const sourceRoot = join(process.cwd(), "src");
const tokenFile = join(sourceRoot, "theme.css");
const supportedExtensions = new Set([".css", ".ts", ".tsx"]);
const rawColorPattern = /#[0-9a-f]{3,8}\b|(?:rgb|hsl)a?\s*\(/gi;
const violations = [];

function visit(path) {
  for (const entry of readdirSync(path)) {
    const absolutePath = join(path, entry);

    if (statSync(absolutePath).isDirectory()) {
      visit(absolutePath);
      continue;
    }

    if (!supportedExtensions.has(extname(entry)) || absolutePath === tokenFile) {
      continue;
    }

    const source = readFileSync(absolutePath, "utf8");
    const lines = source.split("\n");

    lines.forEach((line, index) => {
      const matches = line.match(rawColorPattern);
      if (matches) {
        violations.push({
          file: relative(process.cwd(), absolutePath),
          line: index + 1,
          colors: matches.join(", "),
        });
      }
    });
  }
}

visit(sourceRoot);

if (violations.length > 0) {
  console.error("Raw colors are not allowed outside src/theme.css. Use a semantic design token instead.\n");
  for (const violation of violations) {
    console.error(`${violation.file}:${violation.line} -> ${violation.colors}`);
  }
  process.exit(1);
}

console.log("Design token check passed.");
