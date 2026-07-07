import React from 'react';

const clientsList = [
  'IIT DELHI',
  'IIT JODHPUR',
  'AIIMS RAE BARELI',
  'TATA ENTERPRISES',
  'INFOSYS TECHNOLOGIES',
  'WIPRO CORPORATE',
  'ICICI BANK',
  'DLF PROPERTIES',
  'HDFC GROUP'
];

export default function Clients() {
  return (
    <section className="section section-dark marquee-section" id="clients" style={{ paddingTop: '0px' }}>
      <div className="container">
        <div className="section-header reveal active" style={{ marginBottom: '30px' }}>
          <span className="tagline">Our Clients</span>
          <h2>Trusted by Academic and Corporate Leaders</h2>
          <p>From prestigious academic institutes to Fortune India enterprises, we provide reliable, secure high-priority systems.</p>
        </div>

        <div className="marquee-container">
          <div className="marquee-track scroll-right-anim">
            {/* Render multiple times for seamless scrolling loop */}
            {[...clientsList, ...clientsList, ...clientsList].map((client, index) => (
              <div className="marquee-item" key={index} style={{ padding: '0 45px' }}>
                <span className="client-logo-text">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
