/**
 * SECURETECH AV DESIGNS — HOMEPAGE INTERACTIVE ENGINE
 * Vanilla JS, ES6 standards, Intersection Observer API
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================
       1. STICKY HEADER & SCROLL PROGRESS
       ========================================== */
    const navbar = document.getElementById('navbar');
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    
    const handleScroll = () => {
        // Sticky Header class toggling
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll Progress Bar calculation
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        scrollProgressBar.style.width = `${scrollPercentage}%`;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    /* ==========================================
       2. MOBILE MENU HAMBURGER NAVIGATION
       ========================================== */
    const navHamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navHamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = navHamburger.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navHamburger.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section, header');
    const navObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(sec => navObserver.observe(sec));

    /* ==========================================
       3. ENQUIRE NOW MODAL & FORM VALIDATIONS
       ========================================== */
    const modalOverlay = document.getElementById('enquiryModal');
    const openBtns = document.querySelectorAll('#openEnquiryBtn, .trigger-modal');
    const closeBtn = document.getElementById('closeModalBtn');
    const enquiryForm = document.getElementById('enquiryForm');
    
    const openModal = () => {
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    };
    
    const closeModal = () => {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = ''; // Restore background scroll
        resetFormErrors();
    };

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside content box
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Reset Form Errors
    const resetFormErrors = () => {
        const errorTexts = enquiryForm.querySelectorAll('.error-text');
        const inputs = enquiryForm.querySelectorAll('.form-input');
        errorTexts.forEach(txt => txt.style.display = 'none');
        inputs.forEach(input => input.classList.remove('error'));
    };

    // Form Validations
    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        resetFormErrors();
        
        let isValid = true;
        
        const name = document.getElementById('form-name');
        const company = document.getElementById('form-company');
        const email = document.getElementById('form-email');
        const phone = document.getElementById('form-phone');
        const sector = document.getElementById('form-sector');
        const requirement = document.getElementById('form-requirement');
        
        // Name validation
        if (!name.value.trim()) {
            name.classList.add('error');
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        }
        
        // Company validation
        if (!company.value.trim()) {
            company.classList.add('error');
            document.getElementById('company-error').style.display = 'block';
            isValid = false;
        }
        
        // Email validation (simple regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('error');
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }
        
        // Phone validation
        const phoneRegex = /^[+]?[0-9\s\-]{7,15}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            phone.classList.add('error');
            document.getElementById('phone-error').style.display = 'block';
            isValid = false;
        }
        
        // Sector validation
        if (!sector.value) {
            sector.classList.add('error');
            document.getElementById('sector-error').style.display = 'block';
            isValid = false;
        }
        
        // Requirement validation
        if (!requirement.value.trim()) {
            requirement.classList.add('error');
            document.getElementById('requirement-error').style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // Premium Submission Success feedback
            const modalBody = modalOverlay.querySelector('.modal-body');
            const originalContent = modalBody.innerHTML;
            
            modalBody.innerHTML = `
                <div style="text-align: center; padding: 40px 20px;">
                    <div style="width: 72px; height: 72px; background: rgba(0, 163, 224, 0.1); color: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px auto; font-size: 2rem;">
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <h3 style="color: var(--primary); margin-bottom: 12px;">Enquiry Submitted Successfully</h3>
                    <p style="color: var(--muted); font-size: 0.95rem; line-height: 1.5; max-width: 400px; margin: 0 auto 30px auto;">Thank you for contacting SecureTech AV Designs. One of our senior AV consultants will review your project requirements and connect with you shortly.</p>
                    <button class="btn btn-primary" id="successCloseBtn" style="width: 200px;">Close Window</button>
                </div>
            `;
            
            document.getElementById('successCloseBtn').addEventListener('click', () => {
                closeModal();
                // Restore form HTML template after closing transition
                setTimeout(() => {
                    modalBody.innerHTML = originalContent;
                    // Reattach event listeners to the newly rendered form elements
                    const newForm = document.getElementById('enquiryForm');
                    newForm.addEventListener('submit', (ev) => {
                        ev.preventDefault();
                        // Recursive submit call would be hooked here
                    });
                }, 400);
            });
        }
    });

    /* ==========================================
       4. SCROLL INTERSECTION ANIMATION OBSERVER
       ========================================== */
    const animElements = document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale');
    
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optional: Stop observing after showing animation once
                animObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px -50px -50px 0px', // slightly offset for better feel
        threshold: 0.15
    });
    
    animElements.forEach(el => animObserver.observe(el));

    /* ==========================================
       5. STATS ANIMATED COUNTERS
       ========================================== */
    const counterElements = document.querySelectorAll('.stat-number, .stat-number-val');
    
    const animateCounter = (element) => {
        const target = parseFloat(element.getAttribute('data-target'));
        const decimals = parseInt(element.getAttribute('data-decimals')) || 0;
        const duration = 1500; // ms
        let startTime = null;
        
        const updateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = progress * target;
            
            element.textContent = currentValue.toFixed(decimals) + (element.getAttribute('data-target').includes('+') || element.classList.contains('stat-number') && !element.querySelector('span') ? '+' : '');
            
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target.toFixed(decimals) + (element.getAttribute('data-target').includes('+') || element.classList.contains('stat-number') && !element.querySelector('span') ? '+' : '');
            }
        };
        
        requestAnimationFrame(updateCount);
    };

    const statsSection = document.querySelector('.stats');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counterElements.forEach(el => {
                    // Check if it's the decimal rating badge specifically
                    if (el.classList.contains('stat-number-val')) {
                        animateCounter(el);
                    } else if (!el.querySelector('.stat-number-val')) {
                        animateCounter(el);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) statsObserver.observe(statsSection);

    /* ==========================================
       6. SECURETECH ROOM CONFIGURATOR (SLIDES)
       ========================================== */
    let currentStep = 1;
    const totalSteps = 5;
    
    const configProgressFill = document.getElementById('configProgressFill');
    const configBadge = document.getElementById('configBadge');
    const prevBtn = document.getElementById('configPrevBtn');
    const nextBtn = document.getElementById('configNextBtn');
    
    const updateConfigurator = (step) => {
        // Toggle Active Images
        for (let i = 1; i <= totalSteps; i++) {
            const img = document.getElementById(`config-img-${i}`);
            const content = document.getElementById(`config-step-${i}`);
            
            if (i === step) {
                img.classList.add('active');
                content.classList.add('active');
            } else {
                img.classList.remove('active');
                content.classList.remove('active');
            }
        }
        
        // Progress Fill width
        const progressPercentage = (step / totalSteps) * 100;
        configProgressFill.style.width = `${progressPercentage}%`;
        
        // Update Badge text
        configBadge.textContent = `Step ${step} of ${totalSteps}`;
        
        // Button controls
        if (step === 1) {
            prevBtn.disabled = true;
            nextBtn.textContent = 'Next: Screens Added';
        } else if (step === totalSteps) {
            prevBtn.disabled = false;
            nextBtn.textContent = 'Restart Configurator';
        } else {
            prevBtn.disabled = false;
            const nextLabels = [
                '',
                'Next: Screens Added',
                'Next: Furniture Added',
                'Next: Controls Added',
                'Next: Complete Room'
            ];
            nextBtn.textContent = nextLabels[step];
        }
    };
    
    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateConfigurator(currentStep);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
        } else {
            currentStep = 1; // loop back
        }
        updateConfigurator(currentStep);
    });

    /* ==========================================
       7. SOLUTIONS SLIDER NAVIGATION
       ========================================== */
    const solutionsSlider = document.getElementById('solutionsSlider');
    const sliderPrevBtn = document.getElementById('sliderPrevBtn');
    const sliderNextBtn = document.getElementById('sliderNextBtn');
    
    let sliderScrollAmount = 0;
    const cardWidth = 350; // flexible fit
    const gap = 32;
    
    sliderNextBtn.addEventListener('click', () => {
        const maxScroll = solutionsSlider.scrollWidth - solutionsSlider.clientWidth;
        if (sliderScrollAmount < maxScroll) {
            sliderScrollAmount += (cardWidth + gap);
            solutionsSlider.style.transform = `translateX(-${Math.min(sliderScrollAmount, maxScroll)}px)`;
        } else {
            sliderScrollAmount = 0; // reset to beginning
            solutionsSlider.style.transform = `translateX(0px)`;
        }
    });
    
    sliderPrevBtn.addEventListener('click', () => {
        if (sliderScrollAmount > 0) {
            sliderScrollAmount -= (cardWidth + gap);
            solutionsSlider.style.transform = `translateX(-${Math.max(sliderScrollAmount, 0)}px)`;
        }
    });

    /* ==========================================
       8. TESTIMONIALS SLIDER
       ========================================== */
    const reviewsTrack = document.getElementById('reviewsTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    let activeReviewIndex = 0;
    
    const showReview = (index) => {
        reviewsTrack.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        activeReviewIndex = index;
    };
    
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            showReview(index);
        });
    });

    // Auto-scroll testimonials every 6 seconds
    setInterval(() => {
        let nextIndex = activeReviewIndex + 1;
        if (nextIndex >= dots.length) {
            nextIndex = 0;
        }
        showReview(nextIndex);
    }, 6000);

    /* ==========================================
       9. PORTFOLIO MASONRY CATEGORY FILTERS
       ========================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const masonryContainer = document.getElementById('projectsMasonry');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    // Trigger tiny dynamic animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.85)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // match CSS duration
                }
            });
        });
    });

    /* ==========================================
       10. TIMELINE WORKFLOW LINE SCROLL PROGRESS
       ========================================== */
    const timelineProgress = document.getElementById('timelineProgress');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const handleTimelineScroll = () => {
        if (!timelineProgress) return;
        
        const timelineRect = document.querySelector('.timeline-container').getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress percentage through timeline container in view
        const startOffset = windowHeight * 0.7; // triggers when timeline is 70% down viewport
        const relativeScroll = -timelineRect.top + startOffset;
        const totalHeight = timelineRect.height - 100;
        
        const percentage = Math.max(0, Math.min((relativeScroll / totalHeight) * 100, 100));
        timelineProgress.style.height = `${percentage}%`;
        
        // Add active state to items that are passed by progress
        timelineItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            if (itemRect.top + 50 < windowHeight * 0.7) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };
    
    window.addEventListener('scroll', handleTimelineScroll);
    handleTimelineScroll(); // Initial check
});
