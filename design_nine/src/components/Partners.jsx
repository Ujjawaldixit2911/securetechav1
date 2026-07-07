import React from 'react';

const partners = [
  { name: 'Bose Professional', logo: '/images/partners/bose.webp' },
  { name: 'Christie Digital', logo: '/images/partners/christie.webp' },
  { name: 'Cisco Systems', logo: '/images/partners/cisco.webp' },
  { name: 'JBL Professional', logo: '/images/partners/jbl.webp' },
  { name: 'LG Electronics', logo: '/images/partners/lg.webp' },
  { name: 'QSC Audio', logo: '/images/partners/qsc.webp' },
  { name: 'Sennheiser', logo: '/images/partners/sennheiser.webp' },
  { name: 'Sony Pro', logo: '/images/partners/sony.webp' }
];

export default function Partners() {
  return (
    <section className="section section-light-alt" id="partners">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Technology Partners</span>
          <h2>Allied With Global AV Innovators</h2>
          <p>We specify, install, and calibrate hardware from the world's leading brands to ensure high reliability and warranty standards.</p>
        </div>

        <div className="partners-grid reveal">
          {partners.map((partner, idx) => (
            <div className="partner-item" key={idx}>
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
                loading="lazy"
              />
              <span style={{ display: 'none', fontWeight: 600, color: 'var(--primary)' }}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
