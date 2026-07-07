import React from 'react';

const solutionsList = [
  {
    icon: 'fa-solid fa-signal',
    title: 'AV Systems',
    desc: 'Complete audio-visual design, supply, and installation tailored for collaborative and presentation zones.'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Smart Integration',
    desc: 'Interactive smart classrooms, laser projection configurations, and automated lecture layouts.'
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'AV Controls',
    desc: 'Centralized control systems and touch-screens for seamless control over hardware matrix hubs.'
  },
  {
    icon: 'fa-solid fa-server',
    title: 'ICT Infrastructure',
    desc: 'Robust networking, switches, server cabling, and cybersecurity backbone for stable AV ecosystems.'
  },
  {
    icon: 'fa-solid fa-volume-high',
    title: 'Stadiums & Arena AV',
    desc: 'Large-format scoreboard displays, high-output outdoor sound arrays, and latency alignment.'
  },
  {
    icon: 'fa-solid fa-music',
    title: 'Club & Sound Systems',
    desc: 'Immersive sound pressure layouts and performance lighting integration for luxury lounges.'
  },
  {
    icon: 'fa-solid fa-film',
    title: 'Cinema Hall Systems',
    desc: 'Digital projection formats, acoustical treatments, and multi-channel Dolby Atmos sound routing.'
  },
  {
    icon: 'fa-solid fa-masks-theater',
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
              <div className="solution-icon">
                <i className={sol.icon}></i>
              </div>
              <h3>{sol.title}</h3>
              <p>{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
