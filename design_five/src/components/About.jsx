import React, { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={elementRef}>
      <div className={`about-container reveal-fade ${isVisible ? 'visible' : ''}`}>
        <div className="about-grid">
          {/* Left Side: Statement */}
          <div className="about-statement">
            <h2 className="about-title">Intelligent Spaces, Integrated Seamlessly</h2>
            <p className="about-description">
              NEXAV is an industry-leading Audio-Visual integration firm. We deliver tailored technology infrastructures that empower teams, enhance collaboration, and create interactive experiences.
            </p>
            <p className="about-subdescription">
              From automated corporate boardrooms to state-of-the-art auditoriums, our technical architectures seamlessly unify sound, visual displays, and room controls.
            </p>
            <a href="#sectors" className="about-link">
              Explore Our Sectors We Serve
              <svg className="link-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Right Side: Key Pillars List */}
          <div className="about-pillars">
            <div className="pillar-item">
              <div className="pillar-num-box">01</div>
              <div className="pillar-content">
                <h4 className="pillar-title">CTS Certified Engineers</h4>
                <p className="pillar-text">Our design architects and onsite integrators are CTS-D/CTS-I certified to guarantee standard-compliant deployments.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-num-box">02</div>
              <div className="pillar-content">
                <h4 className="pillar-title">Complete Lifecycle Service</h4>
                <p className="pillar-text">From drafting blueprints and programming control hardware to 24/7 technical helpdesk support.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-num-box">03</div>
              <div className="pillar-content">
                <h4 className="pillar-title">98% SLA Maintenance Uptime</h4>
                <p className="pillar-text">Preventative site audits and emergency replacement modules protect your operations from system failures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
