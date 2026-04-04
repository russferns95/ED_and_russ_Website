import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Ed & Russ</h3>
            <p className="footer-description">
              We specialize in creating, developing, and managing a brand's identity to help businesses stand out in the marketplace and connect with their target audience.
            </p>
            <div className="footer-contact">
              <p>contact@edandruss.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">Consulting</Link></li>
              <li><Link to="/services">Support</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 Ed & Russ. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
