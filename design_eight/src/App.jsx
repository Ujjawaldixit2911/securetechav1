import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Workflow from './components/Workflow';
import Sectors from './components/Sectors';
import Solutions from './components/Solutions';
import Partners from './components/Partners';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import News from './components/News';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll-to-top button visibility
    const handleScrollButton = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScrollButton);
    return () => window.removeEventListener('scroll', handleScrollButton);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll-reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animation is triggered, we can stop observing this element
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15, // trigger when 15% of element is visible
      rootMargin: '0px 0px -50px 0px' // offset bottom triggers slightly
    });

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-container">
      {/* Sticky Navbar */}
      <Navbar onOpenEnquiry={handleOpenModal} />
      
      {/* Homepage Content Sections */}
      <main>
        <Hero onOpenEnquiry={handleOpenModal} />
        <WhoWeAre onOpenEnquiry={handleOpenModal} />
        <Workflow />
        <Sectors />
        <Solutions />
        <Partners />
        <Clients />
        <Testimonials />
        <News />
        <FinalCTA onOpenEnquiry={handleOpenModal} />
      </main>

      {/* Corporate Map-driven Footer */}
      <Footer onOpenEnquiry={handleOpenModal} />

      {/* Popup Enquiry Form */}
      <EnquiryModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button 
          id="scrollTopBtn" 
          onClick={scrollToTop} 
          aria-label="Scroll to top of page"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
