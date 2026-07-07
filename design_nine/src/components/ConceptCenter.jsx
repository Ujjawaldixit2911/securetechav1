import React from 'react';

export default function ConceptCenter({ onOpenQuote }) {
  return (
    <section className="section section-light-alt" id="concept-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Column: Text */}
          <div className="reveal">
            <span className="eyebrow">Workplace Tech concept Center</span>
            <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>
              Come &amp; Experience Our Workplace Technology Concept Center Before Deployment
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Walk through immersive workplace environments featuring hybrid meeting rooms, boardrooms, command centers, and integrated AV ecosystems engineered for modern enterprises. See the products and layouts in action before selecting your system specs.
            </p>
            <button className="btn btn-primary" onClick={onOpenQuote}>
              Book a Demo Now <i className="fa-solid fa-calendar-check" style={{ marginLeft: '6px' }}></i>
            </button>
          </div>

          {/* Right Column: Display Image */}
          <div className="reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(10,30,63,0.08)', height: '380px' }}>
            <img 
              src="/images/advantage_center_v3.jpeg" 
              alt="SecureTech AV Workplace Concept Center" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
