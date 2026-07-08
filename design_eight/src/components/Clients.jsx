import React from 'react';

const clientsList = [
  { name: 'IIT DELHI', color: '#FF6B6B' },
  { name: 'IIT JODHPUR', color: '#54A0FF' },
  { name: 'AIIMS RAE BARELI', color: '#1DD1A1' },
  { name: 'TATA ENTERPRISES', color: '#FFCA28' },
  { name: 'INFOSYS TECHNOLOGIES', color: '#00D2D3' },
  { name: 'WIPRO CORPORATE', color: '#A29BFE' },
  { name: 'ICICI BANK', color: '#FF9F43' },
  { name: 'DLF PROPERTIES', color: '#10AC84' },
  { name: 'HDFC GROUP', color: '#FF7675' }
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
                <span className="client-logo-text" style={{ color: client.color, fontWeight: 800 }}>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
