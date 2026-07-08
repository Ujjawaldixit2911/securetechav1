import React from 'react';

const clientList = [
  { name: 'IIT DELHI', color: '#D32F2F', logoAbbr: 'IIT' },
  { name: 'IIT JODHPUR', color: '#0D47A1', logoAbbr: 'IIT' },
  { name: 'AIIMS HOSPITALS', color: '#1B5E20', logoAbbr: 'AM' },
  { name: 'TATA ENTERPRISES', color: '#002C6C', logoAbbr: 'T' },
  { name: 'INFOSYS TECHNOLOGIES', color: '#007ACC', logoAbbr: 'INF' },
  { name: 'WIPRO CORPORATE', color: '#7B1FA2', logoAbbr: 'W' },
  { name: 'ICICI BANK', color: '#E65100', logoAbbr: 'IC' },
  { name: 'DLF PROPERTIES', color: '#2E7D32', logoAbbr: 'DLF' },
  { name: 'HDFC GROUP', color: '#C62828', logoAbbr: 'HD' }
];

export default function Clients() {
  return (
    <section className="section section-light" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header reveal" style={{ marginBottom: '20px' }}>
          <span className="eyebrow" style={{ margin: 0 }}>Trusted Partners</span>
        </div>

        <div className="marquee-container">
          <div className="marquee-track" style={{ gap: '30px' }}>
            {/* Render 3 times for seamless wrapping loop */}
            {[...clientList, ...clientList, ...clientList].map((client, idx) => (
              <div 
                className="partner-item" 
                key={idx} 
                style={{ 
                  flexShrink: 0, 
                  width: '260px', 
                  height: '70px', 
                  padding: '12px 20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  backgroundColor: 'var(--white)',
                  border: '1px solid rgba(10,30,63,0.06)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div 
                  style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    backgroundColor: client.color, 
                    color: 'var(--white)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.85rem'
                  }}
                >
                  {client.logoAbbr}
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: client.color, letterSpacing: '0.02em' }}>
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
