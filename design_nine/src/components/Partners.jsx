import React from 'react';

const partners = [
  { name: 'Bose Pro', logo: '/images/partners/bose.webp', color: '#FF5000' },
  { name: 'Christie', logo: '/images/partners/christie.webp', color: '#E31B23' },
  { name: 'Cisco Systems', logo: '/images/partners/cisco.webp', color: '#049FD9' },
  { name: 'JBL Pro', logo: '/images/partners/jbl.webp', color: '#FF6600' },
  { name: 'LG Electronics', logo: '/images/partners/lg.webp', color: '#A50034' },
  { name: 'QSC Audio', logo: '/images/partners/qsc.webp', color: '#999999' },
  { name: 'Sennheiser', logo: '/images/partners/sennheiser.webp', color: '#009FDF' },
  { name: 'Sony Pro', logo: '/images/partners/sony.webp', color: '#777777' }
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

        <div className="marquee-container reveal" style={{ marginTop: '40px' }}>
          <div className="marquee-track" style={{ gap: '50px' }}>
            {[...partners, ...partners, ...partners].map((partner, idx) => (
              <div 
                className="partner-item" 
                key={idx} 
                style={{ 
                  flexShrink: 0, 
                  width: '190px', 
                  height: '110px', 
                  padding: '12px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  style={{ maxHeight: '45px', maxWidth: '100%', objectFit: 'contain' }}
                  loading="eager"
                />
                <span style={{ fontWeight: 700, fontSize: '0.82rem', color: partner.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
