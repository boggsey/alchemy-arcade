import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ isAuthenticated, receiveLogout }) => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {
        isAuthenticated ? (
          <div>
            <Link to="/roster">Roster</Link>
            <Link to="/roster" onClick={receiveLogout}>Logout</Link>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )
      }
    </nav>
  </div>
);

Nav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  receiveLogout: PropTypes.func.isRequired,
};

export default Nav;
