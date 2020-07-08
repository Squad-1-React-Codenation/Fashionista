import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ContentPage from "./pages/Content";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/produto/:id" component={Product} />
      <Route path="/:page" component={ContentPage} />
    </Switch>
  );
};

export default Routes;
