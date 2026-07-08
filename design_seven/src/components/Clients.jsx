import React from 'react';

const clientsList = [
  { name: 'IIT DELHI', color: '#D32F2F' },
  { name: 'IIT JODHPUR', color: '#0D47A1' },
  { name: 'AIIMS HOSPS', color: '#1B5E20' },
  { name: 'TATA GROUP', color: '#002C6C' },
  { name: 'INFOSYS', color: '#007ACC' },
  { name: 'WIPRO CORP', color: '#7B1FA2' },
  { name: 'ICICI BANK', color: '#E65100' },
  { name: 'DLF LIMITED', color: '#2E7D32' },
  { name: 'HDFC ENTERPRISE', color: '#C62828' }
];

export default function Clients() {
  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Enterprise Trust</div>
          <h2>Trusted by India's Industry Leaders</h2>
          <p>We deploy high-priority audio visual systems for prominent companies, healthcare networks, and academic campuses across the nation.</p>
        </div>
        
        <div className="marquee-wrapper">
          <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '22s' }}>
            {[...clientsList, ...clientsList].map((client, index) => (
              <div className="marquee-item" key={index}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: client.color }}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
