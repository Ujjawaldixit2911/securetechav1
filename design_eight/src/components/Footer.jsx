import React from 'react';

export default function Footer({ onOpenEnquiry }) {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Company Profile */}
          <div className="footer-col footer-about">
            <img src="/securetech_av.png" alt="SecureTech AV Designs Logo" />
            <p>
              SecureTech AV Designs Pvt Ltd is India's leading AV system integrator, delivering professional acoustic blueprints, high-priority boardrooms, and smart digital collaborative systems.
            </p>
            <div className="footer-social-title">Follow Us</div>
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
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">AV Solutions</a></li>
              <li><a href="#sectors">Industries</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li>
                <a 
                  href="/securetech_profile.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Corporate Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Map */}
          <div className="footer-col">
            <h4>Our Headquarters</h4>
            <div className="footer-contact-details">
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
            
            <div className="footer-map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.742308696803!2d77.34861837626992!3d28.577519975695026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d0!2zMjjCsDM0JzM5LjEiTiA3N8KwMjEnMDQuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="eager" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="SecureTech AV Designs Noida Office Location Map"
              ></iframe>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col footer-newsletter">
            <h4>Stay Connected</h4>
            <p>Subscribe to our quarterly newsletter to receive technical insights and updates on corporate collaboration layouts.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter email address" 
                required 
                aria-label="Email for newsletter" 
              />
              <button type="submit" aria-label="Subscribe">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; 2026 SecureTech AV Designs Pvt Ltd. All rights reserved.</p>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
