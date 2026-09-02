import React from 'react';
import './Logo.css';

export default function Logo({ className = '' }) {
  return (
    <div className={`nex-brand-logo ${className}`}>
      <span className="nx-box">NX</span>
      <span className="nx-text">NEX <span className="nx-accent">AV</span></span>
    </div>
  );
}
