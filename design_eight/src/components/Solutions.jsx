import React from 'react';

const solutionsList = [
  {
    icon: 'fa-solid fa-network-wired',
    title: 'AV System Integration',
    desc: 'Unifying hardware, acoustics, and networks into responsive collaboration hubs.'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Smart Classroom Integration',
    desc: 'Interactive touch panels, laser projectors, and distance-learning cameras.'
  },
  {
    icon: 'fa-solid fa-sliders-h',
    title: 'AV Control Systems',
    desc: 'Touch-to-talk systems and centralized touchscreens for simplified automation.'
  },
  {
    icon: 'fa-solid fa-server',
    title: 'ICT Infrastructure',
    desc: 'Structured fiber cabling, security firewalls, and optimized server architectures.'
  },
  {
    icon: 'fa-solid fa-volume-high',
    title: 'Stadiums & Arenas',
    desc: 'Massive acoustic coverage, sound delays, and ultra-high-output line arrays.'
  },
  {
    icon: 'fa-solid fa-music',
    title: 'Club & Sound Systems',
    desc: 'Vibrant, high-SPL audio systems custom-tuned for performance zones.'
  },
  {
    icon: 'fa-solid fa-film',
    title: 'Cinema Halls',
    desc: 'Surround-sound configurations and premium digital screening systems.'
  },
  {
    icon: 'fa-solid fa-masks-theater',
    title: 'Auditorium Solutions',
    desc: 'Perfect room acoustics, motorized projection, and custom stage lighting.'
  }
];

export default function Solutions() {
  return (
    <section className="section section-light" id="solutions">
      <div className="container">
        <div className="section-header reveal active">
          <span className="tagline">Our Solutions</span>
          <h2>Integrated Audio Visual Technologies</h2>
          <p>We provide turnkey planning, custom installation, and automated management of audio-visual systems tailored to maximize communication efficiency.</p>
        </div>

        <div className="solutions-grid">
          {solutionsList.map((sol, idx) => (
            <div className="solution-card reveal active" key={idx}>
              <div className="solution-icon-wrapper">
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
