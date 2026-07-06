import React from 'react';

const features = [
  {
    title: 'Expert Consultants',
    desc: 'Architectural acoustics experts compute noise reduction levels to isolate audio.'
  },
  {
    title: 'Certified Engineers',
    desc: 'Integrators hold top AVIXA CTS, Crestron, and Cisco credentials.'
  },
  {
    title: 'Turnkey Execution',
    desc: 'From civil acoustic paneling to server connections, we coordinate everything.'
  },
  {
    title: 'Future Ready Design',
    desc: 'All signal structures are scale-ready, accommodating 8K setups.'
  },
  {
    title: 'Pan-India Deployment',
    desc: 'Offices in major metros facilitate prompt regional service delivery.'
  },
  {
    title: 'End to End Support',
    desc: 'A reliable service desk operates round-the-clock to coordinate AMC repairs.'
  }
];

export default function WhyUs() {
  return (
    <section className="section section-alt" id="why-choose-us">
      <div className="container">
        <div className="grid why-choose-grid">
          <div className="why-choose-content animate-fade-left animated">
            <div className="tagline">Why SecureTech AV</div>
            <h2>Engineered For Flawless Operation</h2>
            <p style={{ marginBottom: '40px' }}>
              We go beyond standard product supply. Our team designs sound dynamics, coordinates signal pathways, structures network grids, and maintains your systems for years to come.
            </p>
            
            <div className="features-list">
              {features.map((feat, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-check">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="feature-info">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-img-box animate-fade-right animated">
            <img src="/images/Auditorium_view_eagel_eye.jpg" alt="Acoustic Engineering Design Setup" />
          </div>
        </div>
      </div>
    </section>
  );
}
