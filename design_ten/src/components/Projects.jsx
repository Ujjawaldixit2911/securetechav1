import React from 'react';

const projectsList = [
  {
    image: '/images/solution-boardroom.png',
    title: 'Corporate HQ, Gurugram',
    desc: 'Seamless boardroom AV integration across 12 conference rooms featuring custom DSP presets.'
  },
  {
    image: '/images/solution-smart-classroom.jpeg',
    title: 'State University Smart Campus',
    desc: '120 smart classrooms deployed with centralized AV control and interactive projection grids.'
  },
  {
    image: '/images/solution-cinema.png',
    title: 'Metro Multiplex Cinema',
    desc: 'Dolby Atmos-enabled digital cinema upgrade across 6 screens with custom acoustics.'
  }
];

export default function Projects() {
  return (
    <section className="section section-light" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Case Studies</span>
          <h2>Projects That Speak for Themselves</h2>
          <p>Explore some of our recently executed turnkey AV systems integration projects across corporate office blocks, campuses, and cinema venues.</p>
        </div>

        <div className="projects-grid">
          {projectsList.map((proj, idx) => (
            <div className="project-card reveal" key={idx}>
              <div className="project-image">
                <img src={proj.image} alt={proj.title} loading="lazy" />
              </div>
              <div className="project-content">
                <div>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
                <a href="#projects" className="project-link">
                  Explore Case Study <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
