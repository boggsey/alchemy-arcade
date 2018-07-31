import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PlayerPage from '../pages/PlayerPage';
import RegisterPage from '../pages/RegisterPage';
import RosterPage from '../pages/RosterPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/roster" component={RosterPage} />
      <Route path="/player/new" component={PlayerPage} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </main>
);

export default Main;

