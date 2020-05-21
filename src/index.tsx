import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
