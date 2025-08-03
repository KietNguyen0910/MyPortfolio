import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/rubik/400.css"; // 400
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
