import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = props => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {
        props.isAuthenticated ? (
          <Link to="/roster">Roster</Link>
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
};

export default Nav;
