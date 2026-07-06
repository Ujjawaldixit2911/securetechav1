import React, { useState, useEffect, useRef } from 'react';

const stages = [
  { num: 'Stage 01', name: 'Consultation', desc: 'Our engineers discuss your workspace needs, aesthetic preferences, and budget coordinates to draw structural requirements.' },
  { num: 'Stage 02', name: 'Site Survey', desc: 'We conduct laser acoustic scanning, light level checks, and network connectivity tests at your actual premises.' },
  { num: 'Stage 03', name: 'Acoustic & AV Design', desc: 'We build CAD diagrams, acoustic behavior simulations, and comprehensive signal flow drawings.' },
  { num: 'Stage 04', name: 'System Engineering', desc: 'Equipment sheets are calculated, cables are labeled, and custom rack layout diagrams are built.' },
  { num: 'Stage 05', name: 'Installation', desc: 'Our certified system integration specialists mount screens, run wires, and assemble equipment racks securely.' },
  { num: 'Stage 06', name: 'System Testing', desc: 'We test absolute acoustic decibels, video color calibrations, and run continuous stresses on control servers.' },
  { num: 'Stage 07', name: 'Training', desc: 'We hand over detailed manuals and train your facility coordinators to control the systems easily.' },
  { num: 'Stage 08', name: 'Post-Project Support', desc: 'We offer automated software revisions, certified system repairs, and annual support plans (AMC).' }
];

export default function Workflow() {
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeIndices, setActiveIndices] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startOffset = windowHeight * 0.7; // trigger line when timeline is 70% down viewport
      const relativeScroll = -containerRect.top + startOffset;
      const totalHeight = containerRect.height - 100;
      
      const pct = Math.max(0, Math.min((relativeScroll / totalHeight) * 100, 100));
      setProgressHeight(pct);
      
      // Calculate which dots should be highlighted active
      const items = containerRef.current.querySelectorAll('.timeline-item');
      let actives = [];
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top + 50 < windowHeight * 0.7) {
          actives.push(index);
        }
      });
      setActiveIndices(actives);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section" id="workflow">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Project Timeline</div>
          <h2>Our Seamless Integration Process</h2>
          <p>We execute projects following a rigorous, certified 8-stage lifecycle to deliver flawless, premium integration on-time and within budget constraints.</p>
        </div>
        
        <div className="timeline-container" ref={containerRef}>
          <div className="timeline-line">
            <div 
              className="timeline-line-progress" 
              style={{ height: `${progressHeight}%` }}
            ></div>
          </div>
          
          {stages.map((stage, index) => (
            <div 
              className={`timeline-item ${activeIndices.includes(index) ? 'active' : ''} ${index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right'} animated`}
              key={index}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-step-num">{stage.num}</div>
                <h4>{stage.name}</h4>
                <p>{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
