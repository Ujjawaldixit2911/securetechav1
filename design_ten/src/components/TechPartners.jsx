import React from 'react';

const partnersList = [
  { name: 'Sennheiser', logo: '/images/partners/sennheiser.webp', filter: 'invert(53%) sepia(93%) saturate(3015%) hue-rotate(174deg) brightness(97%) contrast(101%)' },
  { name: 'British Acoustics', logo: '/images/partners/british_acoustics.webp', filter: 'invert(73%) sepia(21%) saturate(1106%) hue-rotate(84deg) brightness(94%) contrast(91%)' },
  { name: 'QSC Audio', logo: '/images/partners/qsc.webp', filter: 'invert(75%) sepia(82%) saturate(456%) hue-rotate(3deg) brightness(108%) contrast(101%)' },
  { name: 'Christie Digital', logo: '/images/partners/christie.webp', filter: 'invert(16%) sepia(99%) saturate(5833%) hue-rotate(354deg) brightness(96%) contrast(113%)' },
  { name: 'Sony Pro', logo: '/images/partners/sony.webp', filter: 'invert(87%) sepia(0%) saturate(1210%) hue-rotate(182deg) brightness(93%) contrast(90%)' },
  { name: 'Bose Professional', logo: '/images/partners/bose.webp', filter: 'invert(40%) sepia(98%) saturate(3828%) hue-rotate(5deg) brightness(101%) contrast(106%)' },
  { name: 'JBL Professional', logo: '/images/partners/jbl.webp', filter: 'invert(40%) sepia(98%) saturate(3828%) hue-rotate(5deg) brightness(101%) contrast(106%)' },
  { name: 'Cisco Systems', logo: '/images/partners/cisco.webp', filter: 'invert(53%) sepia(93%) saturate(3015%) hue-rotate(174deg) brightness(97%) contrast(101%)' },
  { name: 'LG Electronics', logo: '/images/partners/lg.webp', filter: 'invert(13%) sepia(86%) saturate(4649%) hue-rotate(334deg) brightness(85%) contrast(110%)' }
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
                  style={{ maxHeight: '36px', maxWidth: '120px', objectFit: 'contain', filter: partner.filter }}
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
