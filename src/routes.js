import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route restricted exact path="/" component={Home} />
        <Route restricted path="/login" component={Login} />
        <Route restricted path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
