import React from 'react';

const sectorsList = [
  {
    title: 'Corporate',
    icon: 'fa-solid fa-briefcase',
    desc: 'Transform your boardrooms and collaboration spaces with cutting-edge AV technology — from video conferencing to digital signage.'
  },
  {
    title: 'Education',
    icon: 'fa-solid fa-graduation-cap',
    desc: 'Power interactive distance learning and smart classrooms using acoustic design, laser projections, and connected displays.'
  },
  {
    title: 'Healthcare',
    icon: 'fa-solid fa-hospital',
    desc: 'Equip healthcare facilities with clinical-grade displays, crisp training acoustics, and telemedicine setups.'
  },
  {
    title: 'Government',
    icon: 'fa-solid fa-building-columns',
    desc: 'Deploy secure video-conferencing networks, legislative voting panels, and multi-display emergency control rooms.'
  },
  {
    title: 'Hospitality',
    icon: 'fa-solid fa-hotel',
    desc: 'Elevate client experiences with distributed lobby audio, dynamic event halls, and central hotel control interfaces.'
  },
  {
    title: 'Auditorium',
    icon: 'fa-solid fa-theater-masks',
    desc: 'Integrate massive acoustic panels, theater sound networks, line array speakers, and ambient stage illuminations.'
  },
  {
    title: 'Stadium & Arena',
    icon: 'fa-solid fa-football',
    desc: 'Install weather-resistant outdoor speakers, high-impact public announcement arrays, and huge LED scoreboards.'
  },
  {
    title: 'Residential',
    icon: 'fa-solid fa-house',
    desc: 'Experience absolute luxury with architectural sound, hidden custom home theaters, and intuitive smart home automation.'
  }
];

export default function Sectors({ onOpenEnquiry }) {
  return (
    <section className="section" id="sectors">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Industries We Serve</div>
          <h2>Tailored AV Environments For Every Field</h2>
          <p>We craft high-fidelity, customized audio visual ecosystems addressing the unique operational needs of enterprise, public infrastructure, and luxury residential projects.</p>
        </div>
        
        <div className="grid industries-grid">
          {sectorsList.map((sec, index) => (
            <div className="industry-card animate-fade-up animated" key={index} style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
              <div className="industry-card-icon">
                <i className={sec.icon}></i>
              </div>
              <h3>{sec.title}</h3>
              <p>{sec.desc}</p>
              <button className="btn btn-text" onClick={onOpenEnquiry}>VIEW SECTOR</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
