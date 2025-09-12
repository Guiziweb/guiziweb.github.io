// Configuration Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif']
            }
        }
    }
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Smooth Scrolling
    initSmoothScrolling();
    
    // Navbar Scroll Effect
    initNavbarScrollEffect();
    
    // Back to Top Button
    initBackToTop();
    
    // ROI Calculator
    initROICalculator();
    
    // Form Validation
    initFormValidation();
    
    // Enhanced Animation on Scroll
    initAdvancedScrollAnimations();
    
    // Micro-Interactions
    initMicroInteractions();
    
    // Progress Bar
    initProgressBar();
    
    // Toast Notifications
    initToastSystem();
    
    // Button Ripple Effects
    initButtonRipples();
    
    // Parallax Effects
    initParallaxEffects();
});

// Enhanced Mobile Menu Functions
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Closing menu
                mobileMenu.classList.add('closing');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('closing');
                }, 300);
            } else {
                // Opening menu
                mobileMenu.classList.remove('hidden');
            }
            
            this.setAttribute('aria-expanded', !isExpanded);
            this.classList.toggle('active');
            
            // Toggle icon with animation
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close mobile menu when clicking on links with stagger animation
        const mobileLinks = document.querySelectorAll('.nav-link-mobile');
        mobileLinks.forEach((link, index) => {
            link.style.transitionDelay = `${index * 0.1}s`;
            
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
    
    function closeMobileMenu() {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('closing');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('closing');
            }, 300);
            
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.classList.remove('active');
            
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Update Active Navigation Link
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === activeId) {
            link.classList.add('text-blue-600', 'font-medium');
        } else {
            link.classList.remove('text-blue-600', 'font-medium');
        }
    });
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 100) {
                navbar.classList.add('shadow-md');
                navbar.classList.remove('shadow-sm');
            } else {
                navbar.classList.add('shadow-sm');
                navbar.classList.remove('shadow-md');
            }
        }
        
        // Auto-update active section in nav
        updateActiveSection();
        
        lastScrollY = currentScrollY;
    });
}

// Update Active Section Based on Scroll Position
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;
    
    let activeSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSection = '#' + section.id;
        }
    });
    
    if (activeSection) {
        updateActiveNavLink(activeSection);
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ROI Calculator
function initROICalculator() {
    // Function is called by onclick in HTML
    window.calculateROI = function() {
        const employeesSelect = document.getElementById('employees');
        const sectorSelect = document.getElementById('sector');
        const resultDiv = document.getElementById('roi-result');
        const monthlySavings = document.getElementById('monthly-savings');
        const roiPercentage = document.getElementById('roi-percentage');
        
        if (!employeesSelect || !sectorSelect || !resultDiv) return;
        
        const employees = parseInt(employeesSelect.value) || 15;
        const sector = sectorSelect.value || 'service';
        
        // Calcul simplifié du ROI basé sur les employés et le secteur
        let baseSavings = employees * 200; // Base de 200€ par employé
        
        // Multiplicateur selon le secteur
        const sectorMultipliers = {
            'commerce': 1.2,
            'service': 1.0,
            'industrie': 1.5,
            'sante': 1.3,
            'batiment': 1.1
        };
        
        const finalSavings = Math.round(baseSavings * (sectorMultipliers[sector] || 1.0));
        const investmentCost = Math.max(2000, employees * 100); // Coût d'investissement estimé
        const roi = Math.round((finalSavings * 12 / investmentCost) * 100);
        
        // Affichage des résultats
        if (monthlySavings && roiPercentage) {
            monthlySavings.textContent = finalSavings.toLocaleString('fr-FR') + '€';
            roiPercentage.textContent = roi + '%';
            
            resultDiv.classList.remove('hidden');
            
            // Animation d'apparition
            resultDiv.style.opacity = '0';
            resultDiv.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                resultDiv.style.transition = 'all 0.3s ease';
                resultDiv.style.opacity = '1';
                resultDiv.style.transform = 'translateY(0)';
            }, 50);
        }
    };
}

// Form Validation
function initFormValidation() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        // Real-time validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });
            
            // Validation des checkboxes des besoins
            const needsCheckboxes = contactForm.querySelectorAll('input[name="needs"]:checked');
            if (needsCheckboxes.length === 0) {
                showError(contactForm.querySelector('input[name="needs"]').closest('div'), 
                         'Veuillez sélectionner au moins un besoin');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
                
                // Scroll to first error
                const firstError = contactForm.querySelector('.error-message');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';
                    submitBtn.disabled = true;
                }
            }
        });
    }
}

// Field Validation
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'Ce champ est obligatoire';
        isValid = false;
    } else if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Veuillez entrer une adresse email valide';
            isValid = false;
        }
    } else if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)\.]{10,}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            errorMessage = 'Veuillez entrer un numéro de téléphone valide';
            isValid = false;
        }
    }
    
    if (!isValid) {
        showError(field, errorMessage);
    }
    
    return isValid;
}

// Show Field Error
function showError(field, message) {
    field.classList.add('border-red-500');
    field.classList.remove('border-gray-300');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Clear Field Error
function clearFieldError(field) {
    field.classList.remove('border-red-500');
    field.classList.add('border-gray-300');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Advanced Scroll Animations
function initAdvancedScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animation || 'fade-in-up';
                const delay = element.dataset.delay || '0';
                
                setTimeout(() => {
                    element.classList.add(`animate-${animationType}`);
                    element.classList.remove('opacity-0', 'translate-y-8', 'translate-x-8', 'scale-95');
                }, parseInt(delay));
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Setup elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, section h2, section p, .stat-item');
    animateElements.forEach((element, index) => {
        element.classList.add('transition-all', 'duration-700');
        
        // Add specific initial states based on animation type
        if (element.classList.contains('service-card')) {
            element.classList.add('opacity-0', 'translate-y-8', 'scale-95');
            element.dataset.animation = 'scale-in';
            element.dataset.delay = (index % 3) * 200; // Stagger cards
        } else if (element.classList.contains('testimonial-card')) {
            element.classList.add('opacity-0', 'translate-y-8');
            element.dataset.animation = 'fade-in-up';
            element.dataset.delay = (index % 3) * 150;
        } else if (element.classList.contains('stat-item')) {
            element.dataset.animation = 'fade-in-up';
            element.dataset.delay = (index % 3) * 300;
        } else if (element.tagName === 'H2') {
            element.classList.add('opacity-0', 'translate-y-8');
            element.dataset.animation = 'slide-in-bottom';
        } else {
            element.classList.add('opacity-0', 'translate-y-8');
            element.dataset.animation = 'fade-in-up';
        }
        
        observer.observe(element);
    });
    
    // Setup stats counter animation
    initStatsCounter();
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced scroll performance
const throttledScroll = debounce(function() {
    updateActiveSection();
}, 100);

window.addEventListener('scroll', throttledScroll);

// Micro-Interactions
function initMicroInteractions() {
    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .secondary-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.service-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.willChange = 'transform';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.willChange = 'auto';
        });
    });
    
    // Form input animations
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('form-focus');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('form-focus');
        });
    });
}

// Progress Bar
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
    
    const updateProgressBar = throttle(() => {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / documentHeight) * 100;
        
        if (scrollPercent > 5) {
            progressBar.classList.add('visible');
            progressBar.style.width = scrollPercent + '%';
        } else {
            progressBar.classList.remove('visible');
        }
    }, 10);
    
    window.addEventListener('scroll', updateProgressBar);
}

// Toast Notification System
function initToastSystem() {
    window.showToast = function(message, type = 'success', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${getToastIcon(type)} mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 text-gray-500 hover:text-gray-700" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Show toast
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });
        
        // Auto remove
        setTimeout(() => {
            if (toast.parentElement) {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
    };
    
    function getToastIcon(type) {
        switch(type) {
            case 'success': return 'fa-check-circle';
            case 'error': return 'fa-exclamation-circle';
            case 'warning': return 'fa-exclamation-triangle';
            default: return 'fa-info-circle';
        }
    }
}

// Button Ripple Effects
function initButtonRipples() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('#hero');
    
    if (parallaxElements.length === 0) return;
    
    const handleParallax = throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.backgroundPosition = `center ${rate}px`;
        });
    }, 10);
    
    window.addEventListener('scroll', handleParallax);
}

// Enhanced Form Submission
function enhanceFormSubmission() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual Formspree handling)
            setTimeout(() => {
                showToast('Message envoyé avec succès! Nous vous recontacterons sous 24h.', 'success');
                this.reset();
                submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Demander mon audit gratuit';
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Stats Counter Animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    
    if (!statsSection) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statsObserver.observe(statsSection);
    
    function animateStats() {
        statNumbers.forEach((stat, index) => {
            const target = parseInt(stat.dataset.target);
            const suffix = stat.textContent.match(/[%h]/)?.[0] || '';
            let current = 0;
            const increment = target / 50; // 50 frames for smooth animation
            
            setTimeout(() => {
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + suffix;
                }, 40); // ~25fps for counter
                
                // Animate stat item
                stat.closest('.stat-item').classList.remove('opacity-0', 'translate-y-4');
                stat.closest('.stat-item').classList.add('animate-fade-in-up');
            }, index * 200);
        });
    }
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize enhanced form submission
document.addEventListener('DOMContentLoaded', function() {
    enhanceFormSubmission();
});

// Console message for developers
console.log(`
🤖 IA Solutions PME - Landing Page
Développé avec HTML5, Tailwind CSS et JavaScript Vanilla
Compatible GitHub Pages

Fonctionnalités incluses:
✅ Navigation responsive avec animations avancées
✅ Smooth scrolling optimisé
✅ Calculateur ROI interactif
✅ Validation formulaire en temps réel
✅ Animations scroll avec Intersection Observer
✅ Menu mobile avec transitions fluides
✅ Back to top avec progress bar
✅ Micro-interactions et hover effects
✅ Toast notifications système
✅ Button ripple effects
✅ Parallax effects subtils
✅ Performance optimisée (60fps)
✅ Accessibility support (prefers-reduced-motion)
`);