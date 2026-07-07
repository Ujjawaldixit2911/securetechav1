import React from 'react';

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Understanding your physical space, operational workflows, and budget framework.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Compiling detailed drawings, acoustic formulas, and product representation sheets.'
  },
  {
    num: '03',
    title: 'Install',
    desc: 'Deploying certified engineers for structured installation, programming, and DSP tuning.'
  },
  {
    num: '04',
    title: 'Support',
    desc: 'Providing annual maintenance contracts (AMC) and prompt local technical support.'
  }
];

export default function Process() {
  return (
    <section className="section section-light" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Our Process</span>
          <h2>turnkey Execution Model</h2>
          <p>We manage your audio-visual deployment from schematic conception to system operations, ensuring flawless execution.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, idx) => (
            <div className="process-step reveal" key={idx}>
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
