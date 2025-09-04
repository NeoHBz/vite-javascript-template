import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <footer className="fixed bottom-2 w-full text-center">
      <a
        href="https://neohbz.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 transition hover:text-gray-800"
      >
        with ❤️ by neohbz
      </a>
    </footer>
  </StrictMode>,
);
