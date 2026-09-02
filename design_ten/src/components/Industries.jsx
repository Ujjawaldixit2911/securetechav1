import React from 'react';

const industries = [
  {
    image: './images/sector-corporate.png',
    title: 'Corporate Enterprises',
    desc: 'Seamless boardroom and conferencing AV for modern workspaces.'
  },
  {
    image: './images/sector-education.png',
    title: 'Higher Education',
    desc: 'Smart classrooms that make learning interactive and engaging.'
  },
  {
    image: './images/sector-public.png',
    title: 'Government & Judiciary',
    desc: 'Secure, reliable AV infrastructure for public institutions.'
  },
  {
    image: './images/sector-healthcare.jpg',
    title: 'Healthcare Facilities',
    desc: 'Precision AV systems for hospitals and diagnostic centers.'
  },
  {
    image: './images/sector-residential.jpeg',
    title: 'Luxury Residential',
    desc: 'Luxury home automation and immersive entertainment systems.'
  },
  {
    image: './images/solution-stadium.png',
    title: 'Stadiums & Arenas',
    desc: 'Large-scale display and sound systems for live audiences.'
  },
  {
    image: './images/solution-cinema.png',
    title: 'Cinema Halls',
    desc: 'Cutting-edge projection and acoustic design for theatres.'
  },
  {
    image: './images/solution-auditorium.png',
    title: 'Auditoriums',
    desc: 'Crystal-clear audio and visual systems for large gatherings.'
  }
];

export default function Industries() {
  return (
    <section className="section section-light-alt" id="industries">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Industries We Serve</span>
          <h2>Tailored AV solutions engineered for every environment</h2>
          <p>We deliver high-end audio visual systems custom-tailored to solve specialized integration challenges across diverse sectors.</p>
        </div>

        <div className="industries-grid">
          {industries.map((ind, idx) => (
            <div className="industry-card reveal" key={idx} style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                <img src={ind.image} alt={ind.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
