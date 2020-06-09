import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { initLang } from "./i18n";

import Routes from "./routes";
import Footer from "./components/modules/footer";
import Header from "./components/modules/header";

import "./styles/main.scss";

const App = () => {
  initLang(document.head.lang);

  return (
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
};

ReactDOM.render(<App />, document.getElementById("root"));
