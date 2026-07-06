import React from 'react';

export default function CaseStudy({ onOpenEnquiry }) {
  return (
    <section className="section" id="case-study">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Case Studies</div>
          <h2>Featured Project Integration</h2>
          <p>Explore how we solved critical echo and communication obstacles in a high-profile multi-functional space.</p>
        </div>
        
        <div className="case-study-card animate-scale animated">
          <div className="case-study-img">
            <img src="/images/Auditorium1.png" alt="State of the Art Auditorium" />
          </div>
          <div className="case-study-content">
            <div className="tagline" style={{ marginBottom: '16px' }}>Auditorium & Sound System</div>
            <h3>Premium University Hybrid Auditorium</h3>
            <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>
              Our mission was to turn an empty, high-ceiling structure with severe sound reflections into a clean, Dolby-graded hybrid presentation theater.
            </p>
            
            <div className="cs-meta-grid">
              <div className="cs-meta-item">
                <h5>Client</h5>
                <p>Global Academic Center</p>
              </div>
              <div className="cs-meta-item">
                <h5>Challenge</h5>
                <p>3.5s Reverberation (Echo)</p>
              </div>
              <div className="cs-meta-item">
                <h5>Solution</h5>
                <p>Acoustic Wall Panels & Line Array</p>
              </div>
              <div className="cs-meta-item">
                <h5>Products</h5>
                <p>QSC DSP, JBL Line Arrays</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onOpenEnquiry}>View Case Study Details</button>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)', display: 'block', fontWeight: 600 }}>Duration</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>45 Days (Completed)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
