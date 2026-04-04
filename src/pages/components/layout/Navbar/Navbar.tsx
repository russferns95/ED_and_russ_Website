import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">Ed & Russ</Link>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
        </ul>

        {/* Button */}
        <Link to="/contact">
          <button className="navbar-btn">Submit Request</button>
        </Link>

      </nav>
    </div>
  );
};

export default Navbar;