import React from 'react';

const sectorsList = [
  {
    title: 'Corporate',
    image: '/images/sector-corporate.png',
    desc: 'High-priority videoconferencing boardrooms, digital huddle rooms, and agile smart workspaces.'
  },
  {
    title: 'Education',
    image: '/images/sector-education.png',
    desc: 'Interactive smart classrooms, high-participation hybrid lecture halls, and digital learning platforms.'
  },
  {
    title: 'Healthcare',
    image: '/images/sector-healthcare.jpg',
    desc: 'Telemedicine AV hubs, interactive clinical training spaces, and clear digital signage networks.'
  },
  {
    title: 'Government',
    image: '/images/sector-public.png',
    desc: 'Secure judicial systems, command control rooms, and state-of-the-art administrative facilities.'
  },
  {
    title: 'Hospitality',
    image: '/images/hotel.jpeg',
    desc: 'Professional ambient sound, digital ballrooms, and integrated automation for luxury hotels.'
  },
  {
    title: 'Auditoriums & Stadiums',
    image: '/images/solution-stadium.png',
    desc: 'Massive concert-grade line arrays, giant LED video walls, and custom acoustic zoning.'
  }
];

export default function Sectors() {
  return (
    <section className="section section-light-alt" id="sectors">
      <div className="container">
        <div className="section-header reveal active">
          <span className="tagline">Industries We Serve</span>
          <h2>Tailored Audio Visual Environments</h2>
          <p>We deploy purpose-built AV and acoustic solutions designed to solve specialized workflow and integration challenges across diverse sectors.</p>
        </div>

        <div className="sectors-grid">
          {sectorsList.map((sector, idx) => (
            <div className="sector-card reveal active" key={idx}>
              <img src={sector.image} alt={`${sector.title} AV Solution`} loading="lazy" />
              <div className="sector-overlay">
                <h3>{sector.title}</h3>
                <p className="sector-desc">{sector.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
