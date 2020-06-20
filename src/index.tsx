import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./config/locales/i18n";

import Routes from "./routes";
import Footer from "./components/modules/footer";
import Header from "./components/modules/header";

import "./styles/main.scss";

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root"));
