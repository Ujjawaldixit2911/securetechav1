import React from 'react';

const clients = [
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

export default function ClientLogos() {
  return (
    <section className="section section-light" style={{ padding: '70px 24px' }}>
      <div className="container">
        <h3 className="marquee-heading">Trusted by Leading Organizations Across India</h3>
        
        <div className="marquee-container marquee-light">
          <div className="marquee-track">
            {/* Duplicated 3 times to achieve infinite scroll loop */}
            {[...clients, ...clients, ...clients].map((client, idx) => (
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
