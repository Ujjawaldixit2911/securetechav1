import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Heading and CTAs */}
          <div className="hero-content">
            <div className="hero-eyebrow">Enterprise B2B Audio-Visual Solutions</div>
            <h1 className="hero-title">
              Engineering Intelligent <span className="highlight-text">AV Experiences</span>
            </h1>
            <p className="hero-desc">
              We design, build, and support high-performance Audio-Visual integration environments, unified communications grids, and automated presentation systems for forward-thinking organizations.
            </p>
            <div className="hero-actions">
              <a href="#solutions" className="btn-hero-primary">Explore Solutions</a>
              <a href="#contact" className="btn-hero-outline">Contact Us</a>
            </div>
          </div>

          {/* Right Column: Corporate AV Setup image */}
          <div className="hero-media">
            <div className="hero-image-wrapper">
              <img 
                src="./images/sector-corporate.png" 
                alt="Corporate Boardroom AV Setup" 
                className="hero-img"
                onError={(e) => {
                  // Graceful fallback to a professional SVG outline block if image is not present
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-img-fallback" style={{ display: 'none' }}>
                <svg className="fallback-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span>Enterprise Intelligent AV</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row below Hero */}
        <div className="hero-stats-row">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years AV Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Pan-India</span>
            <span className="stat-label">Presence & Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
