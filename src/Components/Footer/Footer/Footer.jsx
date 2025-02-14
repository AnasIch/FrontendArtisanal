import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="about-section">
          <h3 className="logo">Artizal</h3>
          <p className="about-text">
            The first Moroccan platform linking manufacturers and craftsmen with marketers worldwide, streamlining the e-commerce process to empower local products and provide exceptional customer experiences.
          </p>
          <p className="contact">
            Got Questions? Call us 24/7 <br />
            <strong>(+212) 06 62 62 53 83</strong>
          </p>
        </div>

        <div className="links-section">
          <h4 className="section-title">Useful Links</h4>
          <ul className="links-list">
            <li><a href="#" className="link">Home</a></li>
            <li><a href="#" className="link">About</a></li>
            <li><a href="#" className="link">Brand & Drop</a></li>
            <li><a href="#" className="link">Sell on Artizal</a></li>
            <li><a href="#" className="link">Contact</a></li>
            <li><a href="#" className="link">FAQ</a></li>
          </ul>
        </div>

        <div className="register-section">
          <h4 className="section-title">Register</h4>
          <p className="register-text">
            What are you waiting for to start your e-commerce journey?
          </p>
          <button className="register-button">Sell on Artizal</button>
          <div className="social-icons">
            <a href="#" className="icon">🌐</a>
            <a href="#" className="icon">📘</a>
            <a href="#" className="icon">📸</a>
            <a href="#" className="icon">🎥</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Artizal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
