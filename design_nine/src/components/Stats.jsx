import React from 'react';

const stats = [
  { num: '12+', label: 'Years in AV Integration' },
  { num: '800+', label: 'Projects Delivered' },
  { num: '150+', label: 'Corporate Clients' },
  { num: '24×7', label: 'Support Availability' }
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
