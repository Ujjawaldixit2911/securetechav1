import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPercentage(pct);
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
    <div className="header-wrapper">
      {/* Utility Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <i className="fa-solid fa-certificate"></i>
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="top-bar-item">
              <i className="fa-solid fa-users"></i>
              <span>Trusted by 150+ Clients</span>
            </div>
            <div className="top-bar-item">
              <i className="fa-solid fa-map-location-dot"></i>
              <span>Pan-India Project Deployment</span>
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
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <a href="#home" className="logo-container" aria-label="SecureTech AV Designs Home">
            <img src="/securetech_av.png" alt="SecureTech AV Designs Logo" />
          </a>
          
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="nav-menu">
            <li><a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMobileMenu}>About Us</a></li>
            <li><a href="#solutions" className="nav-link" onClick={closeMobileMenu}>Solutions</a></li>
            <li><a href="#configurator" className="nav-link" onClick={closeMobileMenu}>Room Configurator</a></li>
            <li><a href="#profile" className="nav-link" onClick={closeMobileMenu}>Corporate Profile</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact Us</a></li>
            {mobileMenuOpen && (
              <li style={{ marginTop: '20px' }}>
                <button 
                  className="btn btn-primary" 
                  onClick={() => { closeMobileMenu(); onOpenEnquiry(); }}
                  style={{ width: '200px' }}
                >
                  Enquire Now
                </button>
              </li>
            )}
          </ul>

          <button className="btn btn-primary" id="openEnquiryBtn" onClick={onOpenEnquiry}>Enquire Now</button>
          
          <button 
            className="nav-hamburger" 
            id="nav-hamburger" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          id="scrollProgressBar" 
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
