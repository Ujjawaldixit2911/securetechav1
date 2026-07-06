import React from 'react';

export default function FinalCTA({ onOpenEnquiry }) {
  return (
    <section className="section" id="contact" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="container final-cta">
        <div className="final-cta-container animate-fade-up animated">
          <div className="tagline">Start Your Integration</div>
          <h2>Let's Talk About Your Project</h2>
          <p>SecureTech AV Designs Private Limited — driven by a passion for absolute technology. Architectural Acoustics, sound system design, and prompt post-project service.</p>
          <button className="btn btn-primary" onClick={onOpenEnquiry} style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
