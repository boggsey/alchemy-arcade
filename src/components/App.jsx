import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { receiveLogout } from './Account/Auth/Auth.actions';
import Nav from './Nav';
import Main from './Main';

const App = (props) => {
  const { isAuthenticated, logout } = props;
  return (
    <div>
      <Nav isAuthenticated={isAuthenticated} receiveLogout={logout} />
      <Main isAuthenticated={isAuthenticated} />
    </div>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { AuthReducer } = state;
  const { isAuthenticated } = AuthReducer;
  return {
    isAuthenticated,
  };
}

const mapDispatchToProps = {
  logout: receiveLogout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
