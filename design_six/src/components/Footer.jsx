import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-corporate">
      <div className="container footer-grid">
        {/* Info panel */}
        <div className="footer-info">
          <a href="#" className="footer-logo-link">
            <div className="footer-logo">
              <img src="/assets/logos/logo-icon.png" alt="NEX Logo" className="footer-logo-img" />
              <span className="logo-text">NEX <span className="logo-accent">AV</span></span>
            </div>
          </a>
          <p>
            NEX AV Designs Private Limited is a premium systems integrator offering turnkey video, acoustic, and ICT network automation infrastructures.
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com" className="social-circle" aria-label="LinkedIn Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://facebook.com" className="social-circle" aria-label="Facebook Page">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="social-circle" aria-label="Instagram Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links panel */}
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#sectors">Industries</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        {/* Services panel */}
        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#solutions">AV System Integration</a></li>
            <li><a href="#solutions">Smart Meeting Rooms</a></li>
            <li><a href="#solutions">Acoustic Engineering</a></li>
            <li><a href="#solutions">Video Conferencing</a></li>
            <li><a href="#solutions">ICT Networking</a></li>
          </ul>
        </div>

        {/* Contact info panel */}
        <div>
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>A-70, Sector 33, Noida, Uttar Pradesh 201301</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>sales@nexav.com</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91-XXXXXXXXXX</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom-bar">
        <p>Copyright &copy; 2026 NEX AV Designs Private Limited. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
