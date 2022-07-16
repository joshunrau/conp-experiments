import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles/main.scss";

let root;
root = document.getElementById("experiments-portal");

if (root === null) {
  root = document.createElement("div");
  document.body.appendChild(root);
}

ReactDOM.createRoot(root).render(<App/>);