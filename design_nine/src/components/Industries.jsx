import React from 'react';

const industriesList = [
  {
    icon: 'fa-solid fa-building',
    title: 'Corporate',
    desc: 'Videoconferencing boardrooms, smart huddle rooms, and high-productivity collaborative systems.'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Education',
    desc: 'Interactive smart classrooms, lecture halls, and hybrid teaching platforms for universities.'
  },
  {
    icon: 'fa-solid fa-user-md',
    title: 'Healthcare',
    desc: 'High-definition telemedicine suites, OT display routing, and clean hospital signage layouts.'
  },
  {
    icon: 'fa-solid fa-landmark',
    title: 'Government',
    desc: 'Secure videoconferencing facilities, legislative councils, and operations command centers.'
  },
  {
    icon: 'fa-solid fa-hotel',
    title: 'Hospitality',
    desc: 'Integrated banquet sound networks, lobby signage, and automation for hotels and lounges.'
  },
  {
    icon: 'fa-solid fa-house-laptop',
    title: 'Residential',
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
            <div className="industry-card reveal" key={idx}>
              <div className="industry-icon">
                <i className={ind.icon}></i>
              </div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
