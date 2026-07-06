import React, { useState, useRef } from 'react';

const solutionsList = [
  {
    title: 'Smart Integration',
    img: '/images/solution-boardroom.png',
    desc: 'Unify scheduling displays, environment sensors, and audio visual units into a single central control plane.'
  },
  {
    title: 'AV Controls',
    img: '/images/solution-av-control.png',
    desc: 'Custom touch panels and keypad interfaces designed for simple, error-free meeting room control.'
  },
  {
    title: 'ICT Infrastructure',
    img: '/images/solution-ict-infrastructure.png',
    desc: 'Structured high-speed copper/fiber networks, device server racks, and enterprise security distributions.'
  },
  {
    title: 'Stadiums & Arena',
    img: '/images/solution-stadium.png',
    desc: 'Enormous perimeter audio setups, public broadcasts systems, and weather-proof display installations.'
  },
  {
    title: 'Club & Sound Systems',
    img: '/images/solution-club-sound.png',
    desc: 'Acoustic mapping, heavy-bass subwoofers, DJ monitors, and ambient dance floor sound distribution.'
  },
  {
    title: 'Cinema Halls',
    img: '/images/solution-cinema.png',
    desc: 'Commercial theater screens, Dolby Atmos configurations, and custom soundproofing insulation.'
  },
  {
    title: 'Auditorium Solutions',
    img: '/images/solution-auditorium.png',
    desc: 'Large-venue lighting consoles, long-throw digital projection, and wireless microphone hubs.'
  }
];

export default function Solutions({ onOpenEnquiry }) {
  const [scrollAmount, setScrollAmount] = useState(0);
  const sliderRef = useRef(null);
  
  const cardWidth = 350;
  const gap = 32;

  const handleNext = () => {
    if (!sliderRef.current) return;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (scrollAmount < maxScroll) {
      const nextScroll = Math.min(scrollAmount + (cardWidth + gap), maxScroll);
      setScrollAmount(nextScroll);
    } else {
      setScrollAmount(0); // reset
    }
  };

  const handlePrev = () => {
    if (scrollAmount > 0) {
      const prevScroll = Math.max(scrollAmount - (cardWidth + gap), 0);
      setScrollAmount(prevScroll);
    }
  };

  return (
    <section className="section section-alt" id="solutions">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Our Solutions</div>
          <h2>Innovative Technologies For Smart Spaces</h2>
          <p>From initial acoustic modeling to post-deployment lifecycle support, we deliver certified end-to-end integration matching the world's highest standards.</p>
        </div>
        
        <div className="solutions-slider-wrapper">
          <div 
            className="solutions-slider" 
            ref={sliderRef}
            style={{ transform: `translateX(-${scrollAmount}px)`, transition: 'transform 0.5s ease' }}
          >
            {solutionsList.map((sol, index) => (
              <div className="solution-card" key={index}>
                <div className="solution-card-img">
                  <img src={sol.img} alt={sol.title} />
                </div>
                <div className="solution-card-body">
                  <h4>{sol.title}</h4>
                  <p>{sol.desc}</p>
                  <button className="btn btn-text" onClick={onOpenEnquiry}>Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="solutions-nav">
          <button className="solutions-nav-btn" onClick={handlePrev} aria-label="Previous Solutions">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="solutions-nav-btn" onClick={handleNext} aria-label="Next Solutions">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
