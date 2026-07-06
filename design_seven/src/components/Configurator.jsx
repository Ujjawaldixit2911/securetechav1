import React, { useState } from 'react';

const stepsData = [
  {
    step: 1,
    title: 'Step 1: Empty Room Structure',
    img: '/images/room.png',
    desc: 'We begin with a thorough analysis of spatial acoustics, structural reflections, and ambient light sources. Soundproof panel routing and back-wall insulation parameters are computed to minimize ambient reverberation.',
    features: ['Acoustic Analysis', 'Structural Isolation', 'Cable Tray Routing', 'Wall Framing Specs']
  },
  {
    step: 2,
    title: 'Step 2: Dual Displays & Laser Projection',
    img: '/images/speakers_with_screen.jpg',
    desc: 'Commercial-grade 4K LED interactive panels and a smart laser projector are configured. They are positioned to guarantee perfect visibility angles from every single seat in the boardroom.',
    features: ['Twin 4K LED Panels', 'Smart Laser Projection', 'Anti-glare Coatings', 'Auto-scaling Inputs']
  },
  {
    step: 3,
    title: 'Step 3: Executive Boardroom Furniture',
    img: '/images/solution-boardroom.png',
    desc: 'A modular executive conference table with custom flip-up connectivity boxes is introduced. Sound-absorbing chairs are arranged, and microphone array channels are precisely aligned with the seating.',
    features: ['Custom Table Integration', 'Integrated Pop-up Ports', 'Hidden Wire Channels', 'Ergonomic Seatings']
  },
  {
    step: 4,
    title: 'Step 4: Smart Audio DSP & Crestron Controls',
    img: '/images/solution-av-control.png',
    desc: 'A smart digital signal processor (DSP) is connected, integrating beamforming microphone arrays and hidden ceiling speakers. A Crestron control panel is placed on the desk to orchestrate room presets.',
    features: ['Beamforming Mic Array', 'Smart Ceiling Audio', 'Crestron Touch Panels', 'One-Touch Meeting Launch']
  },
  {
    step: 5,
    title: 'Step 5: Completed Meeting Room',
    img: '/images/conference.jpg',
    desc: 'The completely integrated premium boardroom is ready. Wireless presenting, smart lighting presets, video conferencing pipelines, and security layers are fully operational.',
    features: ['Wireless Presentation', 'Scenes Lighting Control', 'Full Zoom/Teams Pipeline', '100% Tested & Certified']
  }
];

export default function Configurator({ onOpenEnquiry }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = stepsData.length;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(1); // loop back
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const activeStepData = stepsData[currentStep - 1];

  return (
    <section className="section section-alt" id="configurator">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Interactive Configurator</div>
          <h2>Visualize Your Boardroom Integration</h2>
          <p>Build your premium room setup step-by-step. See how individual technology layers combine to create a modern, unified enterprise meeting room.</p>
        </div>
        
        <div className="configurator-card animate-scale animated">
          {/* Visual Left Panel */}
          <div className="config-visual" style={{ background: '#E2E8F0', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <span className="config-badge" id="configBadge">Step {currentStep} of {totalSteps}</span>
            
            {stepsData.map((s) => (
              <img 
                key={s.step}
                src={s.img} 
                alt={s.title} 
                className={`config-image ${s.step === currentStep ? 'active' : ''}`}
              />
            ))}
          </div>
          
          {/* Details Right Panel */}
          <div className="config-details">
            <div className="config-progress-bar">
              <div 
                className="config-progress-fill" 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            
            <div className="config-steps-container">
              <div className="config-step-content active">
                <h3>{activeStepData.title}</h3>
                <p>{activeStepData.desc}</p>
                <ul className="config-step-features">
                  {activeStepData.features.map((f, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-check"></i> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="config-nav">
              <button 
                className="btn btn-outline" 
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                Previous Step
              </button>
              
              <button 
                className="btn btn-primary" 
                onClick={handleNext}
              >
                {currentStep === totalSteps ? 'Restart Configurator' : `Next Step`}
              </button>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="btn btn-accent" onClick={onOpenEnquiry}>Build Your Room Now</button>
        </div>
      </div>
    </section>
  );
}
