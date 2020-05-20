import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

import Footer from "./components/modules/footer";
import Header from "./components/modules/header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produto/:id" component={Product} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
