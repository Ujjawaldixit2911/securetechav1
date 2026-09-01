import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#" className="navbar-logo-link" onClick={closeMobileMenu}>
            <div className="logo-wrapper">
              <img src="/assets/logos/logo-icon.png" alt="NEX AV Logo" className="nav-logo-img" />
              <span className="logo-text">NEX <span className="logo-accent">AV</span></span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="navbar-menu">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#sectors" className="nav-link">Industries</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="navbar-cta-group">
            <a href="#contact" className="btn btn-accent btn-nav-cta">Get Consultation</a>
            <button 
              className={`mobile-nav-toggle ${mobileMenuOpen ? 'active' : ''}`} 
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-drawer-nav">
          <a href="#hero" onClick={closeMobileMenu}>Home</a>
          <a href="#about" onClick={closeMobileMenu}>About Us</a>
          <a href="#solutions" onClick={closeMobileMenu}>Solutions</a>
          <a href="#sectors" onClick={closeMobileMenu}>Industries</a>
          <a href="#projects" onClick={closeMobileMenu}>Projects</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          <a href="#contact" className="btn btn-accent btn-mobile-cta" onClick={closeMobileMenu}>Get Consultation</a>
        </nav>
      </div>
      {mobileMenuOpen && <div className="drawer-overlay" onClick={closeMobileMenu}></div>}
    </>
  );
}
