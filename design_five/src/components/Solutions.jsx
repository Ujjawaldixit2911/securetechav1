import React, { useEffect, useRef, useState } from 'react';
import './Solutions.css';

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const solutionsList = [
    {
      title: 'AV System Integration',
      desc: 'Architectural audio and video engineering unified under simple touch interfaces.',
      image: './images/solution-av-system.png'
    },
    {
      title: 'Smart Boardrooms',
      desc: 'Seamless meeting automation featuring tabletop control panels and intelligent mic arrays.',
      image: './images/solution-boardroom.png'
    },
    {
      title: 'Video Conferencing',
      desc: 'Unified collaboration nodes supporting Microsoft Teams, Zoom Rooms, and Webex systems.',
      image: './images/solution-smart-classroom.jpeg'
    },
    {
      title: 'Digital Signage Systems',
      desc: 'Centralized network-wide display control grids for lobbies, directories, and notices.',
      image: './images/sector-retail.png'
    },
    {
      title: 'Control Hardware Programming',
      desc: 'Custom-coded touch interface panels from industry-standard Crestron, Extron, and AMX cores.',
      image: './images/solution-av-control.png'
    },
    {
      title: 'Auditoriums & Broadcast',
      desc: 'High-SPL acoustics, line array configurations, stage lighting, and digital streaming consoles.',
      image: './images/solution-auditorium.png'
    },
    {
      title: 'Stadium Sound & Video',
      desc: 'Weather-resistant large-venue PA setups, digital scoreboard feeds, and safety announcer overrides.',
      image: './images/solution-stadium.png'
    },
    {
      title: 'ICT Infrastructure',
      desc: 'Structured fiber cabling, network routing, rack management, and system patch configurations.',
      image: './images/solution-ict-infrastructure.png'
    }
  ];

  return (
    <section id="solutions" className="solutions-section" ref={sectionRef}>
      <div className="solutions-container">
        <div className="section-header-centered">
          <div className="section-eyebrow">Enterprise Capabilities</div>
          <h2 className="section-title-b2b">Integrations That Scale</h2>
          <p className="section-desc-b2b">We configure reliable AV architectures built upon certified, industry-standard equipment.</p>
        </div>

        <div className={`solutions-grid reveal-fade ${isVisible ? 'visible' : ''}`}>
          {solutionsList.map((sol, index) => (
            <div key={index} className="solution-card">
              <div className="solution-image-container">
                <img src={sol.image} alt={sol.title} className="solution-card-img" />
              </div>
              <div className="solution-card-body">
                <h3 className="solution-title">{sol.title}</h3>
                <p className="solution-desc">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
