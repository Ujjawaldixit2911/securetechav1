import React from 'react';

export default function CTABanner({ onOpenQuote }) {
  return (
    <section className="section section-light" id="cta">
      <div className="container">
        <div className="cta-card reveal">
          <h2>Ready to Transform Your Space?</h2>
          <p>Let's design an AV solution built around your needs. Partner with India's certified systems integration specialists today.</p>
          <button className="btn btn-primary" onClick={onOpenQuote}>
            Get a Free Consultation <i className="fa-solid fa-calendar-check"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
