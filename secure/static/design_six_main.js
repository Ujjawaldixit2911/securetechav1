/* 
 * NEX AV Designs — JavaScript
 * Design Six — Interactive & Animation Features
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ── STICKY NAVBAR & MOB MENU ──
    const navbar = document.querySelector('.navbar-header');
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('navMenu');

    // Scroll listener for sticky header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // Menu toggle listener
    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
        });
        
        // Close menu on nav link clicks
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }

    // ── SCROLL TO TOP ──
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, { passive: true });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── COUNTER ANIMATIONS ──
    const statsSection = document.querySelector('.stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    const startCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const suffix = stat.getAttribute('data-suffix') || '';
            const duration = 2000; // 2 seconds
            const startTime = performance.now();
            
            const updateCount = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                
                // Ease out cubic
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.floor(easeProgress * target);
                
                stat.textContent = currentCount + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target + suffix;
                }
            };
            
            requestAnimationFrame(updateCount);
        });
    };

    // ── REVEAL ON SCROLL INTERSECTION OBSERVER ──
    const reveals = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                    
                    // Trigger counters specifically when stats block is entered
                    if (entry.target.classList.contains('stats') && !countersStarted) {
                        countersStarted = true;
                        startCounters();
                    }
                }
            });
        }, observerOptions);

        reveals.forEach(reveal => {
            observer.observe(reveal);
        });
        
        // Backup watch on stats if not inside general reveals
        if (statsSection) {
            observer.observe(statsSection);
        }
    } else {
        // Fallback for older browsers
        reveals.forEach(reveal => reveal.classList.add('active'));
        startCounters();
    }

    // ── ROOM CONFIGURATOR MOCKUP CONTROLLER ──
    const stepBtns = document.querySelectorAll('.configurator-step-btn');
    const visualLayers = document.querySelectorAll('.visual-layer');
    
    stepBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Deactivate all steps & layers
            stepBtns.forEach(b => b.classList.remove('active'));
            visualLayers.forEach(l => l.classList.remove('active'));
            
            // Activate current
            btn.classList.add('active');
            
            // Show layers incrementally up to the clicked step index
            for (let i = 0; i <= index; i++) {
                const layer = document.getElementById(`layer-${i + 1}`);
                if (layer) layer.classList.add('active');
            }
        });
    });

    // ── TESTIMONIALS SLIDER ──
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dotsContainer = document.getElementById('testimonialsDots');
    
    if (testimonialsTrack) {
        const slides = testimonialsTrack.querySelectorAll('.testimonial-slide');
        const totalSlides = slides.length;
        let currentIndex = 0;
        
        // Create indicator dots dynamically
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `tdot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
        
        const dots = dotsContainer.querySelectorAll('.tdot');
        
        const updateDots = () => {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };
        
        const goToSlide = (index) => {
            currentIndex = (index + totalSlides) % totalSlides;
            testimonialsTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        };
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
            });
            
            nextBtn.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
            });
        }
        
        // Touch navigation support
        let startX = 0;
        let isSwiping = false;
        
        testimonialsTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isSwiping = true;
        }, { passive: true });
        
        testimonialsTrack.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            const diffX = startX - e.touches[0].clientX;
            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(currentIndex - 1);
                }
                isSwiping = false;
            }
        }, { passive: true });
        
        testimonialsTrack.addEventListener('touchend', () => {
            isSwiping = false;
        });

        // Auto slide change
        setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 8000);
    }
});
