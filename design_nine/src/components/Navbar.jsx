import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenQuote }) {
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

  return (
    <header className="header-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo-container" aria-label="SecureTech AV Home">
            <i className="fa-solid fa-signal" style={{ color: 'var(--accent)' }}></i>
            SecureTech<span>AV</span>
          </a>

          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#solutions" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Solutions</a></li>
            <li><a href="#industries" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Industries</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            {mobileMenuOpen && (
              <li style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                <button 
                  className="btn btn-primary" 
                  onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
                  style={{ width: '80%' }}
                >
                  Get a Quote
                </button>
              </li>
            )}
          </ul>

          <button className="btn btn-primary" onClick={onOpenQuote}>Get a Quote</button>

          <button 
            className="nav-hamburger" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
