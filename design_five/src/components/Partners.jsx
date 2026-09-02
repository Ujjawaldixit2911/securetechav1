import React from 'react';
import './Partners.css';

export default function Partners() {
  const partners = [
    { name: 'Cisco Systems', logo: './images/partners/cisco.webp' },
    { name: 'Sony Pro', logo: './images/partners/sony.webp' },
    { name: 'JBL Professional', logo: './images/partners/jbl.webp' },
    { name: 'Bose Professional', logo: './images/partners/bose.webp' },
    { name: 'Sennheiser', logo: './images/partners/sennheiser.webp' },
    { name: 'British Acoustics', logo: './images/partners/british_acoustics.webp' },
    { name: 'Christie Digital', logo: './images/partners/christie.webp' },
    { name: 'LG Electronics', logo: './images/partners/lg.webp' },
    { name: 'QSC Audio', logo: './images/partners/qsc.webp' }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="section-header-centered">
          <span className="section-eyebrow">Enterprise Hardware Ecosystem</span>
          <h2 className="section-title-b2b">Technology Brand Partners</h2>
          <p className="section-desc-b2b">We architect systems that combine natively with products from the industry's leading hardware manufacturers.</p>
        </div>

        <div className="partners-grid-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-logo-box" 
              title={`Authorized ${partner.name} Integrator`}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                className="partner-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="partner-fallback-label" style={{ display: 'none' }}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
