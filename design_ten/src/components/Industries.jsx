import React from 'react';

const industries = [
  {
    icon: 'fa-solid fa-building',
    title: 'Corporate',
    desc: 'Seamless boardroom and conferencing AV for modern workspaces.'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Education',
    desc: 'Smart classrooms that make learning interactive and engaging.'
  },
  {
    icon: 'fa-solid fa-landmark',
    title: 'Government',
    desc: 'Secure, reliable AV infrastructure for public institutions.'
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Healthcare',
    desc: 'Precision AV systems for hospitals and diagnostic centers.'
  },
  {
    icon: 'fa-solid fa-house-laptop',
    title: 'Residential',
    desc: 'Luxury home automation and immersive entertainment systems.'
  },
  {
    icon: 'fa-solid fa-volume-high',
    title: 'Stadiums & Arenas',
    desc: 'Large-scale display and sound systems for live audiences.'
  },
  {
    icon: 'fa-solid fa-film',
    title: 'Cinema Halls',
    desc: 'Cutting-edge projection and acoustic design for theatres.'
  },
  {
    icon: 'fa-solid fa-masks-theater',
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
