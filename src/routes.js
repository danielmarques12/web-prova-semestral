import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route restricted exact path="/login" component={Login} />
        <Route restricted exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;