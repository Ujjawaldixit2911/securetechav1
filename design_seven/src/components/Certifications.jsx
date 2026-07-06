import React from 'react';

const certifications = [
  {
    icon: 'fa-solid fa-stamp',
    title: 'ISO Certified',
    desc: 'Standardized workflows ensuring high-quality design, procurement, and deployment procedures.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Authorized Partner',
    desc: 'Direct support pipelines, wholesale pricing, and verified warranties with premium brands.'
  },
  {
    icon: 'fa-solid fa-user-shield',
    title: 'Certified Engineers',
    desc: 'AVIXA CTS-D, CTS-I, Crestron Gold, and Cisco CCNA certified specialists on team.'
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Global Partners',
    desc: 'Cooperating with global consultancy systems to install uniform systems across India.'
  }
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Industry Standards</div>
          <h2>Global Certifications & Credentials</h2>
          <p>We uphold absolute engineering rigor. Our organizational workflows and team qualifications meet leading global credentials.</p>
        </div>
        
        <div className="grid certs-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card animate-fade-up animated" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <i className={cert.icon}></i>
              <h4>{cert.title}</h4>
              <p>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
