import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header-wrapper">
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <i className="fa-solid fa-square-check" style={{ color: 'var(--accent)' }}></i>
            <span>Premium AV Systems Integrator</span>
          </div>
          <div className="top-bar-item">
            <i className="fa-solid fa-award" style={{ color: 'var(--accent)' }}></i>
            <span>150+ Enterprise Deployments</span>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-item">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+911204200000">+91 120 420 0000</a>
          </div>
          <div className="top-bar-item">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:info@securetechav.com">info@securetechav.com</a>
          </div>
          <div className="top-bar-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo-container" aria-label="SecureTech AV Designs Home">
            <img src="/securetech_av.png" alt="SecureTech AV Designs Logo" />
          </a>

          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#solutions" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Solutions</a></li>
            <li><a href="#sectors" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Industries</a></li>
            <li><a href="#testimonials" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
            {mobileMenuOpen && (
              <li style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                <button 
                  className="btn btn-primary" 
                  onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}
                  style={{ width: '80%' }}
                >
                  Enquire Now
                </button>
              </li>
            )}
          </ul>

          <button className="btn btn-primary" onClick={onOpenEnquiry}>Enquire Now</button>

          <button 
            className="nav-hamburger" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </header>
  );
}
