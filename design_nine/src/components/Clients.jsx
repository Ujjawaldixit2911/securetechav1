import React from 'react';

const clientNames = [
  'IIT DELHI',
  'IIT JODHPUR',
  'AIIMS HOSPITALS',
  'TATA ENTERPRISES',
  'INFOSYS TECHNOLOGIES',
  'WIPRO CORPORATE',
  'ICICI BANK',
  'DLF PROPERTIES',
  'HDFC GROUP'
];

export default function Clients() {
  return (
    <section className="section section-light" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header reveal" style={{ marginBottom: '20px' }}>
          <span className="eyebrow" style={{ margin: 0 }}>Trusted Partners</span>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {/* Render 3 times for seamless wrapping loop */}
            {[...clientNames, ...clientNames, ...clientNames].map((client, idx) => (
              <div className="marquee-item" key={idx}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
