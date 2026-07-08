import React from 'react';

const newsItems = [
  {
    image: '/images/conference.jpg',
    date: 'Jun 28, 2026',
    category: 'Industry Insights',
    title: 'Designing Next-Gen Hybrid Boardrooms for Modern Workspaces',
    desc: 'Explore the key architectural acoustics, microphone pick-up beams, and automated scaling parameters needed to achieve meeting equity in corporate workspaces.',
    link: '#news'
  },
  {
    image: '/images/solution-smart-classroom.jpeg',
    date: 'May 14, 2026',
    category: 'Case Studies',
    title: 'Transforming Academic Interactions at Leading Indian Institutes',
    desc: 'How touch-interactive projection setups and digital ceiling microphone arrays are establishing flawless hybrid classrooms at India\'s premier academic facilities.',
    link: '#news'
  },
  {
    image: '/images/auditorium_view.jpg',
    date: 'Apr 03, 2026',
    category: 'Acoustic Engineering',
    title: 'The Mathematics of Optimizing Room Acoustics in Large Auditoriums',
    desc: 'Analyzing reverberation time (RT60), flutter echoes, and absorption coefficients to guarantee absolute speech intelligibility across commercial presentation halls.',
    link: '#news'
  }
];

export default function News() {
  return (
    <section className="section section-light" id="news">
      <div className="container">
        <div className="section-header reveal active">
          <span className="tagline">News & Insights</span>
          <h2>Stay Updated With AV Innovations</h2>
          <p>Read our latest engineering posts, project writeups, and technical analysis on audio-visual systems integration.</p>
        </div>

        <div className="news-grid">
          {newsItems.map((item, idx) => (
            <div className="news-card reveal active" key={idx}>
              <div className="news-image">
                <img src={item.image} alt={item.title} loading="eager" />
                <span className="news-date">{item.date}</span>
              </div>
              <div className="news-content">
                <span className="news-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.link} className="news-link">
                  Read Article <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
