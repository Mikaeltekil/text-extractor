import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* Your logo or brand */}
        <h1>Your Logo</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* Add Account Button */}
          <li><Link to="/account">Account</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
