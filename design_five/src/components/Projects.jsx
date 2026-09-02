import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

export default function Projects() {
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

  const projectList = [
    {
      title: 'AIIMS Smart Conference Hall',
      category: 'Healthcare Integration',
      image: './images/solution-boardroom.png',
      fallbackText: 'Boardroom AV Setup'
    },
    {
      title: 'State Judicial Assembly Auditorium',
      category: 'Government Sector',
      image: './images/Auditorium2.png',
      fallbackText: 'High-SPL Line Arrays'
    },
    {
      title: 'IIT Digital Learning Center',
      category: 'Higher Education',
      image: './images/solution-smart-classroom.jpeg',
      fallbackText: 'Lecturing Smart Console'
    },
    {
      title: 'Metro Command Control Room',
      category: 'Public Infrastructure',
      image: './images/solution-av-control.png',
      fallbackText: 'Control Room Display Grid'
    },
    {
      title: 'Grand Hotel Banquet Sound System',
      category: 'Hospitality & Leisure',
      image: './images/solution-cinema.png',
      fallbackText: 'Multi-zone Audio Matrix'
    },
    {
      title: 'City Football Arena PA System',
      category: 'Stadiums & Venues',
      image: './images/solution-stadium.png',
      fallbackText: 'Stadium High-Power System'
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <div className="section-header-centered">
          <div className="section-eyebrow">Featured Installations</div>
          <h2 className="section-title-b2b">Recent Project Deployments</h2>
          <p className="section-desc-b2b">A showcase of spatial integration configurations designed and commissioned by our technical teams.</p>
        </div>

        <div className={`projects-grid reveal-fade ${isVisible ? 'visible' : ''}`}>
          {projectList.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-media-wrap">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="project-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-img-fallback" style={{ display: 'none' }}>
                  <svg className="project-fallback-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                  <span>{proj.fallbackText}</span>
                </div>

                {/* Hover overlay with Title + Category tag */}
                <div className="project-overlay">
                  <span className="project-category-tag">{proj.category}</span>
                  <h3 className="project-overlay-title">{proj.title}</h3>
                  <span className="project-view-btn">
                    View Case Study
                    <svg className="view-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
