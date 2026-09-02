import React from 'react';
import './Partners.css';

export default function Partners() {
  const brandLogos = [
    { name: 'Cisco', src: './images/partners/cisco.webp' },
    { name: 'Sony', src: './images/partners/sony.webp' },
    { name: 'JBL', src: './images/partners/jbl.webp' },
    { name: 'Bose', src: './images/partners/bose.webp' },
    { name: 'QSC', src: './images/partners/qsc.webp' },
    { name: 'Sennheiser', src: './images/partners/sennheiser.webp' },
    { name: 'LG', src: './images/partners/lg.webp' },
    { name: 'Christie', src: './images/partners/christie.webp' },
    { name: 'British Acoustics', src: './images/partners/british_acoustics.webp' }
  ];

  // Duplicate the logos array to achieve a seamless scrolling effect
  const marqueeLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Ecosystem Partners</span>
          <h2 className="section-title">Allied Hardware Brands</h2>
          <p className="section-desc">We build architectures natively compatible with leading equipment manufacturers.</p>
        </div>

        <div className="partners-slider-container">
          <div className="partners-track">
            {marqueeLogos.map((logo, index) => (
              <div className="partner-logo-item" key={index}>
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="partner-fallback-text" style={{ display: 'none' }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
