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
      title: 'IIT Delhi Academic Center',
      category: 'Auditorium Sound & Acoustics',
      image: '/assets/sectors/sector-education.png',
      class: 'wide',
      fallbackText: 'IIT Sound System'
    },
    {
      title: 'AIIMS Smart Lecture Complex',
      category: 'Education Tech',
      image: '/assets/products/solution-smart-classroom.jpeg',
      class: 'normal',
      fallbackText: 'AIIMS Classroom AV'
    },
    {
      title: 'Aditya Birla Meeting Space',
      category: 'Corporate Boardroom',
      image: '/assets/products/solution-boardroom.png',
      class: 'normal',
      fallbackText: 'Corporate Boardroom'
    },
    {
      title: 'Gujarat Science City Operations',
      category: 'Command & Control',
      image: '/assets/sectors/sector-corporate.png',
      class: 'wide',
      fallbackText: 'Command Operations Center'
    },
    {
      title: 'National Cricket Arena sound system',
      category: 'Stadium Audio',
      image: '/assets/products/solution-stadium.png',
      class: 'full-width',
      fallbackText: 'Stadium PA arrays'
    }
  ];

  return (
    <section id="projects" className="projects-section section-light" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">Our Featured Deployments</h2>
          <p className="section-desc">Explore a selection of high-profile integrations engineered for leading Indian organizations and global corporations.</p>
        </div>

        <div className={`projects-masonry reveal ${isVisible ? 'active' : ''}`}>
          {projectList.map((proj, idx) => (
            <div key={idx} className={`project-card ${proj.class}`}>
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="project-img"
                loading="eager"
                onError={(e) => {
                  e.target.src = '/assets/products/solution-boardroom.png';
                }}
              />
              <div className="project-overlay">
                <span className="project-category">{proj.category}</span>
                <h3 className="project-card-title">{proj.title}</h3>
                <a href="#contact" className="project-link">View Project Scope →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
