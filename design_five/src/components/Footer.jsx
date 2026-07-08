import React from 'react';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid-four">
          
          {/* Column 1: Branding & Socials */}
          <div className="footer-col-brand">
            <a href="#" className="footer-logo-link">
              <Logo />
            </a>
            <p className="footer-brand-desc">
              Professional system integrators configuring spatial audio-visual infrastructure, touch automation panels, and unified communications hubs.
            </p>
            <div className="footer-socials-row">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">Our Solutions</a></li>
              <li><a href="#sectors">Sectors We Serve</a></li>
              <li><a href="#why-choose-us">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div className="footer-col">
            <h4 className="footer-col-title">AV Sectors</h4>
            <ul className="footer-links-list">
              <li><a href="#sectors">Corporate Space</a></li>
              <li><a href="#sectors">Smart Classrooms</a></li>
              <li><a href="#sectors">Surgical Theaters</a></li>
              <li><a href="#sectors">Judiciary Systems</a></li>
              <li><a href="#sectors">Hotels & Venues</a></li>
              <li><a href="#sectors">Luxury Cinema</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Embedded Map */}
          <div className="footer-col-contact" id="contact">
            <h4 className="footer-col-title">Contact & Location</h4>
            <p className="footer-contact-item">
              <strong>HQ Address:</strong> B-14, Okhla Industrial Area, Phase-I, New Delhi, India
            </p>
            <p className="footer-contact-item">
              <strong>Phone:</strong> +91 11 4056 9901
            </p>
            <p className="footer-contact-item">
              <strong>Email:</strong> info@securetechav.com
            </p>

            {/* Embedded Google Map */}
            <div className="footer-map-wrapper">
              <iframe 
                title="SecureTechAV Head Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2s0x390ce114c0000001:0xd99ca82664cb99df!2sOkhla+Industrial+Area,+New+Delhi,+Delhi,+India!5m2!1s1en!2s2in!5m2!1s1en!2s2in"
                width="100%" 
                height="100" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Clean Download Profile button inside footer */}
            <a 
              href="/assets/securetech_profile.html" 
              className="btn-footer-profile"
              download="SecureTechAV_Corporate_Profile"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-footer-profile-icon">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Corporate Profile (PDF)
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">&copy; 2026 SecureTechAV Private Limited. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <span className="footer-status-indicator">CTS Certified Integrator</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
