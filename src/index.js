import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/form.css"
import "./css/button.css"
import "./css/alerts.css"
import './css/media.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Contextmenu from "./context/Contextmenu";
import WindowContext from "./context/WindowContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WindowContext>
    <Contextmenu>
    <Router>
      <App />
    </Router>
    </Contextmenu>
    </WindowContext>
  </React.StrictMode>
);
