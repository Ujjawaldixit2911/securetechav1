import React from 'react';

const clients = [
  { name: 'IIT DELHI', logo: './images/iitd.jpg' },
  { name: 'AIIMS RAE BARELI', logo: './images/aiims_rae_bareli.jpg' },
  { name: 'IIT JODHPUR', logo: './images/iitjodhpur.jpeg' },
  { name: 'GUJARAT SCIENCE CITY', logo: './images/gujarat-science-city.jpg' },
  { name: 'HOTEL TAJ & BANQUETS', logo: './images/hotel.jpeg' },
  { name: 'CONVENTION CENTRES', logo: './images/convention_centres_new.jpeg' }
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
              <div className="marquee-item client-photo-item" key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FFFFFF', padding: '8px 18px', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  style={{ width: '38px', height: '38px', borderRadius: '6px', objectFit: 'cover' }} 
                />
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
