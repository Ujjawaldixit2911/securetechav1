import React from 'react';

const solutionsList = [
  {
    image: './images/solution-av-system.png',
    title: 'AV Systems',
    desc: 'Complete audio-visual design, supply, and installation tailored for collaborative and presentation zones.'
  },
  {
    image: './images/solution-smart-classroom.jpeg',
    title: 'Smart Integration',
    desc: 'Interactive smart classrooms, laser projection configurations, and automated lecture layouts.'
  },
  {
    image: './images/solution-av-control.png',
    title: 'AV Controls',
    desc: 'Centralized control systems and touch-screens for seamless control over hardware matrix hubs.'
  },
  {
    image: './images/solution-ict-infrastructure.png',
    title: 'ICT Infrastructure',
    desc: 'Robust networking, switches, server cabling, and cybersecurity backbone for stable AV ecosystems.'
  },
  {
    image: './images/solution-stadium.png',
    title: 'Stadiums & Arena AV',
    desc: 'Large-format scoreboard displays, high-output outdoor sound arrays, and latency alignment.'
  },
  {
    image: './images/CLUB-SOUND-SYSTEM.jpg',
    title: 'Club & Sound Systems',
    desc: 'Immersive sound pressure layouts and performance lighting integration for luxury lounges.'
  },
  {
    image: './images/solution-cinema.png',
    title: 'Cinema Hall Systems',
    desc: 'Digital projection formats, acoustical treatments, and multi-channel Dolby Atmos sound routing.'
  },
  {
    image: './images/solution-auditorium.png',
    title: 'Auditorium Solutions',
    desc: 'End-to-end design including line arrays, motorized screens, architectural stage light grids, and stage management.'
  }
];

export default function Solutions() {
  return (
    <section className="section section-dark-alt" id="solutions">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Our Solutions</span>
          <h2>Comprehensive AV and ICT integration under one roof</h2>
          <p>We provide turnkey planning, custom installation, and automated management of audio-visual systems tailored to maximize communication efficiency.</p>
        </div>

        <div className="solutions-grid">
          {solutionsList.map((sol, idx) => (
            <div className="solution-card reveal" key={idx}>
              <div className="solution-image" style={{ width: '100%', height: '170px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                <img src={sol.image} alt={sol.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
