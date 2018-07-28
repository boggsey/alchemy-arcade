import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from './Nav';
import Main from './Main';

const App = (props) => {
  const { isAuthenticated } = props;
  return (
    <div>
      <Nav />
      <Main isAuthenticated={isAuthenticated} />
    </div>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { AuthReducer } = state;
  const { isAuthenticated } = AuthReducer;
  return {
    isAuthenticated,
  };
}

export default connect(mapStateToProps, {})(App);
