import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produto/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
