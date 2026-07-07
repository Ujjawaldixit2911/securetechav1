import React from 'react';

export default function CTABanner({ onOpenQuote }) {
  return (
    <section className="section section-light" id="cta-banner">
      <div className="container">
        <div className="cta-banner-card reveal">
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>Work with India's Experts</span>
          <h2>Ready to upgrade your space with smart AV technology?</h2>
          <p>
            Connect with our certified system engineers today. Get a free acoustic mapping, layout consultation, and hardware recommendation tailored to your facility.
          </p>
          <button className="btn btn-primary" onClick={onOpenQuote}>
            Connect With Us <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
