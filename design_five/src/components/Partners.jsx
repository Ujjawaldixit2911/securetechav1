import React from 'react';
import './Partners.css';

export default function Partners() {
  const partners = [
    {
      name: 'Crestron',
      color: '#002F6C',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="26" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="-0.5">CRESTRON</text>
        </svg>
      )
    },
    {
      name: 'Extron',
      color: '#E31B23',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="15" y="26" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="0.5">Extron</text>
        </svg>
      )
    },
    {
      name: 'Biamp',
      color: '#00843D',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="20" y="26" fontFamily="Inter, sans-serif" fontSize="19" fontWeight="700" fill="currentColor">biamp.</text>
        </svg>
      )
    },
    {
      name: 'Shure',
      color: '#000000',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="22" y="26" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="2">SHURE</text>
        </svg>
      )
    },
    {
      name: 'Sennheiser',
      color: '#009FDF',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="12" y="26" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" fill="currentColor" letterSpacing="1">SENNHEISER</text>
        </svg>
      )
    },
    {
      name: 'Barco',
      color: '#E30613',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="20" y="26" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="-0.5">BARCO</text>
        </svg>
      )
    },
    {
      name: 'Christie',
      color: '#D11241',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="15" y="26" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="0.5">CHRISTIE</text>
        </svg>
      )
    },
    {
      name: 'Samsung B2B',
      color: '#0A47A3',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="12" y="26" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="-0.5">SAMSUNG</text>
        </svg>
      )
    }
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
              style={{ color: partner.color, borderColor: `${partner.color}40`, backgroundColor: '#ffffff' }}
              title={`Authorized ${partner.name} Integrator`}
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
