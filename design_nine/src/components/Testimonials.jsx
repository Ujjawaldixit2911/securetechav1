import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    stars: 5,
    quote: "SecureTech AV upgraded our executive video conferencing hub in Noida. Their acoustic dampening and digital microphone arrays have completely resolved echoes during remote calls. Flawless execution.",
    author: "Manoj Singh",
    role: "Director of Infrastructure",
    company: "State Judicial Department"
  },
  {
    stars: 5,
    quote: "Our Smart Classroom setup makes it incredibly straightforward for professors to coordinate hybrid lectures. The dual laser projection systems remain bright even under direct daylight. A turnkey partner.",
    author: "Dr. Rajesh Dwivedi",
    role: "Head of Digital Education",
    company: "Premium Technical Institute"
  },
  {
    stars: 5,
    quote: "SecureTech AV integrated 12 high-priority videoconferencing suites and our central network operations room. Their cabling, rack structuring, and documentation standards are top-tier.",
    author: "Amit Saxena",
    role: "Chief Technology Officer",
    company: "Global Financial Services"
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
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section section-light-alt" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>Trusted by Industry Leaders</h2>
          <p>Read what our clients say about our professional engineering standards and preventative maintenance support.</p>
        </div>

        <div className="testimonials-slider reveal">
          <div 
            className="testimonial-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((test, idx) => (
              <div className="testimonial-slide" key={idx}>
                <div className="stars">
                  {[...Array(test.stars)].map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                </div>
                <q>{test.quote}</q>
                <div className="testimonial-author">{test.author}</div>
                <div className="testimonial-company">{test.role} &middot; {test.company}</div>
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
