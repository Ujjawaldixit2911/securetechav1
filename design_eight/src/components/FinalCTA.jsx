import React from 'react';

export default function FinalCTA({ onOpenEnquiry }) {
  return (
    <section className="cta-banner" id="final-cta">
      {/* Background Image with low opacity */}
      <img 
        src="/images/advantage_center_v3.jpeg" 
        alt="SecureTech AV Designs Corporate Facility" 
        className="cta-banner-bg" 
      />
      
      <div className="cta-banner-content reveal active">
        <h2>Ready to Transform Your Workspace With Smart AV Technology?</h2>
        <p>
          Collaborate with India's premier system integrators. Get a custom spatial design, acoustic mapping, and professional equipment recommendation for your facility.
        </p>
        <div className="cta-actions">
          <button className="btn btn-primary" onClick={onOpenEnquiry}>
            Enquire Now <i className="fa-solid fa-paper-plane"></i>
          </button>
          <a 
            href="/securetech_profile.html" 
            className="btn btn-outline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-file-pdf" style={{ color: '#EF4444', marginRight: '6px' }}></i> Corporate Profile (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
