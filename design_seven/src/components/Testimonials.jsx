import React, { useState, useEffect } from 'react';

const reviews = [
  {
    author: 'Manoj Singh',
    role: 'Director of Infrastructure, Judicial Department',
    avatar: 'MS',
    quote: 'The courtroom sound upgrade executed by SecureTech AV at the judiciary complex has completely resolved microphones feedback and echo problems. The DSP presets are flawless.'
  },
  {
    author: 'Dr. Rajesh Dwivedi',
    role: 'Head of Digital Education, Premium University',
    avatar: 'RD',
    quote: 'Our smart classrooms setup is incredibly easy for professors to navigate. The digital laser projectors remain bright under direct daylight. Turnkey execution at its best.'
  },
  {
    author: 'Amit Saxena',
    role: 'Chief Technology Officer, Global FinTech Group',
    avatar: 'AS',
    quote: 'SecureTech AV integrated 12 videoconferencing rooms and our primary control hub in record time. Professional support, clean rack cabling, and highly reliable engineers.'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <div className="grid testimonials-grid">
          
          <div className="rating-badge-card animate-fade-left animated">
            <h3>Google Rating</h3>
            <div className="rating-score">4.9</div>
            <div className="rating-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>Based on 51 Verified Customer Reviews on Google</p>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>View All on Google</a>
          </div>
          
          <div className="reviews-carousel-wrapper animate-fade-right animated">
            <div className="reviews-track" style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
              {reviews.map((rev, i) => (
                <div className="review-slide" key={i}>
                  <div className="review-card">
                    <p className="review-quote">{rev.quote}</p>
                    <div className="review-author">
                      <div className="author-avatar">{rev.avatar}</div>
                      <div className="author-info">
                        <h5>{rev.author}</h5>
                        <p>{rev.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carousel-dots">
              {reviews.map((_, i) => (
                <button 
                  key={i}
                  className={`carousel-dot ${i === activeIndex ? 'active' : ''}`} 
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
