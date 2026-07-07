import React from 'react';

const projectsList = [
  {
    image: '/images/convention_centres.jpeg',
    title: 'Noida Convention Center',
    category: 'Auditoriums & Public Spaces',
    desc: 'High-performance audio networks, motorized projection systems, and stage lighting matrices deployed across three main halls.'
  },
  {
    image: '/images/solution-boardroom.png',
    title: 'Corporate HQ, Gurugram',
    category: 'Corporate Workspaces',
    desc: 'Videoconferencing configurations, ceiling microphone arrays, and integrated room control systems for 12 boardrooms.'
  },
  {
    image: '/images/solution-smart-classroom.jpeg',
    title: 'Technical Smart Campus',
    category: 'Hybrid Education',
    desc: 'Turnkey smart classroom design with laser projections, digital writing screens, and sound delay processors.'
  },
  {
    image: '/images/auditorium_view.jpg',
    title: 'State Judicial Council Hall',
    category: 'Government & Judiciary',
    desc: 'High-definition digital signage routing, encryption conferencing channels, and crystal-clear acoustic calibrations.'
  }
];

export default function Projects() {
  return (
    <section className="section section-light" id="projects" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Case Studies &amp; Installations</span>
          <h2>Our Recent Key Projects</h2>
          <p>Explore some of the high-end spatial installations engineered, built, and maintained by our certified technical team across India.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '35px' }}>
          {projectsList.map((proj, idx) => (
            <div className="industry-card reveal" key={idx} style={{ padding: '0px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  className="ind-card-image"
                />
              </div>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', display: 'block' }}>
                    {proj.category}
                  </span>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '1.25rem' }}>{proj.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{proj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
