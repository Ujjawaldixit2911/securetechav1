import React from 'react';

const stats = [
  { num: '5600+', label: 'Projects Delivered' },
  { num: '105+', label: 'Skilled Professionals' },
  { num: '25', label: 'Years of Experience' },
  { num: '50+', label: 'Global OEM Collaborations' }
];

export default function Stats() {
  return (
    <section className="section section-dark" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="container">
        <div className="stats-bar reveal">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
