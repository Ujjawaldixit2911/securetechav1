import React from 'react';

const partnersList = [
  { name: 'Sennheiser', logo: '/images/partners/sennheiser.webp' },
  { name: 'QSC', logo: '/images/partners/qsc.webp' },
  { name: 'Christie', logo: '/images/partners/christie.webp' },
  { name: 'Sony Pro', logo: '/images/partners/sony.webp' },
  { name: 'Bose Professional', logo: '/images/partners/bose.webp' },
  { name: 'JBL Professional', logo: '/images/partners/jbl.webp' },
  { name: 'Cisco Systems', logo: '/images/partners/cisco.webp' },
  { name: 'LG Electronics', logo: '/images/partners/lg.webp' },
  { name: 'British Acoustics', logo: '/images/partners/british_acoustics.webp' }
];

export default function Partners() {
  return (
    <section className="section section-dark marquee-section" id="partners">
      <div className="container">
        <div className="section-header reveal active" style={{ marginBottom: '30px' }}>
          <span className="tagline">Technology Partners</span>
          <h2>Allied With Global Innovators</h2>
          <p>We collaborate with the world's leading manufacturers to specify and integrate systems that guarantee long-term operational uptime.</p>
        </div>

        <div className="marquee-container">
          <div className="marquee-track scroll-left-anim">
            {/* Render twice for continuous scroll loop */}
            {[...partnersList, ...partnersList, ...partnersList].map((partner, index) => (
              <div className="marquee-item" key={index} style={{ padding: '0 30px' }}>
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                  style={{ maxHeight: '42px', maxWidth: '140px', objectFit: 'contain' }}
                />
                <span className="client-logo-text" style={{ display: 'none', fontSize: '1.1rem' }}>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
