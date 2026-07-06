import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Sectors from './components/Sectors';
import WhyUs from './components/WhyUs';
import Configurator from './components/Configurator';
import Workflow from './components/Workflow';
import CaseStudy from './components/CaseStudy';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import LinkedInFeed from './components/LinkedInFeed';
import Certifications from './components/Certifications';
import CorporateProfile from './components/CorporateProfile';
import CTABanner from './components/CTABanner';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

import './App.css';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-wrapper">
      <Navbar onOpenEnquiry={handleOpenModal} />
      <main>
        <Hero onOpenEnquiry={handleOpenModal} />
        <About onOpenEnquiry={handleOpenModal} />
        <Solutions onOpenEnquiry={handleOpenModal} />
        <Sectors onOpenEnquiry={handleOpenModal} />
        <WhyUs />
        <Configurator onOpenEnquiry={handleOpenModal} />
        <Workflow />
        <CaseStudy onOpenEnquiry={handleOpenModal} />
        <Projects onOpenEnquiry={handleOpenModal} />
        <Partners />
        <Testimonials />
        <Clients />
        <LinkedInFeed />
        <Certifications />
        <CorporateProfile />
        <CTABanner onOpenEnquiry={handleOpenModal} />
        <FinalCTA onOpenEnquiry={handleOpenModal} />
      </main>
      <Footer onOpenEnquiry={handleOpenModal} />
      
      {/* Enquiry Modal Popup */}
      <EnquiryModal isOpen={isModalOpen} onClose={handleCloseModal} />
      
      {/* Scroll to Top Button */}
      <button 
        id="scrollTopBtn" 
        className={showScrollTop ? 'visible' : ''} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          color: '#FFFFFF',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  );
}
