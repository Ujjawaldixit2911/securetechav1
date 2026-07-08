import React from 'react';

const partnersList = [
  { name: 'Sennheiser', logo: '/images/partners/sennheiser.webp', filter: 'invert(53%) sepia(93%) saturate(3015%) hue-rotate(174deg) brightness(97%) contrast(101%)' },
  { name: 'QSC', logo: '/images/partners/qsc.webp', filter: 'invert(75%) sepia(82%) saturate(456%) hue-rotate(3deg) brightness(108%) contrast(101%)' },
  { name: 'Christie', logo: '/images/partners/christie.webp', filter: 'invert(16%) sepia(99%) saturate(5833%) hue-rotate(354deg) brightness(96%) contrast(113%)' },
  { name: 'Sony Pro', logo: '/images/partners/sony.webp', filter: 'invert(87%) sepia(0%) saturate(1210%) hue-rotate(182deg) brightness(93%) contrast(90%)' },
  { name: 'Bose Professional', logo: '/images/partners/bose.webp', filter: 'invert(40%) sepia(98%) saturate(3828%) hue-rotate(5deg) brightness(101%) contrast(106%)' },
  { name: 'JBL Professional', logo: '/images/partners/jbl.webp', filter: 'invert(40%) sepia(98%) saturate(3828%) hue-rotate(5deg) brightness(101%) contrast(106%)' },
  { name: 'Cisco Systems', logo: '/images/partners/cisco.webp', filter: 'invert(53%) sepia(93%) saturate(3015%) hue-rotate(174deg) brightness(97%) contrast(101%)' },
  { name: 'LG Electronics', logo: '/images/partners/lg.webp', filter: 'invert(13%) sepia(86%) saturate(4649%) hue-rotate(334deg) brightness(85%) contrast(110%)' },
  { name: 'British Acoustics', logo: '/images/partners/british_acoustics.webp', filter: 'invert(73%) sepia(21%) saturate(1106%) hue-rotate(84deg) brightness(94%) contrast(91%)' }
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
                  style={{ maxHeight: '42px', maxWidth: '140px', objectFit: 'contain', filter: partner.filter }}
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
