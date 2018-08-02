import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="home-page">
    <p>Welcome to Alchemy Arcade</p>
    <div className="actions">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </div>
);

export default HomePage;
