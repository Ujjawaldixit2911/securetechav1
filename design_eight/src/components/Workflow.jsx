import React from 'react';

const steps = [
  {
    num: '01',
    icon: 'fa-solid fa-comments',
    title: 'Consult',
    desc: 'Free AV consultation, site surveys, and acoustic feasibility studies tailored to your space.'
  },
  {
    num: '02',
    icon: 'fa-solid fa-drafting-compass',
    title: 'Design',
    desc: 'Expert AV and acoustic engineers map out schematic blueprints, cable schedules, and 3D acoustics.'
  },
  {
    num: '03',
    icon: 'fa-solid fa-tools',
    title: 'Build',
    desc: 'Seamless installation, structured rack cabling, hardware integration, and DSP programming.'
  },
  {
    num: '04',
    icon: 'fa-solid fa-headset',
    title: 'Manage',
    desc: 'Ongoing preventative maintenance, SLA support agreements, and remote workspace management.'
  }
];

export default function Workflow() {
  return (
    <section className="section section-dark" id="workflow">
      <div className="container">
        <div className="section-header reveal active">
          <span className="tagline">Our Methodology</span>
          <h2>A Comprehensive End-to-End Execution Model</h2>
          <p>We guide your project through every phase, ensuring complete synchronization between architectural layouts, acoustic blueprints, and hardware configurations.</p>
        </div>

        <div className="workflow-grid">
          {steps.map((step, idx) => (
            <div className="workflow-card reveal active" key={idx}>
              <div className="workflow-num">{step.num}</div>
              <div className="workflow-icon">
                <i className={step.icon}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
