import React from 'react';

export default function LinkedInFeed() {
  return (
    <section className="section" id="linkedin-feed">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Corporate Activity</div>
          <h2>Connect on LinkedIn</h2>
          <p>Follow our official LinkedIn page for regular insights, new site integrations, and corporate updates from SecureTech AV Designs.</p>
        </div>
        
        <div className="grid linkedin-grid">
          {/* Post Card 1 */}
          <div className="linkedin-card animate-fade-up animated">
            <div className="li-header">
              <div className="li-profile">
                <div className="li-avatar">
                  <img src="/just_logo_no_text.png" alt="SecureTech Logo" />
                </div>
                <div className="li-meta">
                  <h5>SecureTech AV Designs <i className="fa-solid fa-circle-check" style={{ color: '#0F4C81', fontSize: '0.8rem' }}></i></h5>
                  <p>1,036 followers · 2d ago</p>
                </div>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="li-follow">+ Follow</a>
            </div>
            <div className="li-body">
              We are thrilled to complete the high-performance auditorium audio setup at the premium research institute campus. Integrated British Acoustics speaker lines and Sennheiser wireless hubs! #AVIntegrations #Acoustics #India
            </div>
            <div className="li-image">
              <img src="/images/Auditorium2.png" alt="Auditorium Project Showcase" />
            </div>
            <div className="li-actions">
              <div className="li-action-btn"><i className="fa-regular fa-thumbs-up"></i> Like</div>
              <div className="li-action-btn"><i className="fa-regular fa-comment"></i> Comment</div>
              <div className="li-action-btn"><i className="fa-regular fa-share-from-square"></i> Share</div>
            </div>
          </div>
          
          {/* Post Card 2 */}
          <div className="linkedin-card animate-fade-up animated" style={{ animationDelay: '0.15s' }}>
            <div className="li-header">
              <div className="li-profile">
                <div className="li-avatar">
                  <img src="/just_logo_no_text.png" alt="SecureTech Logo" />
                </div>
                <div className="li-meta">
                  <h5>SecureTech AV Designs <i className="fa-solid fa-circle-check" style={{ color: '#0F4C81', fontSize: '0.8rem' }}></i></h5>
                  <p>1,036 followers · 1w ago</p>
                </div>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="li-follow">+ Follow</a>
            </div>
            <div className="li-body">
              How is your office adapting to hybrid work challenges? Custom boardrooms with Crestron smart interfaces allow employees to jump into video calls with a single tap. Contact us for custom configurations!
            </div>
            <div className="li-image">
              <img src="/images/solution-boardroom.png" alt="Boardroom Integration Showcase" />
            </div>
            <div className="li-actions">
              <div className="li-action-btn"><i className="fa-regular fa-thumbs-up"></i> Like</div>
              <div className="li-action-btn"><i className="fa-regular fa-comment"></i> Comment</div>
              <div className="li-action-btn"><i className="fa-regular fa-share-from-square"></i> Share</div>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i className="fa-brands fa-linkedin"></i> Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
