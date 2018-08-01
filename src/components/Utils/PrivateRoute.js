import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { isAuthenticated } = props;

  const renderRoute = () => {
    if (isAuthenticated) {
      return <Route {...props} />;
    }

    return <Redirect to="/login" />;
  };

  return renderRoute();
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
