import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Partners from './components/Partners';
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

      {/* Main content segments */}
      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        <Industries />
        <Solutions />
        <Process />
        <Stats />
        <Testimonials />
        <Clients />
        <Partners />
        <CTABanner onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer and contact details */}
      <Footer onOpenQuote={handleOpenQuote} />

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

      {/* Quote modal form */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}
