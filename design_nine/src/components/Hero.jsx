import React from 'react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        
        {/* Left Side: Copywriting */}
        <div className="hero-text reveal active">
          <span className="eyebrow">AV Systems Integrator · India</span>
          <h1>AV solutions that run without you thinking about them</h1>
          <p>
            SecureTech AV provides end-to-end design, installation, and support services for corporate boardrooms, educational spaces, and public facilities across India. We keep your communication networks running seamlessly.
          </p>
          <div className="hero-ctas">
            <a href="#solutions" className="btn btn-primary">
              Explore Solutions <i className="fa-solid fa-arrow-right"></i>
            </a>
            <button className="btn btn-outline" onClick={onOpenQuote}>
              Talk to an Expert
            </button>
          </div>
        </div>

        {/* Right Side: Boardroom installation visual placeholder */}
        <div className="hero-visual reveal active">
          {/* CODE COMMENT: Swap the src attribute below with a real boardroom installation photo */}
          <img 
            src="/images/conference.jpg" 
            alt="SecureTech AV Corporate Boardroom Installation" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback styling placeholder shown if image is missing */}
          <div className="hero-placeholder-fallback" style={{ display: 'none' }}>
            <div className="hero-placeholder-icon">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h3 style={{ color: '#FFFFFF' }}>Corporate Boardroom AV</h3>
            <p style={{ color: 'var(--text-light-muted)' }}>Precision-engineered video conferencing, ceiling microphone arrays, and touch-screen room control systems.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
