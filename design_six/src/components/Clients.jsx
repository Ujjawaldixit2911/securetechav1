import React from 'react';
import './Clients.css';

export default function Clients() {
  const clients = [
    { name: 'AIIMS', text: 'A.I.I.M.S', color: '#1B5E20' },
    { name: 'IIT Delhi', text: 'I.I.T DELHI', color: '#D32F2F' },
    { name: 'DMRC', text: 'DMRC METRO', color: '#0D47A1' },
    { name: 'Taj Hotels', text: 'TAJ HOTELS', color: '#C5A880' },
    { name: 'GMR Group', text: 'GMR GROUP', color: '#002C6C' },
    { name: 'HDFC Bank', text: 'HDFC BANK', color: '#C62828' },
    { name: 'Infosys', text: 'INFOSYS', color: '#007ACC' },
    { name: 'BSNL Infrastructure', text: 'BSNL TECH', color: '#E65100' }
  ];

  // Duplicate items to ensure infinite looping without gaps
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="clients-section">
      <div className="container clients-container">
        <div className="clients-intro-row">
          <span className="clients-tag">Trusted Deployments</span>
          <p className="clients-intro-text">Commissioned by leading organizations across the continent.</p>
        </div>

        <div className="clients-marquee-wrapper">
          <div className="clients-marquee-track">
            {marqueeItems.map((cli, idx) => (
              <div key={idx} className="clients-marquee-item" title={cli.name} style={{ color: cli.color, opacity: 0.95 }}>
                <svg className="client-logo-svg" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="140" height="40" rx="4" fill="transparent" />
                  <text 
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    fontFamily="Inter, sans-serif" 
                    fontSize="13" 
                    fontWeight="800" 
                    fill="currentColor"
                    letterSpacing="1.5"
                  >
                    {cli.text}
                  </text>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
