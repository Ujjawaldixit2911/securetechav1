import React, { useState } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "The boardroom AV integration has completely changed how our executive board interacts. Crestron control setups work instantly with zero configuration bottlenecks.",
      author: "Rajesh Kumar",
      designation: "VP of Operations, IndusTech Ltd",
      initials: "RK"
    },
    {
      stars: 5,
      quote: "NEXAV engineered our medical auditorium sound grids and dual projection screens at AIIMS. The audio clarity and system reliability has been absolute.",
      author: "Dr. Sandeep Sharma",
      designation: "Head of Infrastructure, AIIMS",
      initials: "SS"
    },
    {
      stars: 5,
      quote: "Their CTS-certified team executed structured patch arrays and hybrid conferencing nodes across our 4 corporate floors in Delhi. Fast, responsive SLA support.",
      author: "Neha Singhal",
      designation: "IT Lead, Vanguard Securities",
      initials: "NS"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-grid-layout">
          {/* Left Column: Google Ratings Badge */}
          <div className="testimonials-badge-wrap">
            <div className="google-badge-card">
              <div className="google-logo-box">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <span className="google-brand">Google Reviews</span>
              </div>
              
              <div className="google-rating-score">
                <span className="rating-num">4.9</span>
                <div className="rating-stars-badge">★★★★★</div>
              </div>
              
              <p className="google-meta-text">Based on 145+ verified client ratings and project reviews.</p>
              
              <a href="#contact" className="google-link-btn">
                Write a Review
                <svg className="badge-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Carousel Review Cards */}
          <div className="testimonials-carousel-wrap">
            <span className="section-eyebrow">Client Feedback</span>
            <h2 className="section-title-left">What Our Clients Say</h2>

            <div className="carousel-view-box">
              <div className="carousel-card">
                <div className="carousel-stars-row">
                  {Array.from({ length: reviews[activeIndex].stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                
                <blockquote className="carousel-quote">
                  "{reviews[activeIndex].quote}"
                </blockquote>

                <div className="carousel-author-row">
                  <div className="carousel-avatar">{reviews[activeIndex].initials}</div>
                  <div className="carousel-author-info">
                    <h5 className="carousel-author-name">{reviews[activeIndex].author}</h5>
                    <p className="carousel-author-designation">{reviews[activeIndex].designation}</p>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="carousel-controls">
                <button className="carousel-btn btn-prev" onClick={handlePrev} aria-label="Previous Review">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <span className="carousel-indicator">
                  {activeIndex + 1} / {reviews.length}
                </span>
                <button className="carousel-btn btn-next" onClick={handleNext} aria-label="Next Review">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
