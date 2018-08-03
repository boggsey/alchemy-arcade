import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ isAuthenticated, receiveLogout }) => (
  <nav>
    <Link to="/">Home</Link>
    {
      isAuthenticated && (
        <React.Fragment>
          <Link to="/roster">Roster</Link>
          <Link to="/roster" onClick={receiveLogout}>Logout</Link>
        </React.Fragment>
      )
    }
  </nav>
);

Nav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  receiveLogout: PropTypes.func.isRequired,
};

export default Nav;
