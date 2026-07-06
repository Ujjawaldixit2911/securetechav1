import React from 'react';

export default function CTABanner({ onOpenEnquiry }) {
  return (
    <section className="section" style={{ padding: '60px 24px' }}>
      <div className="container">
        <div className="hybrid-cta animate-scale animated">
          <div className="container">
            <h2>Changing To A Hybrid Work Culture?</h2>
            <p>Upgrade your standard workspaces. Provide your offices with microphone beams, interactive displays, and intuitive room scheduling boards to keep your workforce united.</p>
            <button className="btn btn-accent" onClick={onOpenEnquiry}>Connect With Our Team</button>
          </div>
        </div>
      </div>
    </section>
  );
}
