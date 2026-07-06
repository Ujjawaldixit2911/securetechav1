import React from 'react';

export default function Hero({ onOpenEnquiry }) {
  return (
    <header className="hero" id="home">
      <div className="container">
        <div className="grid hero-grid">
          <div className="hero-content animate-fade-left animated">
            <div className="tagline">We Are SecureTech AV — Premium Audio Visual Integrators</div>
            <h1>Transforming Spaces Through Intelligent AV Solutions</h1>
            <p className="hero-description">
              SecureTech AV Designs delivers end-to-end audio visual solutions — architectural acoustics, boardroom AV, auditorium sound systems, smart classrooms, lighting design, and IT infrastructure — for corporate, education, healthcare, government, and residential sectors across India.
            </p>
            <div className="hero-actions">
              <a href="#sectors" className="btn btn-primary">Our Sectors</a>
              <button className="btn btn-outline" onClick={onOpenEnquiry}>Enquire Now</button>
              <a href="#profile" className="btn btn-accent">View Corporate Profile</a>
            </div>
          </div>
          
          <div className="hero-visual animate-fade-right animated">
            {/* Floating Status Cards */}
            <div className="floating-card fc-1">
              <i className="fa-solid fa-people-group"></i>
              <div>
                <h4 style={{ fontSize: '0.85rem', marginBottom: '2px' }}>Meeting Room</h4>
                <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>Smart Collaborations</p>
              </div>
            </div>
            
            <div className="floating-card fc-2">
              <i className="fa-solid fa-video"></i>
              <div>
                <h4 style={{ fontSize: '0.85rem', marginBottom: '2px' }}>Video Conference</h4>
                <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>Hybrid HD Setup</p>
              </div>
            </div>
            
            <div className="floating-card fc-3">
              <i className="fa-solid fa-desktop"></i>
              <div>
                <h4 style={{ fontSize: '0.85rem', marginBottom: '2px' }}>Digital Signage</h4>
                <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>Centralized Display</p>
              </div>
            </div>
            
            <div className="floating-card fc-4">
              <i className="fa-solid fa-sliders"></i>
              <div>
                <h4 style={{ fontSize: '0.85rem', marginBottom: '2px' }}>Audio DSP</h4>
                <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>Acoustic Clearness</p>
              </div>
            </div>
            
            <div className="hero-image-wrapper">
              <img src="/images/conference.jpg" alt="Premium Boardroom Setup" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
