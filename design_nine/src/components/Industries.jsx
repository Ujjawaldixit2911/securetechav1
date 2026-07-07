import React from 'react';

const industriesList = [
  {
    icon: 'fa-solid fa-building',
    title: 'Corporate',
    image: '/images/sector-corporate.png',
    desc: 'Videoconferencing boardrooms, smart huddle rooms, and high-productivity collaborative systems.'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Education',
    image: '/images/sector-education.png',
    desc: 'Interactive smart classrooms, lecture halls, and hybrid teaching platforms for universities.'
  },
  {
    icon: 'fa-solid fa-user-md',
    title: 'Healthcare',
    image: '/images/sector-healthcare.jpg',
    desc: 'High-definition telemedicine suites, OT display routing, and clean hospital signage layouts.'
  },
  {
    icon: 'fa-solid fa-landmark',
    title: 'Government',
    image: '/images/sector-public.png',
    desc: 'Secure videoconferencing facilities, legislative councils, and operations command centers.'
  },
  {
    icon: 'fa-solid fa-hotel',
    title: 'Hospitality',
    image: '/images/sector-retail.png',
    desc: 'Integrated banquet sound networks, lobby signage, and automation for hotels and lounges.'
  },
  {
    icon: 'fa-solid fa-house-laptop',
    title: 'Residential',
    image: '/images/sector-residential.jpeg',
    desc: 'Custom home automation, dedicated acoustic home theaters, and localized sound distributions.'
  }
];

export default function Industries() {
  return (
    <section className="section section-light-alt" id="industries">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Industries We Serve</span>
          <h2>Tailored AV Integration Across Sectors</h2>
          <p>We configure bespoke technology configurations engineered to match the specialized operational workflows of distinct environments.</p>
        </div>

        <div className="industries-grid">
          {industriesList.map((ind, idx) => (
            <div className="industry-card reveal" key={idx} style={{ padding: '0px', overflow: 'hidden' }}>
              <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  className="ind-card-image"
                />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="industry-icon" style={{ flexShrink: 0, width: '42px', height: '42px', fontSize: '1.1rem', margin: 0 }}>
                    <i className={ind.icon}></i>
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.15rem' }}>{ind.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>{ind.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
