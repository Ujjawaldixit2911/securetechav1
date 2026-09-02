import React, { useState } from 'react';
import './Configurator.css';

export default function Configurator() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: 'Step 01',
      title: 'Empty Room',
      desc: 'An acoustically bare conference room shell prepared for cabled layouts.',
      layerClass: 'c-empty'
    },
    {
      label: 'Step 02',
      title: 'Display Installation',
      desc: 'Dual HD commercial active matrix display mounts added along the main wall.',
      layerClass: 'c-display'
    },
    {
      label: 'Step 03',
      title: 'Audio Setup',
      desc: 'High-fidelity ceiling sound transducers and routed conference table microphones.',
      layerClass: 'c-audio'
    },
    {
      label: 'Step 04',
      title: 'Smart Controls',
      desc: 'Centralized touch pad consoles, camera trackers, and smart light controller links.',
      layerClass: 'c-controls'
    },
    {
      label: 'Step 05',
      title: 'Finished Meeting Room',
      desc: 'A fully operational, unified enterprise collaborative board space.',
      layerClass: 'c-finished'
    }
  ];

  return (
    <section className="configurator-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Preview</span>
          <h2 className="section-title">Interactive Room Configurator</h2>
          <p className="section-desc">See how our technicians engineer empty room shells into smart corporate meeting hubs step-by-step.</p>
        </div>

        <div className="configurator-layout">
          {/* Steps list panel */}
          <div className="configurator-steps">
            {steps.map((step, idx) => (
              <button 
                key={idx} 
                className={`configurator-step-btn ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
                aria-label={`Preview ${step.title}`}
              >
                <span className="step-num">{step.label}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
              </button>
            ))}
          </div>

          {/* Visualization canvas */}
          <div className="configurator-visual">
            <div className="visual-canvas">
              {/* Step 1: Base Empty Room (always visible, overlayed by others) */}
              <div 
                className={`visual-layer base-layer ${activeStep >= 0 ? 'active' : ''}`}
                style={{ backgroundImage: "url('./images/solution-boardroom.png')", filter: activeStep === 0 ? "saturate(0.2) contrast(0.85)" : "none" }}
              />
              
              {/* Step 2: Displays Overlay */}
              <div className={`visual-layer ${activeStep >= 1 ? 'active' : ''}`}>
                <svg className="av-svg-overlay" viewBox="0 0 600 340">
                  <rect x="220" y="100" width="160" height="90" rx="4" fill="none" stroke="#00A3E0" strokeWidth="3" strokeDasharray="5 3" />
                  <text x="300" y="145" fill="#00A3E0" fontFamily="Montserrat" fontSize="11" fontWeight="700" textAnchor="middle">ACTIVE MATRIX DISPLAY</text>
                </svg>
              </div>

              {/* Step 3: Speakers Overlay */}
              <div className={`visual-layer ${activeStep >= 2 ? 'active' : ''}`}>
                <svg className="av-svg-overlay" viewBox="0 0 600 340">
                  <circle cx="150" cy="50" r="16" fill="none" stroke="#0F4C81" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="150" y1="50" x2="150" y2="70" stroke="#0F4C81" strokeWidth="1.5" />
                  <circle cx="450" cy="50" r="16" fill="none" stroke="#0F4C81" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="450" y1="50" x2="450" y2="70" stroke="#0F4C81" strokeWidth="1.5" />
                  <text x="150" y="85" fill="#0F4C81" fontFamily="Montserrat" fontSize="10" fontWeight="700" textAnchor="middle">CEILING SPEAKER</text>
                  <text x="450" y="85" fill="#0F4C81" fontFamily="Montserrat" fontSize="10" fontWeight="700" textAnchor="middle">CEILING SPEAKER</text>
                </svg>
              </div>

              {/* Step 4: Touch Pad Overlay */}
              <div className={`visual-layer ${activeStep >= 3 ? 'active' : ''}`}>
                <svg className="av-svg-overlay" viewBox="0 0 600 340">
                  <polygon points="270,255 330,255 340,285 260,285" fill="rgba(0, 163, 224, 0.15)" stroke="#00A3E0" strokeWidth="2" />
                  <circle cx="300" cy="270" r="4" fill="#00A3E0" />
                  <text x="300" y="305" fill="#00A3E0" fontFamily="Montserrat" fontSize="10" fontWeight="700" textAnchor="middle">SMART CONTROLLER TABLET</text>
                </svg>
              </div>

              {/* Step 5: Completed Full Saturation View */}
              <div 
                className={`visual-layer ${activeStep === 4 ? 'active' : ''}`}
                style={{ backgroundImage: "url('./images/solution-boardroom.png')" }}
              />
            </div>

            <div className="visual-legend">
              {steps.map((step, idx) => (
                <div key={idx} className="legend-item">
                  <span className={`legend-dot ${step.layerClass}`} />
                  {step.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
