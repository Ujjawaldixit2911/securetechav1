import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">Premium Audio Visual Integrators</span>
          <h1 className="hero-title">Transforming Spaces Through Intelligent AV Solutions</h1>
          <p className="hero-desc">
            Delivering world-class Audio Visual, Smart Integration, Control Systems, Acoustics, and ICT Infrastructure solutions across enterprises, institutions, and public sectors.
          </p>
          <div className="hero-btns">
            <a href="#solutions" className="btn btn-accent">Explore Solutions</a>
            <a href="#contact" className="btn btn-outline-white">Contact Us</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-mockup">
            <img src="/assets/sectors/sector-corporate.png" alt="Integrated Executive Boardroom AV Mockup" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
