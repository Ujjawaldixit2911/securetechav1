import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ClientLogos from './components/ClientLogos';
import Industries from './components/Industries';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Approach from './components/Approach';
import TechPartners from './components/TechPartners';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll reveal setup
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
    return () => {
      revealEls.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-wrapper">
      {/* Sticky header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main sections */}
      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        <StatsBar />
        <ClientLogos />
        <Industries />
        <Solutions />
        <Projects />
        <Approach />
        <TechPartners />
        <Testimonials />
        <CTABanner onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer info */}
      <Footer />

      {/* Floating scroll to top button */}
      {showScrollTop && (
        <button 
          id="scrollTopBtn" 
          onClick={scrollToTop} 
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}

      {/* Quote popup form */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}
