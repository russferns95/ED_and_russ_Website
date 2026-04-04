import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>Ed & Russ</Link>
        </div>

        <button
          className={`navbar-toggle${isMenuOpen ? " is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links${isMenuOpen ? " navbar-links--open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/team" onClick={closeMenu}>Team</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contacts</Link></li>
        </ul>

        <Link to="/contact" className="navbar-cta" onClick={closeMenu}>
          <button className="navbar-btn">Submit Request</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
