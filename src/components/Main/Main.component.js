import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from '../Utils/PrivateRoute';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import PlayerPage from '../../pages/PlayerPage';
import RegisterPage from '../../pages/RegisterPage';
import RosterPage from '../../pages/RosterPage';
import ErrorPage from '../../pages/ErrorPage';
import './Main.scss';

const Main = (props) => {
  const { isAuthenticated } = props;
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              {...props}
              isAuthenticated={isAuthenticated}
            />
          )}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute
          path="/roster"
          component={RosterPage}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/player/new"
          component={PlayerPage}
          isAuthenticated={isAuthenticated}
        />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
};

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Main;
