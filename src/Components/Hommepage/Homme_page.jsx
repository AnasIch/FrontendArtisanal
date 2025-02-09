import React from 'react';
import './style.css'; // Inclure le fichier CSS mis à jour

const MoroccanArtisanPage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#artisans">Artisans</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="auth-buttons">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h2>Tradition Meets Innovation</h2>
        <h1>Discover Moroccan <br /> Artisan Excellence</h1>
        <button className="cta-button">Learn About Artisan</button>
      </div>
    </div>
  );
};

export default MoroccanArtisanPage;
