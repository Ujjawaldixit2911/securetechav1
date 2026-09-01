import React, { useEffect, useRef, useState } from 'react';
import './WhyUs.css';

export default function WhyUs() {
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

  const features = [
    {
      title: 'Expert AV Consultants',
      desc: 'AVIXA certified CTS architects design your spaces for target acoustic compliance.'
    },
    {
      title: 'Turnkey Project Execution',
      desc: 'Complete control from structured cable layouts to final hardware programming.'
    },
    {
      title: 'Certified Technology Partners',
      desc: 'Direct alliances with leading global AV manufacturers ensures genuine supply.'
    },
    {
      title: 'End-to-End Support',
      desc: '24/7 technical call desks, system backup inventory support, and proactive AMCs.'
    },
    {
      title: 'Future Ready Infrastructure',
      desc: 'Scalable data and routing blueprints to support upcoming system iterations.'
    },
    {
      title: 'Nationwide Deployment',
      desc: 'Field engineers active across major cities to support rapid multi-site setups.'
    }
  ];

  return (
    <section id="why-choose-us" className="why-us-section section-light" ref={elementRef}>
      <div className={`container why-us-container reveal ${isVisible ? 'active' : ''}`}>
        <div className="why-us-grid">
          {/* Left Column: Premium visual image */}
          <div className="why-us-media">
            <img 
              src="/assets/sectors/sector-education.png" 
              alt="Deploying stadium visual panels" 
              className="why-us-img" 
            />
            <div className="why-us-badge">
              <span className="badge-num">100%</span>
              <span className="badge-txt">Turnkey Execution Quality</span>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="why-us-content">
            <span className="section-tag">Value Proposition</span>
            <h2>Why Choose NEX AV</h2>
            <p className="why-us-desc">
              We align design frameworks with enterprise standards, delivering systems on timeline, on budget, and built for future workflows.
            </p>

            <div className="why-us-checklist">
              {features.map((feat, idx) => (
                <div className="checklist-item" key={idx}>
                  <div className="check-bullet">✔</div>
                  <div className="check-info">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
