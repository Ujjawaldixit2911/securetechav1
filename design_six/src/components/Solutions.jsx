import React, { useEffect, useRef, useState } from 'react';
import './Solutions.css';

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

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
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const solutionsList = [
    {
      title: 'AV System Integration',
      desc: 'End-to-end design, provisioning, and integration of professional commercial audio-visual displays and control racks.',
      image: '/assets/products/solution-av-system.png', // Fallback or base image
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      )
    },
    {
      title: 'Smart Meeting Rooms',
      desc: 'Collaborative rooms unified with scheduling, active lighting, and automated touch displays.',
      image: '/assets/products/solution-boardroom.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Video Conferencing',
      desc: 'Certified high-definition team visual conferencing arrays connecting locations with absolute uptime.',
      image: '/assets/products/solution-smart-classroom.jpeg',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      )
    },
    {
      title: 'Digital Signage',
      desc: 'Centrally-managed digital information displays to distribute real-time visual messages.',
      image: '/assets/sectors/sector-retail.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'AV Control Systems',
      desc: 'Custom-coded interfaces orchestrating audio volumes, visual switching, and shades on one touch screen panel.',
      image: '/assets/products/solution-av-control.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      title: 'ICT Infrastructure',
      desc: 'Robust commercial networking, structured copper cabling layouts, and enterprise switches.',
      image: '/assets/products/solution-ict-infrastructure.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    },
    {
      title: 'Auditorium Solutions',
      desc: 'High-performance acoustical sound system configurations, pro stage lights, and high-lumen projection arrays.',
      image: '/assets/products/solution-auditorium.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      )
    },
    {
      title: 'Stadium Solutions',
      desc: 'Mass acoustical sound columns, weatherproof public address networks, and huge LED score displays.',
      image: '/assets/products/solution-stadium.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="solutions-section section-light" ref={elementRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Enterprise Capabilities</span>
          <h2 className="section-title">Integrated Solutions</h2>
          <p className="section-desc">We deliver turnkey engineering arrays tailored to optimize facility communication pipelines.</p>
        </div>

        <div className={`solutions-grid reveal ${isVisible ? 'active' : ''}`}>
          {solutionsList.map((sol, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-media">
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="solution-img"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to boardroom picture if path differs
                    e.target.src = '/assets/products/solution-boardroom.png';
                  }}
                />
              </div>
              <div className="solution-card-body">
                <div className="solution-card-icon">
                  {sol.icon}
                </div>
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
                <a href="#contact" className="solution-action-link">
                  Learn More 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
