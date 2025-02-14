import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './style.css';

const MoroccanArtisanPage = () => {
  const animationRef = useRef(null); // Référence pour le contexte GSAP

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation pour la navbar
      gsap.from(".navbar", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      // Apparition des liens de navigation
      gsap.from(".nav-links a", {
        opacity: 0,
        y: -20,
        stagger: 0.2,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      // Animation des boutons d'authentification
      gsap.from(".auth-buttons button", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.3,
        duration: 1,
        delay: 1,
        ease: "back.out(1.7)",
      });

      // Animation pour le texte de la Hero Section
      gsap.from(".hero-section h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.5,
        ease: "power3.out",
      });

      gsap.from(".hero-section h1", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        delay: 1.8,
        ease: "elastic.out(1, 0.5)",
      });

      // Animation pour le bouton CTA
      gsap.from(".cta-button", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 2,
        ease: "power2.out",
      });
    }, animationRef); // Lier le contexte à l'élément racine

    return () => ctx.revert(); // Nettoyer les animations pour éviter les conflits
  }, []);

  return (
    <div className="container" ref={animationRef}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#artisans">Artisans</a>
          <a href="#about">About</a>
          <Link to="/Contact_Us">Contact</Link>
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
