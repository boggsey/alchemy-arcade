import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = ({ isAuthenticated, receiveLogout }) => (
  <nav>
    {
      isAuthenticated && (
        <React.Fragment>
          <Link to="/" onClick={receiveLogout}>Quit</Link>
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
