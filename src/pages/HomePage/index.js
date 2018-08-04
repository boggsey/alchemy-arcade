import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './HomePage.scss';

const HomePage = ({ isAuthenticated }) => (
  <div className="home-page">
    <p>Welcome to Alchemy Arcade</p>
    <div className="actions">
      {
        isAuthenticated ? (
          <React.Fragment>
            <Link to="/roster">Roster</Link>
            <Link to="/player/new">New Player</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </React.Fragment>
        )
      }
    </div>
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect()(HomePage);
