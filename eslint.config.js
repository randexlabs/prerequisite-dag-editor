import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const sourceFiles = ["src/**/*.{ts,tsx}"];
const toolingFiles = ["eslint.config.js", "*.config.{js,mjs,ts}", "scripts/**/*.mjs"];

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", "src-tauri/target/**", "src-tauri/icons/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: sourceFiles,
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react-refresh/only-export-components": ["error", { allowConstantExport: true }],
    },
  },
  {
    files: toolingFiles,
    languageOptions: {
      globals: globals.nodeBuiltin,
    },
  },
  eslintConfigPrettier,
);
