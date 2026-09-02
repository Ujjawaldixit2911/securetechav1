import React, { useEffect, useRef, useState } from 'react';
import './Sectors.css';

export default function Sectors() {
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

  const sectorsList = [
    {
      id: 'corporate',
      title: 'Corporate Enterprises',
      desc: 'Collaborative boardrooms, telepresence spaces, and interactive VC hubs.',
      image: './images/sector-corporate.png',
      fallbackText: 'Corporate Office AV'
    },
    {
      id: 'education',
      title: 'Higher Education',
      desc: 'Smart lecture halls, active learning labs, and campus signage systems.',
      image: './images/sector-education.png',
      fallbackText: 'Academic Smart Hall'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Facilities',
      desc: 'Surgical auditorium feeds, telemetry setups, and public directories.',
      image: './images/sector-healthcare.jpg',
      fallbackText: 'Clinical AV Infrastructure'
    },
    {
      id: 'government',
      title: 'Government & Judiciary',
      desc: 'Secure assembly audio systems, court reporting feeds, and command centers.',
      image: './images/sector-public.png',
      fallbackText: 'Judiciary Console System'
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Leisure',
      desc: 'Immersive sound grids for lounges, digital displays, and banquet hall systems.',
      image: './images/sector-retail.png',
      fallbackText: 'Hospitality & Retail Display'
    },
    {
      id: 'residential',
      title: 'Luxury Residential',
      desc: 'Home cinemas, integrated smart automation nodes, and smart lighting grids.',
      image: './images/sector-residential.jpeg',
      fallbackText: 'Automated Luxury Cinema'
    }
  ];

  return (
    <section id="sectors" className="sectors-section" ref={sectionRef}>
      <div className="sectors-container">
        <div className="section-header-centered">
          <div className="section-eyebrow">Industries We Serve</div>
          <h2 className="section-title-b2b">Tailored AV Architectures</h2>
          <p className="section-desc-b2b">We deploy integrated technologies that align with the specific operational demands of your sector.</p>
        </div>

        <div className={`sectors-grid reveal-fade ${isVisible ? 'visible' : ''}`}>
          {sectorsList.map((sector) => (
            <div key={sector.id} className="sector-card">
              <div className="sector-media-wrap">
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="sector-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="sector-img-fallback" style={{ display: 'none' }}>
                  <svg className="sector-fallback-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                  <span>{sector.fallbackText}</span>
                </div>
              </div>
              
              <div className="sector-info">
                <h3 className="sector-card-title">{sector.title}</h3>
                <p className="sector-card-desc">{sector.desc}</p>
                <a href="#contact" className="sector-card-link">
                  Request Configuration Details
                  <svg className="sector-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
