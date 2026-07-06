import React, { useState } from 'react';

const projectsList = [
  {
    title: 'Tata HQ Boardroom',
    category: 'corporate',
    location: 'Mumbai',
    img: '/images/solution-boardroom.png'
  },
  {
    title: 'National Science Center',
    category: 'auditorium',
    location: 'Delhi',
    img: '/images/Auditorium2.png'
  },
  {
    title: 'IIT Smart Lecture Theatre',
    category: 'education',
    location: 'Delhi',
    img: '/images/solution-smart-classroom.jpeg'
  },
  {
    title: 'District Courtroom Integration',
    category: 'government',
    location: 'Noida',
    img: '/images/judiciary.png'
  },
  {
    title: 'AIIMS Virtual Training Theatre',
    category: 'healthcare',
    location: 'Rae Bareli',
    img: '/images/sector-healthcare.jpg'
  },
  {
    title: 'Regional Cricket Stadium Sound',
    category: 'auditorium',
    location: 'Lucknow',
    img: '/images/solution-stadium.png'
  }
];

export default function Projects({ onOpenEnquiry }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : projectsList.filter(proj => proj.category === filter);

  return (
    <section className="section section-alt" id="projects-showcase">
      <div className="container">
        <div className="section-header animate-fade-up animated">
          <div className="tagline">Our Portfolio</div>
          <h2>Masterpieces of Audio-Visual Craft</h2>
          <p>Filter through our recent national projects to review our craftsmanship across corporate, education, auditoriums, and judiciary complexes.</p>
        </div>
        
        {/* Category Filters */}
        <div className="projects-filter animate-fade-up animated">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
          <button className={`filter-btn ${filter === 'corporate' ? 'active' : ''}`} onClick={() => setFilter('corporate')}>Corporate</button>
          <button className={`filter-btn ${filter === 'education' ? 'active' : ''}`} onClick={() => setFilter('education')}>Education</button>
          <button className={`filter-btn ${filter === 'auditorium' ? 'active' : ''}`} onClick={() => setFilter('auditorium')}>Auditorium / Stadium</button>
          <button className={`filter-btn ${filter === 'government' ? 'active' : ''}`} onClick={() => setFilter('government')}>Government</button>
          <button className={`filter-btn ${filter === 'healthcare' ? 'active' : ''}`} onClick={() => setFilter('healthcare')}>Healthcare</button>
        </div>
        
        {/* Masonry Layout */}
        <div className="projects-masonry" id="projectsMasonry" style={{ minHeight: '400px' }}>
          {filteredProjects.map((proj, index) => (
            <div className="project-item" key={index}>
              <img src={proj.img} alt={proj.title} />
              <div className="project-overlay">
                <h4>{proj.title}</h4>
                <p>{proj.category.toUpperCase()} · {proj.location}</p>
                <button className="btn btn-text" onClick={onOpenEnquiry}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
