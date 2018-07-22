import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>
  (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/roster">Roster</Link>
      </nav>
    </div>
  );

export default Nav;
