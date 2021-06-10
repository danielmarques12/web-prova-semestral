import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Bootcamps from './pages/Bootcamps';
import Students from './pages/Students';
import Coordinators from './pages/Coordinators';
import RegisterBootcamp from './pages/RegisterBootcamp';
import BootcampInformation from './pages/BootcampInformation';
import WorkWithUs from './pages/WorkWithUs';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trabalhe-conosco" component={WorkWithUs} />
        <Route exact path="/bootcamps" component={Bootcamps} />
        <Route path="/students" component={Students} />
        <Route path="/coordinators" component={Coordinators} />
        <Route path="/bootcamp-register" component={RegisterBootcamp} />
        <Route path="/bootcamp/:id" component={BootcampInformation} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
