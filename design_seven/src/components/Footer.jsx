import React from 'react';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer-grid">
          
          {/* Col 1 */}
          <div className="footer-col">
            <img src="/securetech_av.png" alt="SecureTech AV Logo" className="footer-logo" />
            <p>India's leading AV system integrator delivering architectural acoustics, smart boardroom technology, stadium sound, and connected hybrid spaces.</p>
            <div className="top-bar-socials" style={{ marginTop: '20px' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.2rem', marginRight: '16px' }}><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.2rem', marginRight: '16px' }}><i className="fa-brands fa-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.2rem', marginRight: '16px' }}><i className="fa-brands fa-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          
          {/* Col 2 */}
          <div className="footer-col">
            <h4>AV Solutions</h4>
            <ul className="footer-links">
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); onOpenEnquiry(); }}>Smart Integration</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); onOpenEnquiry(); }}>AV Controls</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); onOpenEnquiry(); }}>ICT Infrastructure</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); onOpenEnquiry(); }}>Stadium & Arenas</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); onOpenEnquiry(); }}>Club Sound Networks</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); onOpenEnquiry(); }}>Cinema Hall Acoustics</a></li>
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="footer-col">
            <h4>Sitemap</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">AV Solutions</a></li>
              <li><a href="#configurator">Room Configurator</a></li>
              <li><a href="#profile">Corporate Profile</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Col 4 */}
          <div className="footer-col">
            <h4>Find Us</h4>
            <p style={{ marginBottom: '12px' }}><i className="fa-solid fa-location-dot" style={{ color: 'var(--accent)', marginRight: '8px' }}></i> A-70, Sector 33, Noida, Uttar Pradesh 201301</p>
            <p style={{ marginBottom: '16px' }}><i className="fa-solid fa-phone" style={{ color: 'var(--accent)', marginRight: '8px' }}></i> +91 120 420 0000</p>
            <div className="footer-map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.742308696803!2d77.34861837626992!3d28.577519975695026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d0!2zMjjCsDM0JzM5LjEiTiA3N8KwMjEnMDQuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="SecureTech AV Designs Location Map"
              ></iframe>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>Copyright &copy; 2026 SecureTech AV Designs Private Limited. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#cookies">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
