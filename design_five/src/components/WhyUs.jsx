import React, { useEffect, useRef, useState } from 'react';
import './WhyUs.css';

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'CTS Certified Excellence',
      desc: 'Our design architects and programmers hold CTS-D and CTS-I certifications, the premier standard for professional AV systems worldwide.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: '24/7 Managed Support',
      desc: 'Dedicated enterprise SLAs ensure ongoing diagnostic audits, hot-swappable equipment replacement pools, and live remote assistance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      title: 'Pan-India Service Infrastructure',
      desc: 'With central hubs in major metropolitan regions, we support complex multisite integrations with local, highly skilled field technicians.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: 'End-to-End Accountability',
      desc: 'We manage the complete lifecycle from spatial audio-acoustic planning, equipment procurement, cable layouts, to GUI design.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-choose-us" className="whyus-section" ref={sectionRef}>
      <div className="whyus-container">
        <div className="whyus-grid-columns">
          {/* Left Column: Heading and Profile link */}
          <div className="whyus-intro">
            <span className="section-eyebrow">Enterprise Trust</span>
            <h2 className="section-title-b2b">Why Integrators Choose NEXAV</h2>
            <p className="whyus-intro-desc">
              B2B technology deployment is about minimizing downtime and optimizing interface simplicity. We deliver high-reliability AV systems built to perform.
            </p>
            <div className="whyus-action-row">
              <a 
                href="/assets/nex_profile.html" 
                className="btn-profile-download"
                download="NEXAV_Corporate_Profile"
                onClick={(e) => {
                  // Fallback if local profile download fails, direct anchor link
                }}
              >
                <svg className="download-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Corporate Profile
              </a>
            </div>
          </div>

          {/* Right Column: Points grid */}
          <div className={`whyus-points reveal-fade ${isVisible ? 'visible' : ''}`}>
            {features.map((feat, index) => (
              <div key={index} className="whyus-point-item">
                <div className="whyus-icon-wrapper">
                  {feat.icon}
                </div>
                <h3 className="whyus-point-title">{feat.title}</h3>
                <p className="whyus-point-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
