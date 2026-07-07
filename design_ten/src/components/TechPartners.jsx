import React from 'react';

const partnersList = [
  { name: 'Sennheiser', logo: '/images/partners/sennheiser.webp' },
  { name: 'British Acoustics', logo: '/images/partners/british_acoustics.webp' },
  { name: 'QSC Audio', logo: '/images/partners/qsc.webp' },
  { name: 'Christie Digital', logo: '/images/partners/christie.webp' },
  { name: 'Sony Pro', logo: '/images/partners/sony.webp' },
  { name: 'Bose Professional', logo: '/images/partners/bose.webp' },
  { name: 'JBL Professional', logo: '/images/partners/jbl.webp' },
  { name: 'Cisco Systems', logo: '/images/partners/cisco.webp' },
  { name: 'LG Electronics', logo: '/images/partners/lg.webp' }
];

export default function TechPartners() {
  return (
    <section className="section section-dark-alt" style={{ padding: '60px 24px' }}>
      <div className="container">
        <h3 className="marquee-heading">Our Technology Partners</h3>
        
        <div className="marquee-container marquee-dark partners-marquee-container">
          <div className="marquee-track">
            {/* Duplicated 3 times for continuous looping */}
            {[...partnersList, ...partnersList, ...partnersList].map((partner, idx) => (
              <div className="marquee-item partner-logo-item" key={idx} style={{ padding: '0px' }}>
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                  style={{ maxHeight: '36px', maxWidth: '120px', objectFit: 'contain' }}
                />
                <span style={{ display: 'none', fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent-blue)' }}>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
