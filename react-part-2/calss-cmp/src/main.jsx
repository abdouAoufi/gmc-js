import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App text="this is props" />
    <App text="this is props" />
    <App text="this is ______" />
    <App text="this is props" />
    <App text="this is props" />
    <App text="this is props" />
    <App text="this is props" />
  </React.StrictMode>
);
