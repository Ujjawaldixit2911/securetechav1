import React, { useState, useEffect } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "We recently engaged NEX AV Designs Pvt Ltd for a comprehensive AV integration project across our offices, including conference rooms, boardrooms, townhall spaces, and auditorium. Their technical compliance and execution standards were exceptional.",
      author: "Abhishek Mishra",
      designation: "Project Consultant, Corporate Office Services",
      initials: "AM",
      color: "#0F4C81"
    },
    {
      stars: 5,
      quote: "Excellent service and top-notch expertise! The team seamlessly integrated our professional video conferencing and active lighting setups, delivering high-quality calibration on time.",
      author: "Priya Sharma",
      designation: "Operations Manager, Tech Services Ltd",
      initials: "PS",
      color: "#00A3E0"
    },
    {
      stars: 5,
      quote: "Its indeed the place for all your high-end technological requirements. The integrated command center systems they provided are state-of-the-art and the staff was extremely professional throughout the deployment.",
      author: "Santosh Kumar",
      designation: "Director Infrastructure, Public Sector Projects",
      initials: "SK",
      color: "#20BF6B"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">What Our Partners Say</h2>
          <p className="section-desc">Read honest testimonials directly from business leaders and institutional planners who depend on our AV systems.</p>
        </div>

        <div className="testimonials-slider-container">
          <div className="testimonials-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {reviews.map((rev, idx) => (
              <div className="testimonial-slide" key={idx}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <span key={i} className="star-icon">★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{rev.quote}"</p>
                  <div className="testimonial-profile">
                    <div className="testimonial-avatar" style={{ backgroundColor: rev.color }}>
                      {rev.initials}
                    </div>
                    <div className="testimonial-details">
                      <h4 className="testimonial-author-name">{rev.author}</h4>
                      <p className="testimonial-author-role">{rev.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-nav">
            <button className="nav-arrow" onClick={handlePrev} aria-label="Previous Testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="testimonials-dots">
              {reviews.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`tdot ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
            <button className="nav-arrow" onClick={handleNext} aria-label="Next Testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
