import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

import Routes from "./routes";
import Footer from "./components/modules/footer";
import Header from "./components/modules/header";

import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
