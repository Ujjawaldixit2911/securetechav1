import React, { useState, useEffect, useRef } from 'react';

function Counter({ target, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    // Extract numerical target value (e.g. 500 from "500", 4.9 from "4.9")
    const isFloat = target.includes('.');
    const end = parseFloat(target);
    if (isNaN(end)) {
      setCount(target);
      return;
    }

    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * (end - start) + start;

      if (isFloat) {
        setCount(currentVal.toFixed(1));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          
          <div className="stat-item">
            <div className="stat-num">
              <Counter target="500" suffix="+" />
            </div>
            <div className="stat-label">Projects Delivered</div>
          </div>

          <div className="stat-item">
            <div className="stat-num">
              <Counter target="12" suffix="+" />
            </div>
            <div className="stat-label">Years of Excellence</div>
          </div>

          <div className="stat-item">
            <div className="stat-num">
              <Counter target="4.9" suffix="★" />
            </div>
            <div className="stat-label">Google Rating (51+ Reviews)</div>
          </div>

          <div className="stat-item">
            <div className="stat-num">
              <Counter target="9" suffix="" />
            </div>
            <div className="stat-label">Sectors Served</div>
          </div>

          <div className="stat-item">
            <div className="stat-num">
              <Counter target="20" suffix="+" />
            </div>
            <div className="stat-label">Cities Across India</div>
          </div>

        </div>
      </div>
    </section>
  );
}
