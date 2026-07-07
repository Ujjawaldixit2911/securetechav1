import React from 'react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Logo and About */}
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <i className="fa-solid fa-signal" style={{ color: 'var(--accent)' }}></i>
              SecureTech<span>AV</span>
            </div>
            <p>
              SecureTech AV is India's leading B2B AV systems integrator. We design, install, and support premium collaboration solutions, smart classrooms, and auditorium acoustics.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
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
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="footer-col">
            <h4>AV Solutions</h4>
            <ul className="footer-links">
              <li><a href="#solutions">AV System Design</a></li>
              <li><a href="#solutions">Smart Classrooms</a></li>
              <li><a href="#solutions">AV Control Systems</a></li>
              <li><a href="#solutions">ICT Infrastructure</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>A-70, Sector 33, Noida, Uttar Pradesh 201301</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+911204200000">+91 120 420 0000</a>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@securetechav.com">info@securetechav.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>Copyright &copy; 2026 SecureTech AV. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy" style={{ color: 'var(--text-light-muted)' }}>Privacy Policy</a>
            <a href="#terms" style={{ color: 'var(--text-light-muted)' }}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
