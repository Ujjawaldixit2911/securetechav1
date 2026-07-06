import React from 'react';
import './Logo.css';

export default function Logo({ className = '' }) {
  return (
    <div className={`logo-container ${className}`}>
      <img 
        src="/assets/logos/logo-main.png" 
        alt="SecureTechAV Logo" 
        className="logo-img"
        onError={(e) => {
          e.target.style.display = 'none';
          const fallbackEl = e.target.nextSibling;
          if (fallbackEl) fallbackEl.style.display = 'flex';
        }}
      />
      <div className="logo-fallback" style={{ display: 'none' }}>
        <svg className="logo-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 11 12 14 22 4"/>
        </svg>
        <span className="logo-text">SecureTech<span className="accent-span">AV</span></span>
      </div>
    </div>
  );
}
