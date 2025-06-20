import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Modal from "react-modal";

Modal.setAppElement("#root");

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
