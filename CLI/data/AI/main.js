// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initScrollEffects();
    initSwiper();
    initButtons();
    initLoading();
});

// Smooth scroll animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in-view', 'in-view');
            }
        });
    }, observerOptions);

    // Observe animate elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Fade in elements with delay
    let delay = 0;
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.animationDelay = delay + 'ms';
        delay += 100;
    });
}

// Scroll effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
}

// Swiper functionality with smooth transitions
function initSwiper() {
    const slides = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;
    let isAnimating = false;

    function showSlide(index) {
        if (isAnimating) return;
        isAnimating = true;

        // Hide all slides
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(50px)';
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Show current slide with smooth animation
        setTimeout(() => {
            slides[index].style.opacity = '1';
            slides[index].style.transform = 'translateX(0)';
            currentSlide = index;
            setTimeout(() => { isAnimating = false; }, 400);
        }, 200);
    }

    // Auto slide
    setInterval(() => {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }, 5000);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Initial state
    showSlide(0);
}

// Button interactions
function initButtons() {
    // CTAs and buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });

    // Feature cards hover
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(2deg)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            this.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
        });
    });

    // AI model cards
    const aiModels = document.querySelectorAll('.ai-model');

    aiModels.forEach(model => {
        model.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        });

        model.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Loading screen
function initLoading() {
    const loading = document.querySelector('.loading');

    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
            document.body.classList.remove('loading-active');
        }, 1000);
    }
}

// Typing animation
function typeText(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;

    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Pricing calculator
function calculatePricing(userCount) {
    const usersDisplay = document.querySelector('.pricing-users');
    const revenueDisplay = document.querySelector('.pricing-revenue');
    const profitDisplay = document.querySelector('.pricing-profit');

    if (usersDisplay) {
        // Animate number changes
        animateNumber(usersDisplay, userCount);
        animateNumber(revenueDisplay, userCount * 999);
        animateNumber(profitDisplay, userCount * 399);
    }
}

// Animate numbers
function animateNumber(element, target) {
    const start = parseInt(element.textContent) || 0;
    const increment = (target - start) / 50;
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
            clearInterval(timer);
            current = target;
        }
        if (element.classList.contains('currency')) {
            element.textContent = '₹' + Math.round(current).toLocaleString();
        } else {
            element.textContent = Math.round(current).toLocaleString();
        }
    }, 20);
}

// Navigation smooth scroll
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Price buttons
function initPricingButtons() {
    const buttons = document.querySelectorAll('.pricing-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const count = parseInt(this.getAttribute('data-users') || 0);
            calculatePricing(count);
        });
    });
}

// Stats counter animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stats-number');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target') || 0);
        animateNumber(stat, target);
    });
}

// Tooltip functionality
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach(element => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        element.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) + 'px';
            tooltip.style.top = rect.top - 40 + 'px';
            tooltip.style.display = 'block';

            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translate(-50%, 0)';
            }, 10);
        });

        element.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 200);
        });
    });
}

// Mobile menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

// Form validation
function initForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Show success message
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = '✓ Sent!';
                submitBtn.disabled = true;

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    });
}

// Parallax effect on scroll
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-element');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const rate = element.getAttribute('data-rate') || 0.5;
            const yPos = -(scrolled * rate);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialize on page load
function init() {
    smoothScroll();
    initPricingButtons();
    initStatsCounter();
    initTooltips();
    initMobileMenu();
    initForms();
    initParallax();

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            typeText(heroTitle, heroTitle.textContent, 30);
        }, 1000);
    }
}

init();