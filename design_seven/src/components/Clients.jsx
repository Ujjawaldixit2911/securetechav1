import React from 'react';

const clientsList = [
  'IIT DELHI', 'IIT JODHPUR', 'AIIMS HOSPS', 'TATA GROUP', 
  'INFOSYS', 'WIPRO CORP', 'ICICI BANK', 'DLF LIMITED', 'HDFC ENTERPRISE'
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
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#4B5563' }}>
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
