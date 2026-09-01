import React from 'react';

export default function CorporateProfile() {
  return (
    <section className="section section-alt corp-profile" id="profile">
      <div className="container">
        <div className="grid corp-grid">
          <div className="corp-content animate-fade-left animated">
            <div className="tagline">Corporate Profile</div>
            <h2>NEX AV Core Capabilities</h2>
            <p>Download our official corporate brochure to review our detailed product representation lists, project execution schedules, acoustic formulas, and company structural hierarchies.</p>
            
            <div className="corp-actions">
              <a href="/nex_profile.html" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Profile Page</a>
              <a href="/nex_profile.html" download="NEX_AV_Corporate_Profile.html" className="btn btn-outline">
                <i className="fa-solid fa-file-pdf" style={{ color: '#EF4444', marginRight: '6px' }}></i> Download PDF Brochure
              </a>
            </div>
          </div>
          
          <div className="about-img-box animate-fade-right animated">
            <img src="/images/advantage_center_v3.jpeg" alt="NEX AV Designs Corporate Facility" />
          </div>
        </div>
      </div>
    </section>
  );
}
