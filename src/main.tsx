import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@xyflow/react/dist/style.css";
import "./theme.css";
import "./styles.css";
import "./interaction-performance.css";
import { App } from "./App";
import { GlobalShortcuts } from "./components/GlobalShortcuts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalShortcuts />
    <App />
  </StrictMode>,
);
