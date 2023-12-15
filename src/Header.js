// Header.js

import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>Cementers Tavisa</h1>

        {/* <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
