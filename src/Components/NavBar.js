import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your Navbar styles if you have any

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CANINECONNECT {/* You can insert your logo or site name */}
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Dogs" className="nav-links">
              Dogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Vehicles" className="nav-links">
              Vehicles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
