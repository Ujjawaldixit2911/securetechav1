import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    initials: 'MS',
    quote: "The courtroom sound and acoustic treatment executed by SecureTech AV at our judiciary complex has completely resolved microphonic feedback and echo issues. The preset matrices work flawlessly.",
    author: 'Manoj Singh',
    role: 'Director of Infrastructure, State Judicial Department'
  },
  {
    initials: 'RD',
    quote: "Our new smart classroom integration has made it incredibly straightforward for professors to conduct classes. The dual laser projection systems are brilliant even under direct daylight.",
    author: 'Dr. Rajesh Dwivedi',
    role: 'Head of Digital Education, Premium Technical Institute'
  },
  {
    initials: 'AS',
    quote: "SecureTech AV integrated 12 high-priority video conferencing suites and our central network operations room. Their cabling, rack structuring, and documentation standards are impeccable.",
    author: 'Amit Saxena',
    role: 'Chief Technology Officer, Global Financial Services'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section section-light-alt" id="testimonials">
      <div className="container">
        <div className="testimonials-grid">
          
          {/* Left Column: Google Rating Badge */}
          <div className="badge-card reveal active">
            <span className="section-header" style={{ textAlign: 'center', display: 'block', margin: '0 0 15px 0' }}>
              <span className="tagline" style={{ margin: 0 }}>Client Trust</span>
            </span>
            <h3>Google Reviews</h3>
            <div className="rating-num">4.9</div>
            <div className="rating-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>Based on 51 Verified Enterprise and Public Sector Reviews</p>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <i className="fa-brands fa-google" style={{ marginRight: '8px' }}></i> Read All Reviews
            </a>
          </div>

          {/* Right Column: Carousel Quotes */}
          <div className="testimonials-carousel reveal active">
            <div 
              className="testimonial-track" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div className="testimonial-slide" key={index}>
                  <div className="testimonial-card">
                    <p className="testimonial-quote">"{t.quote}"</p>
                    <div className="testimonial-client">
                      <div className="client-initials">{t.initials}</div>
                      <div className="client-info">
                        <h4>{t.author}</h4>
                        <p>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
