import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./config/i18n/i18n";

import Routes from "./routes";
import Footer from "./components/modules/footer";
import Header from "./components/modules/header";

import "./styles/main.scss";
import store from "./store";

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter forceRefresh={true}>
        <Header />
        <div className="container">
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root"));
