import React, { useEffect, useRef, useState } from 'react';
import './About.css';

// Reusable Scroll-triggered Counter Component
const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let startTime = null;
          const duration = 1800; // 1.8 seconds

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic progress
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function About() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* ── STATISTICS BAR (Sits over Hero boundary) ── */}
      <div className="stats-wrapper container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedCounter target={400} suffix="+" />
            </div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedCounter target={100} suffix="+" />
            </div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedCounter target={50} suffix="+" />
            </div>
            <div className="stat-label">Technology Partners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedCounter target={10} suffix="+" />
            </div>
            <div className="stat-label">Industry Verticals</div>
          </div>
        </div>
      </div>

      {/* ── CORPORATE INFO ── */}
      <div className={`about-content-wrapper container reveal ${isVisible ? 'active' : ''}`}>
        <div className="about-main-grid">
          <div className="about-left-statement">
            <span className="section-tag">About NEX AV</span>
            <h2 className="about-title">Intelligent Spaces, Integrated Seamlessly</h2>
            <p className="about-description">
              NEX AV Designs is an industry-leading Audio-Visual integration firm. We engineer world-class collaborative, instructional, and public environments that unify audio distribution, digital displays, acoustics, and smart room controller nodes.
            </p>
            <p className="about-subdescription">
              Whether building an executive boardroom, a high-density university lecture hall, or a government briefing facility, our technical compliance and lifecycle support guarantee operational continuity.
            </p>
            <a href="#solutions" className="about-action-btn">
              Explore Our Solutions
              <svg className="action-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <div className="about-right-pillars">
            <div className="pillar-card">
              <div className="pillar-number">01</div>
              <div className="pillar-info">
                <h3>Certified Design Architects</h3>
                <p>Our engineering leads hold CTS-D and CTS-I certifications from AVIXA, guaranteeing absolute design adherence to global integration standards.</p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-number">02</div>
              <div className="pillar-info">
                <h3>Turnkey Project Engineering</h3>
                <p>We manage the complete project cycle: initial acoustic analysis, structured cabling layout designs, programming, commissioning, and final compliance testing.</p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-number">03</div>
              <div className="pillar-info">
                <h3>Enterprise Support SLA</h3>
                <p>Our ongoing Annual Maintenance Contracts (AMC) secure client hardware, delivering proactive system health audits and rapid onsite equipment swap support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
