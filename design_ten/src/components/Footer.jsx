import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Logo & About */}
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <img src="/securetech_av.png" alt="SecureTech AV Designs Logo" style={{ height: '42px', objectFit: 'contain' }} />
            </div>
            <p>
              SecureTech AV Designs is India's leading audio-visual integration company, delivering end-to-end solutions across corporate, education, government, and entertainment sectors.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <i className="fa-solid fa-map-pin"></i>
                <span>A-70, Sector 33, Noida, UP 201301</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>[ADD PHONE NUMBER]</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-envelope"></i>
                <span>[ADD EMAIL ADDRESS]</span>
              </div>
            </div>
          </div>

          {/* Column 4: Insights (Trending Topics) */}
          <div className="footer-col">
            <h4>Insights</h4>
            <ul className="footer-insights-list">
              <li>
                <a href="#contact">Future of Smart Classrooms</a>
              </li>
              <li>
                <a href="#contact">Why AV Integration Matters for Hybrid Work</a>
              </li>
              <li>
                <a href="#contact">Stadium AV Trends 2026</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; 2026 SecureTech AV Designs Pvt. Ltd. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy" style={{ color: 'var(--color-text-muted)' }}>Privacy Policy</a>
            <a href="#terms" style={{ color: 'var(--color-text-muted)' }}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
