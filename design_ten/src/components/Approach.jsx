import React from 'react';

const approachSteps = [
  {
    num: '01',
    title: 'Consult & Design',
    desc: 'Understanding your space and designing the right AV layout, blueprints, and equipment mappings.'
  },
  {
    num: '02',
    title: 'Build & Integrate',
    desc: 'Precision installation with certified technicians, structured cabling, rack layouts, and calibration.'
  },
  {
    num: '03',
    title: 'Support & Maintain',
    desc: 'Ongoing AMC contracts, preventive health checks, and rapid-response technical support.'
  },
  {
    num: '04',
    title: 'Innovate & Upgrade',
    desc: 'Future-proofing your systems with the latest technology, hardware swaps, and DSP upgrades.'
  }
];

export default function Approach() {
  return (
    <section className="section section-dark" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Our Methodology</span>
          <h2>Our Approach</h2>
          <p>We execute projects with a structured lifecycle methodology, ensuring perfect coordination between structural layout and operational deployment.</p>
        </div>

        <div className="approach-grid">
          {approachSteps.map((step, idx) => (
            <div className="approach-step reveal" key={idx}>
              <div className="approach-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
