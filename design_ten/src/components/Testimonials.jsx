import React, { useState, useEffect } from 'react';

const testimonialsList = [
  {
    quote: "SecureTech AV transformed our boardroom into a world-class conferencing space. Professional, prompt, and precise.",
    author: "Facilities Head",
    org: "Corporate Client"
  },
  {
    quote: "Our smart classrooms have completely changed how students engage with lessons.",
    author: "Principal",
    org: "Educational Institution"
  },
  {
    quote: "From design to installation, the team understood exactly what our auditorium needed.",
    author: "Event Director",
    org: "Major Conventions Center"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section section-light" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Client Feedback</span>
          <h2>What Our Clients Say</h2>
          <div className="rating-badge">
            <span style={{ fontSize: '1.25rem' }}>4.9★</span>
            <span>Rated on Google (51+ Reviews)</span>
          </div>
        </div>

        <div className="testimonials-wrapper reveal">
          <div 
            className="testimonials-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsList.map((t, idx) => (
              <div className="testimonial-slide" key={idx}>
                <p>"{t.quote}"</p>
                <div className="testimonial-meta">
                  {t.author}
                  <span>{t.org}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-btn" onClick={handlePrev} aria-label="Previous testimonial">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="slider-btn" onClick={handleNext} aria-label="Next testimonial">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
