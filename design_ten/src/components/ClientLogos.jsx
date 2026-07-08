import React from 'react';

const clients = [
  { name: 'IIT DELHI', color: '#D32F2F' },
  { name: 'IIT JODHPUR', color: '#0D47A1' },
  { name: 'AIIMS RAE BARELI', color: '#1B5E20' },
  { name: 'TATA ENTERPRISES', color: '#005A9C' },
  { name: 'INFOSYS TECHNOLOGIES', color: '#007ACC' },
  { name: 'WIPRO CORPORATE', color: '#7B1FA2' },
  { name: 'ICICI BANK', color: '#F39C12' },
  { name: 'DLF PROPERTIES', color: '#D35400' },
  { name: 'HDFC GROUP', color: '#C0392B' }
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
              <div className="marquee-item" key={idx} style={{ color: client.color, opacity: 0.85, fontWeight: 800 }}>
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
