import React from 'react';

export default function About({ onOpenEnquiry }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="grid about-grid">
          <div className="about-img-box animate-fade-left animated">
            <img src="/images/solution-boardroom.png" alt="SecureTech Executive Boardroom Office" />
            <div className="about-badge">
              <span style={{ fontSize: '2rem', display: 'block', color: 'var(--accent)', lineHeight: 1.1 }}>#1</span>
              <span>AV Integrator India</span>
            </div>
          </div>
          
          <div className="about-content animate-fade-right animated">
            <div className="tagline">About Company</div>
            <h2>Driven By A Passion For Absolute Technology</h2>
            <p className="about-subtitle">
              SecureTech AV Designs Private Limited specializes in architectural acoustics, advanced sound system design, and prompt post-project maintenance service.
            </p>
            <p className="about-text">
              Founded on principles of engineering excellence and aesthetic integration, we help corporate enterprises, schools, hospitals, and government offices install intelligent systems that are future-ready, scalable, and simple for users to operate. We represent the absolute pinnacle of AV integration in India.
            </p>
            
            <div className="mission-vision">
              <div className="mv-box">
                <h4><i className="fa-solid fa-bullseye"></i> Our Mission</h4>
                <p>To design and execute reliable, modern, and high-fidelity audio visual integrations that simplify human collaborations.</p>
              </div>
              <div className="mv-box">
                <h4><i className="fa-solid fa-eye"></i> Our Vision</h4>
                <p>To lead the Indian enterprise AV market as the benchmark system integrator, bringing global innovation to local companies.</p>
              </div>
            </div>
            
            <button className="btn btn-primary" onClick={onOpenEnquiry}>Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
