import React from 'react';

export default function WhoWeAre({ onOpenEnquiry }) {
  return (
    <section className="section section-light" id="about">
      <div className="container">
        <div className="who-we-are-grid">
          
          <div className="who-content reveal active">
            <span className="section-header" style={{ textAlign: 'left', display: 'block', margin: '0 0 20px 0' }}>
              <span className="tagline">Who We Are</span>
              <h2 style={{ marginTop: '10px' }}>Pioneering the Future of Corporate & Academic Communication</h2>
            </span>
            <h3>
              SecureTech AV Designs is India's leading AV system integrator delivering end-to-end audio-visual solutions — trusted by 150+ clients.
            </h3>
            <p>
              We design, build, integrate, and support custom collaboration environments. From high-priority boardrooms and smart university classrooms to high-volume stadiums and auditoriums, we connect people with technology to cultivate exceptional workspace experiences.
            </p>
            
            <div className="stat-row">
              <div className="stat-item">
                <h4>150+</h4>
                <p>Enterprise Clients</p>
              </div>
              <div className="stat-item">
                <h4>500+</h4>
                <p>Completed Deployments</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Years of Engineering Excellence</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Pan-India Support Coverage</p>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              onClick={onOpenEnquiry}
              style={{ marginTop: '40px' }}
            >
              Partner With Us
            </button>
          </div>

          <div className="collage-container reveal active">
            <img 
              src="/images/solution-boardroom.png" 
              alt="Premium Corporate Boardroom AV Design" 
              className="collage-img collage-img-1" 
            />
            <img 
              src="/images/solution-smart-classroom.jpeg" 
              alt="Interactive University Smart Classroom Setup" 
              className="collage-img collage-img-2" 
            />
            <img 
              src="/images/solution-auditorium.png" 
              alt="High-Fidelity Auditorium Acoustics and Screen" 
              className="collage-img collage-img-3" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
