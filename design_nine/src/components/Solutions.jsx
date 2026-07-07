import React from 'react';

const solutionsList = [
  {
    icon: 'fa-solid fa-drafting-compass',
    title: 'AV System Design',
    desc: 'Bespoke architectural layout modeling, acoustic calculations, and structured cable path maps.'
  },
  {
    icon: 'fa-solid fa-desktop',
    title: 'Smart Classroom Integration',
    desc: 'High-brightness laser displays, touch interactive screens, and distance classroom equipment.'
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'AV Control Systems',
    desc: 'Simplified room automation setups through touchpanels to coordinate audio levels, lighting, and feeds.'
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'ICT & Structured Cabling',
    desc: 'High-speed fiber backbones, network switch racks, and standardized commercial cat-cabling.'
  },
  {
    icon: 'fa-solid fa-volume-high',
    title: 'Auditorium Sound Systems',
    desc: 'Line-array configurations, digital speaker matrices, and acoustic treatment for crystal-clear acoustics.'
  },
  {
    icon: 'fa-solid fa-tower-broadcast',
    title: 'Stadium & Arena AV',
    desc: 'Weatherproof high-output speakers, massive outdoor LED billboards, and synchronized delays.'
  },
  {
    icon: 'fa-solid fa-film',
    title: 'Cinema & Preview Theatres',
    desc: 'Surround-sound configurations and premium digital screening systems for private venues.'
  },
  {
    icon: 'fa-solid fa-store',
    title: 'Commercial/Retail Audio',
    desc: 'Zoned background music channels, paging networks, and digital signage boards for malls and outlets.'
  }
];

export default function Solutions() {
  return (
    <section className="section section-dark" id="solutions">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Our Solutions</span>
          <h2>Integrated Audio Visual Technologies</h2>
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
