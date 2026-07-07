import React from 'react';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section className="hero" id="home">
      {/* Background Video */}
      <video 
        className="hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="/images/conference.jpg"
      >
        <source src="/images/brand_video_full.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Radial Dark overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">Premium Audio Visual Integrators</p>
        <h1>Technology Solutions for Exceptional Experiences</h1>
        <p>
          India's #1 Audio Visual Integrator — Delivering cutting-edge collaboration hubs, smart workspaces, and high-fidelity acoustics for Corporate, Education, Healthcare & Government sectors.
        </p>
        <div className="hero-ctas">
          <a href="#solutions" className="btn btn-primary">
            Explore Solutions <i className="fa-solid fa-arrow-right"></i>
          </a>
          <button className="btn btn-outline" onClick={onOpenEnquiry}>
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
