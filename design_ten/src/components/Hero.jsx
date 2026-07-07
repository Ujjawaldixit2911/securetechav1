import React from 'react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="hero" id="home" style={{ backgroundImage: "url('/images/solution-boardroom.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* Dark overlay matching Diversified style */}
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-text reveal active">
          <span className="eyebrow">INDIA'S #1 AV INTEGRATORS</span>
          <h1>We Turn Spaces<br />Into Smart Experiences.</h1>
          <p>
            End-to-end audio-visual integration for corporates, education, government, healthcare, stadiums, and beyond — engineered for performance, built to last.
          </p>
          <div className="hero-ctas">
            <a href="#solutions" className="btn btn-primary">
              Explore Our Solutions <i className="fa-solid fa-arrow-right"></i>
            </a>
            <button className="btn btn-outline-white" onClick={onOpenQuote}>
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
