import React from 'react';

const brands = [
  'SENNHEISER', 'BRITISH ACOUSTICS', 'QSC AUDIO', 'CHRISTIE', 
  'SONY PRO', 'BOSE PRO', 'JBL PROFESSIONAL', 'CISCO SYSTEMS', 'LG ELECTRONICS'
];

export default function Partners() {
  return (
    <section className="section section-alt" id="partners">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Strategic Alliances</div>
          <h2>Premium Technology Brand Partners</h2>
          <p>We partner with the world's leading professional manufacturers to guarantee maximum product reliability and high-fidelity performance.</p>
        </div>
        
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* Duplicated list to achieve smooth infinite scroll animation */}
            {[...brands, ...brands].map((brand, index) => (
              <div className="marquee-item" key={index}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, color: '#1F2937' }}>
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
