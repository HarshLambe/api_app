// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";  // Ensure this path matches the actual filename
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

