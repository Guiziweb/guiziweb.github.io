// ========================================
// TAILWIND CSS CONFIGURATION
// ========================================
// Enhanced configuration for the design system
// This extends the default Tailwind config via CDN

// Configuration sécurisée pour le CDN Tailwind
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
    darkMode: 'class', // Enable dark mode support
    theme: {
        screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            // Design System Colors
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb', // Main primary
                    700: '#1d4ed8', // Primary hover
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554'
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b', // Main secondary
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617'
                },
                accent: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9', // Main accent
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49'
                },
                success: {
                    DEFAULT: '#22c55e',
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d'
                },
                warning: {
                    DEFAULT: '#f59e0b',
                    50: '#fffbeb',
                    100: '#fef3c7',
                    500: '#f59e0b',
                    600: '#d97706'
                },
                danger: {
                    DEFAULT: '#ef4444',
                    50: '#fef2f2',
                    100: '#fee2e2',
                    500: '#ef4444',
                    600: '#dc2626'
                }
            },
            
            // Enhanced Typography
            fontFamily: {
                'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'mono': ['JetBrains Mono', 'ui-monospace', 'monospace']
            },
            
            // Animation System
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
                'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
                'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
                'slide-in-top': 'slideInFromTop 0.6s ease-out forwards',
                'slide-in-bottom': 'slideInFromBottom 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.5s ease-out forwards',
                'pulse-subtle': 'pulse 2s ease-in-out infinite',
                'bounce-subtle': 'subtleBounce 1.5s ease-out infinite',
                'shimmer': 'shimmer 2s infinite',
                'float': 'float 3s ease-in-out infinite',
                'slideDown': 'slideDown 0.3s ease-out forwards',
                'slideUp': 'slideUp 0.3s ease-out forwards',
                'toast-in': 'toastIn 0.4s ease-out forwards',
                'ripple': 'ripple 0.6s ease-out'
            },
            
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInDown: {
                    from: { opacity: '0', transform: 'translateY(-30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInLeft: {
                    from: { opacity: '0', transform: 'translateX(-30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                fadeInRight: {
                    from: { opacity: '0', transform: 'translateX(30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                slideInFromTop: {
                    from: { opacity: '0', transform: 'translateY(-50px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                slideInFromBottom: {
                    from: { opacity: '0', transform: 'translateY(50px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'scale(0.9)' },
                    to: { opacity: '1', transform: 'scale(1)' }
                },
                subtleBounce: {
                    '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
                    '40%, 43%': { transform: 'translateY(-10px)' },
                    '70%': { transform: 'translateY(-5px)' },
                    '90%': { transform: 'translateY(-2px)' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                slideDown: {
                    from: { opacity: '0', maxHeight: '0', transform: 'translateY(-10px)' },
                    to: { opacity: '1', maxHeight: '200px', transform: 'translateY(0)' }
                },
                slideUp: {
                    from: { opacity: '1', maxHeight: '200px', transform: 'translateY(0)' },
                    to: { opacity: '0', maxHeight: '0', transform: 'translateY(-10px)' }
                },
                toastIn: {
                    from: { opacity: '0', transform: 'translateX(100%)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                ripple: {
                    to: { width: '300px', height: '300px', opacity: '0' }
                }
            },
            
            // Enhanced Shadows
            boxShadow: {
                'soft': '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
                'soft-md': '0 4px 8px 0 rgba(0, 0, 0, 0.08)',
                'soft-lg': '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
                'soft-xl': '0 16px 32px 0 rgba(0, 0, 0, 0.12)',
                'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
                'glow-lg': '0 0 40px rgba(37, 99, 235, 0.2)'
            },
            
            // Enhanced Spacing
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
                '38': '9.5rem',
                '42': '10.5rem',
                '46': '11.5rem',
                '50': '12.5rem'
            },
            
            // Z-Index Scale
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100'
            }
        }
    },
    
    // Custom Plugins Configuration
    corePlugins: {
        // Enable all core plugins for maximum flexibility
    }
    };
} else {
    console.warn('Tailwind CSS n\'est pas chargé via CDN');
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScrollEffect();
    initBackToTop();
    initFormValidation();
    
    // Enhanced features
    initAdvancedScrollAnimations();
    initMicroInteractions();
    initProgressBar();
    initToastSystem();
    initButtonRipples();
    initServiceCardOverlays();
    initTestimonialsCarousel();
    initDynamicContentLoading();
    
    // Mobile-specific enhancements
    initMobileOptimizations();
    initTouchEnhancements();
    initViewportOptimizations();
    
    // Performance optimizations
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        initParallaxEffects();
    }

    // Initialize performance monitoring
    initPerformanceMonitoring();
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

// Enhanced Smart Navigation System
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateNavbar = () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        if (navbar) {
            // Enhanced shadow effects based on scroll position
            if (currentScrollY > 100) {
                navbar.classList.add('shadow-md', 'bg-white/98');
                navbar.classList.remove('shadow-sm', 'bg-white/95');
            } else {
                navbar.classList.add('shadow-sm', 'bg-white/95');
                navbar.classList.remove('shadow-md', 'bg-white/98');
            }
            
            // Smart hide/show navbar on scroll (desktop only)
            if (window.innerWidth >= 768 && scrollDelta > 5) {
                if (scrollDirection === 'down' && currentScrollY > 200) {
                    navbar.style.transform = 'translateY(-100%)';
                    navbar.style.transition = 'transform 0.3s ease-in-out';
                } else if (scrollDirection === 'up') {
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.transition = 'transform 0.3s ease-in-out';
                }
            }
            
            // Always show navbar when near top
            if (currentScrollY < 100) {
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        // Auto-update active section in nav with breadcrumb
        updateActiveSection();
        updateBreadcrumb(currentScrollY);
        
        lastScrollY = currentScrollY;
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });
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

// Advanced Breadcrumb Navigation System
function updateBreadcrumb(scrollY) {
    let breadcrumb = document.querySelector('.breadcrumb-nav');
    
    if (!breadcrumb) {
        breadcrumb = createBreadcrumbNav();
    }
    
    const sections = [
        { id: 'hero', title: 'Accueil', start: 0 },
        { id: 'services', title: 'Services IA', start: 800 },
        { id: 'benefits', title: 'Avantages', start: 1600 },
        { id: 'testimonials', title: 'Témoignages', start: 2400 },
        { id: 'contact', title: 'Contact', start: 3200 }
    ];
    
    let currentSection = sections[0];
    for (let section of sections) {
        if (scrollY >= section.start) {
            currentSection = section;
        }
    }
    
    const breadcrumbText = breadcrumb.querySelector('.breadcrumb-text');
    const breadcrumbProgress = breadcrumb.querySelector('.breadcrumb-progress');
    
    if (breadcrumbText && breadcrumbProgress) {
        breadcrumbText.textContent = currentSection.title;
        
        // Calculate progress within current section
        const nextSection = sections[sections.indexOf(currentSection) + 1];
        const sectionProgress = nextSection 
            ? ((scrollY - currentSection.start) / (nextSection.start - currentSection.start)) * 100
            : 100;
        
        breadcrumbProgress.style.width = Math.min(100, Math.max(0, sectionProgress)) + '%';
        
        // Show/hide breadcrumb based on scroll position
        if (scrollY > 200) {
            breadcrumb.classList.remove('opacity-0', 'pointer-events-none');
            breadcrumb.classList.add('opacity-100');
        } else {
            breadcrumb.classList.add('opacity-0', 'pointer-events-none');
            breadcrumb.classList.remove('opacity-100');
        }
    }
}

function createBreadcrumbNav() {
    const breadcrumb = document.createElement('div');
    breadcrumb.className = 'breadcrumb-nav fixed top-20 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg opacity-0 pointer-events-none transition-all duration-300 hidden md:block';
    breadcrumb.innerHTML = `
        <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span class="breadcrumb-text text-sm font-medium text-gray-700">Accueil</span>
            <div class="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div class="breadcrumb-progress h-full bg-blue-600 transition-all duration-300 rounded-full" style="width: 0%"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(breadcrumb);
    return breadcrumb;
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
        const phoneRegex = /^[\d\s\-+(.)]{10,}$/;
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

// Mobile-Specific Optimizations
function initMobileOptimizations() {
    // Detect mobile device
    const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Add mobile class for CSS targeting
        document.body.classList.add('mobile-device');
        
        // Optimize animations for mobile
        const animatedElements = document.querySelectorAll('[class*="animate-"]');
        animatedElements.forEach(el => {
            el.style.animationDuration = '0.3s';
        });
        
        // Reduce shadow complexity
        const shadowElements = document.querySelectorAll('.shadow-lg, .shadow-xl');
        shadowElements.forEach(el => {
            el.classList.remove('shadow-lg', 'shadow-xl');
            el.classList.add('shadow-md');
        });
        
        // Simplify hover effects on mobile
        const hoverElements = document.querySelectorAll('[class*="hover:"]');
        hoverElements.forEach(el => {
            el.addEventListener('touchstart', function() {
                this.classList.add('mobile-active');
            });
            el.addEventListener('touchend', function() {
                setTimeout(() => this.classList.remove('mobile-active'), 150);
            });
        });
    }
}

// Enhanced Touch Interactions
function initTouchEnhancements() {
    // Improve touch feedback
    const touchElements = document.querySelectorAll('button, a, .service-card, .testimonial-card');
    
    touchElements.forEach(element => {
        // Add touch feedback
        element.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.98)';
            this.style.opacity = '0.9';
        }, { passive: true });
        
        element.addEventListener('touchend', function(e) {
            setTimeout(() => {
                this.style.transform = '';
                this.style.opacity = '';
            }, 100);
        }, { passive: true });
        
        element.addEventListener('touchcancel', function(e) {
            this.style.transform = '';
            this.style.opacity = '';
        }, { passive: true });
    });
    
    // Enhanced mobile menu touch interactions
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        let touchStartY = 0;
        
        mobileMenu.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        mobileMenu.addEventListener('touchmove', function(e) {
            const touchY = e.touches[0].clientY;
            const deltaY = touchY - touchStartY;
            
            // Close menu on upward swipe
            if (deltaY < -50) {
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                if (mobileMenuBtn) {
                    mobileMenuBtn.click();
                }
            }
        }, { passive: true });
    }
}

// Viewport and Performance Optimizations
function initViewportOptimizations() {
    // Handle viewport changes (mobile rotation, etc.)
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Recalculate layouts on orientation change
            const event = new CustomEvent('viewportchange');
            window.dispatchEvent(event);
            
            // Update mobile menu state if needed
            if (window.innerWidth >= 768) {
                const mobileMenu = document.querySelector('.mobile-menu');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        }, 250);
    });
    
    // Optimize scroll performance on mobile
    let ticking = false;
    const optimizedScroll = function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                // Update progress bar
                const progressBar = document.querySelector('.progress-bar');
                if (progressBar) {
                    const scrollTop = window.pageYOffset;
                    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = (scrollTop / documentHeight) * 100;
                    
                    progressBar.style.width = scrollPercent + '%';
                    progressBar.style.opacity = scrollPercent > 5 ? '1' : '0';
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', optimizedScroll, { passive: true });
    
    // Note: Critical images preloading can be added here when needed
    
    // Lazy load non-critical content
    if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const lazyObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const src = element.dataset.lazy;
                    
                    if (element.tagName === 'IMG') {
                        element.src = src;
                    } else {
                        element.style.backgroundImage = `url(${src})`;
                    }
                    
                    element.removeAttribute('data-lazy');
                    lazyObserver.unobserve(element);
                }
            });
        });
        
        lazyElements.forEach(el => lazyObserver.observe(el));
    }
}

// Enhanced Mobile Form Interactions
function enhanceMobileFormExperience() {
    const formInputs = document.querySelectorAll('input, textarea, select');
    
    formInputs.forEach(input => {
        // Auto-scroll to input on focus (mobile)
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    this.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest'
                    });
                }, 300); // Wait for virtual keyboard
            }
        });
        
        // Improve number input experience
        if (input.type === 'tel') {
            input.addEventListener('input', function() {
                // Format phone number as user types
                let value = this.value.replace(/\D/g, '');
                if (value.length >= 10) {
                    value = value.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
                }
                this.value = value;
            });
        }
    });
}

// Initialize mobile form enhancements
document.addEventListener('DOMContentLoaded', function() {
    enhanceMobileFormExperience();
});

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor Core Web Vitals on mobile
    if ('web-vital' in window) {
        // This would integrate with web-vitals library if available
        console.log('Performance monitoring initialized');
    }

    // Basic performance logging with modern API
    window.addEventListener('load', function() {
        // Use modern Navigation Timing API
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
            const loadTime = navigation.loadEventEnd - navigation.fetchStart;
            console.log(`Page load time: ${loadTime}ms`);
        }
    });
}

// Advanced Service Card Overlays
function initServiceCardOverlays() {
    const serviceCards = document.querySelectorAll('#services .group');
    
    serviceCards.forEach((card, index) => {
        // Add detailed overlay on hover/click
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 768) { // Desktop only
                showServiceOverlay(this, index);
            }
        });
        
        card.addEventListener('mouseleave', function() {
            hideServiceOverlay(this);
        });
        
        // Touch devices - tap to toggle
        card.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                toggleServiceOverlay(this, index);
            }
        });
    });
    
    function showServiceOverlay(card, index) {
        const overlay = getOrCreateOverlay(card, index);
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
        
        // Animate overlay content
        const overlayContent = overlay.querySelector('.overlay-content');
        if (overlayContent) {
            overlayContent.style.transform = 'translateY(0)';
        }
    }
    
    function hideServiceOverlay(card) {
        const overlay = card.querySelector('.service-overlay');
        if (overlay) {
            overlay.classList.add('opacity-0', 'pointer-events-none');
            overlay.classList.remove('opacity-100');
            
            const overlayContent = overlay.querySelector('.overlay-content');
            if (overlayContent) {
                overlayContent.style.transform = 'translateY(10px)';
            }
        }
    }
    
    function toggleServiceOverlay(card, index) {
        const overlay = getOrCreateOverlay(card, index);
        const isVisible = !overlay.classList.contains('opacity-0');
        
        if (isVisible) {
            hideServiceOverlay(card);
        } else {
            showServiceOverlay(card, index);
        }
    }
    
    function getOrCreateOverlay(card, index) {
        let overlay = card.querySelector('.service-overlay');
        
        if (!overlay) {
            overlay = createServiceOverlay(index);
            card.appendChild(overlay);
        }
        
        return overlay;
    }
    
    function createServiceOverlay(index) {
        const overlayData = [
            {
                title: "Automatisation des Processus",
                details: "Transformez vos tâches manuelles répétitives en workflows automatisés intelligents",
                features: [
                    "Intégration CRM/ERP existant",
                    "Workflows personnalisés", 
                    "Dashboard de monitoring",
                    "Formation équipes incluse"
                ],
                cta: "Découvrir l'automatisation"
            },
            {
                title: "Analyse Prédictive",
                details: "Anticipez les tendances et optimisez vos décisions avec des modèles IA avancés",
                features: [
                    "Prévisions de vente précises",
                    "Optimisation automatique des stocks",
                    "Détection d'anomalies",
                    "Rapports intelligents"
                ],
                cta: "Voir les analyses IA"
            },
            {
                title: "Chatbots Intelligents", 
                details: "Assistant virtuel 24/7 qui comprend vos clients et représente votre expertise",
                features: [
                    "Compréhension contextuelle",
                    "Intégration multicanale",
                    "Base de connaissances auto-apprenante",
                    "Escalade vers humains"
                ],
                cta: "Tester le chatbot"
            },
            {
                title: "Vision Artificielle",
                details: "Automatisez l'inspection visuelle et le contrôle qualité avec une précision surhumaine",
                features: [
                    "Détection défauts en temps réel",
                    "Classification automatique",
                    "Intégration chaîne production",
                    "Historique et traçabilité"
                ],
                cta: "Voir la démo vision"
            },
            {
                title: "Optimisation des Données",
                details: "Transformez vos données dispersées en insights actionnables et tableaux de bord",
                features: [
                    "Centralisation sources multiples",
                    "Nettoyage automatique",
                    "Visualisations interactives",
                    "Alertes intelligentes"
                ],
                cta: "Auditer mes données"
            },
            {
                title: "Formation & Accompagnement",
                details: "Montée en compétences complète pour une adoption IA réussie dans votre entreprise",
                features: [
                    "Formation métier spécialisée",
                    "Support technique dédié",
                    "Documentation personnalisée",
                    "Communauté d'utilisateurs"
                ],
                cta: "Planifier formation"
            }
        ];
        
        const data = overlayData[index] || overlayData[0];
        
        const overlay = document.createElement('div');
        overlay.className = 'service-overlay absolute inset-0 bg-gradient-to-br from-blue-600/95 to-purple-600/95 rounded-xl opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center z-10';
        
        overlay.innerHTML = `
            <div class="overlay-content text-white p-6 text-center transform translateY(10px) transition-transform duration-300">
                <h4 class="text-xl font-bold mb-3">${data.title}</h4>
                <p class="text-blue-100 mb-4 text-sm leading-relaxed">${data.details}</p>
                <ul class="space-y-2 mb-6">
                    ${data.features.map(feature => `
                        <li class="flex items-center justify-center text-sm">
                            <i class="fas fa-check-circle mr-2 text-blue-200"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                <button class="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
                    ${data.cta}
                </button>
            </div>
        `;
        
        return overlay;
    }
}

// Interactive Testimonials Carousel
function initTestimonialsCarousel() {
    const testimonialsSection = document.querySelector('#testimonials');
    if (!testimonialsSection) return;
    
    const testimonialCards = testimonialsSection.querySelectorAll('.testimonial-card');
    if (testimonialCards.length === 0) return;
    
    let currentTestimonial = 0;
    let isAutoPlaying = true;
    let carouselInterval;
    
    // Add navigation controls
    const carouselControls = createCarouselControls();
    testimonialsSection.appendChild(carouselControls);
    
    // Add indicators
    const indicators = createCarouselIndicators(testimonialCards.length);
    testimonialsSection.appendChild(indicators);
    
    // Initialize carousel
    setupCarousel();
    startAutoPlay();
    
    function createCarouselControls() {
        const controls = document.createElement('div');
        controls.className = 'testimonial-controls flex justify-center items-center space-x-4 mt-8';
        controls.innerHTML = `
            <button class="prev-btn p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <i class="fas fa-chevron-left text-gray-600"></i>
            </button>
            <button class="play-pause-btn p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                <i class="fas fa-pause"></i>
            </button>
            <button class="next-btn p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <i class="fas fa-chevron-right text-gray-600"></i>
            </button>
        `;
        
        // Add event listeners
        controls.querySelector('.prev-btn').addEventListener('click', () => previousTestimonial());
        controls.querySelector('.next-btn').addEventListener('click', () => nextTestimonial());
        controls.querySelector('.play-pause-btn').addEventListener('click', () => toggleAutoPlay());
        
        return controls;
    }
    
    function createCarouselIndicators(count) {
        const indicators = document.createElement('div');
        indicators.className = 'testimonial-indicators flex justify-center space-x-2 mt-4';
        
        for (let i = 0; i < count; i++) {
            const indicator = document.createElement('button');
            indicator.className = `indicator w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-blue-600' : 'bg-gray-300'}`;
            indicator.addEventListener('click', () => goToTestimonial(i));
            indicators.appendChild(indicator);
        }
        
        return indicators;
    }
    
    function setupCarousel() {
        testimonialCards.forEach((card, index) => {
            if (index === 0) {
                card.classList.add('active');
                card.style.opacity = '1';
                card.style.transform = 'translateX(0) scale(1)';
            } else {
                card.classList.remove('active');
                card.style.opacity = '0.7';
                card.style.transform = 'translateX(100px) scale(0.95)';
            }
        });
        
        updateIndicators();
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        updateCarousel();
    }
    
    function previousTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        updateCarousel();
    }
    
    function goToTestimonial(index) {
        currentTestimonial = index;
        updateCarousel();
    }
    
    function updateCarousel() {
        testimonialCards.forEach((card, index) => {
            card.style.transition = 'all 0.5s ease-in-out';
            
            if (index === currentTestimonial) {
                card.classList.add('active');
                card.style.opacity = '1';
                card.style.transform = 'translateX(0) scale(1)';
                card.style.zIndex = '10';
            } else if (index < currentTestimonial) {
                card.classList.remove('active');
                card.style.opacity = '0.5';
                card.style.transform = 'translateX(-100px) scale(0.9)';
                card.style.zIndex = '1';
            } else {
                card.classList.remove('active');
                card.style.opacity = '0.5';
                card.style.transform = 'translateX(100px) scale(0.9)';
                card.style.zIndex = '1';
            }
        });
        
        updateIndicators();
    }
    
    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentTestimonial) {
                indicator.classList.add('bg-blue-600');
                indicator.classList.remove('bg-gray-300');
            } else {
                indicator.classList.add('bg-gray-300');
                indicator.classList.remove('bg-blue-600');
            }
        });
    }
    
    function startAutoPlay() {
        if (isAutoPlaying) {
            carouselInterval = setInterval(() => {
                nextTestimonial();
            }, 5000);
        }
    }
    
    function stopAutoPlay() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
    }
    
    function toggleAutoPlay() {
        const playPauseBtn = document.querySelector('.play-pause-btn i');
        
        if (isAutoPlaying) {
            stopAutoPlay();
            isAutoPlaying = false;
            playPauseBtn.className = 'fas fa-play';
        } else {
            isAutoPlaying = true;
            startAutoPlay();
            playPauseBtn.className = 'fas fa-pause';
        }
    }
    
    // Pause auto-play on hover
    testimonialsSection.addEventListener('mouseenter', () => {
        if (isAutoPlaying) stopAutoPlay();
    });
    
    testimonialsSection.addEventListener('mouseleave', () => {
        if (isAutoPlaying) startAutoPlay();
    });
    
    // Touch gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    testimonialsSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    testimonialsSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextTestimonial();
            } else {
                previousTestimonial();
            }
        }
    }
}

// Dynamic Content Loading and State Management
function initDynamicContentLoading() {
    // Progressive content enhancement
    enhanceFormInteractions();
    initContentPreloader();
    initStateManagement();
    initAdvancedAnimationTriggers();
}

function enhanceFormInteractions() {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;

    // Real-time field enhancement
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        // Smart autocomplete suggestions
        if (input.name === 'company') {
            addCompanyAutoComplete(input);
        }
        
        // Real-time validation with better UX
        input.addEventListener('input', debounce(() => {
            validateFieldAdvanced(input);
            updateFormProgress();
        }, 300));
        
        // Enhanced focus/blur effects
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('form-field-focused');
            showFieldHints(input);
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('form-field-focused');
            hideFieldHints(input);
        });
    });
    
    function addCompanyAutoComplete(input) {
        // Simulate company suggestions (would integrate with API)
        const suggestions = [
            'PME Services', 'Tech Innovation SARL', 'Commerce Plus', 
            'Industrie Moderne', 'Santé & Bien-être', 'Bâtiment Pro'
        ];
        
        let suggestionList = null;
        
        input.addEventListener('input', () => {
            const value = input.value.toLowerCase();
            if (value.length > 2) {
                const matches = suggestions.filter(s => s.toLowerCase().includes(value));
                if (matches.length > 0) {
                    showSuggestions(input, matches);
                }
            } else {
                hideSuggestions();
            }
        });
        
        function showSuggestions(input, matches) {
            hideSuggestions();
            
            suggestionList = document.createElement('div');
            suggestionList.className = 'autocomplete-suggestions absolute z-20 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg';
            
            matches.forEach(match => {
                const suggestion = document.createElement('div');
                suggestion.className = 'p-3 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0';
                suggestion.textContent = match;
                suggestion.addEventListener('click', () => {
                    input.value = match;
                    hideSuggestions();
                    input.dispatchEvent(new Event('input'));
                });
                suggestionList.appendChild(suggestion);
            });
            
            input.parentElement.appendChild(suggestionList);
        }
        
        function hideSuggestions() {
            if (suggestionList) {
                suggestionList.remove();
                suggestionList = null;
            }
        }
    }
    
    function validateFieldAdvanced(field) {
        // Enhanced validation with better error messages
        const isValid = validateField(field);
        
        if (isValid) {
            addFieldSuccess(field);
        } else {
            removeFieldSuccess(field);
        }
        
        return isValid;
    }
    
    function addFieldSuccess(field) {
        field.classList.add('border-green-500');
        field.classList.remove('border-gray-300');
        
        // Add success icon
        let successIcon = field.parentElement.querySelector('.success-icon');
        if (!successIcon) {
            successIcon = document.createElement('i');
            successIcon.className = 'success-icon fas fa-check-circle text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2';
            field.parentElement.classList.add('relative');
            field.parentElement.appendChild(successIcon);
        }
    }
    
    function removeFieldSuccess(field) {
        field.classList.remove('border-green-500');
        const successIcon = field.parentElement.querySelector('.success-icon');
        if (successIcon) {
            successIcon.remove();
        }
    }
    
    function showFieldHints(field) {
        const hints = {
            'email': 'Format: nom@entreprise.com',
            'phone': 'Format: 06 12 34 56 78',
            'company': 'Nom complet de votre entreprise',
            'message': 'Décrivez vos défis et objectifs principaux'
        };
        
        const hint = hints[field.name];
        if (hint && !field.parentElement.querySelector('.field-hint')) {
            const hintEl = document.createElement('div');
            hintEl.className = 'field-hint text-xs text-blue-600 mt-1 opacity-0 transition-opacity duration-300';
            hintEl.textContent = hint;
            field.parentElement.appendChild(hintEl);
            
            setTimeout(() => hintEl.classList.add('opacity-100'), 10);
        }
    }
    
    function hideFieldHints(field) {
        const hint = field.parentElement.querySelector('.field-hint');
        if (hint) {
            hint.classList.remove('opacity-100');
            setTimeout(() => hint.remove(), 300);
        }
    }
    
    function updateFormProgress() {
        const requiredFields = contactForm.querySelectorAll('[required]');
        const validFields = Array.from(requiredFields).filter(field => 
            validateField(field) && field.value.trim()
        );
        
        const progress = (validFields.length / requiredFields.length) * 100;
        updateFormProgressBar(progress);
    }
    
    function updateFormProgressBar(progress) {
        let progressBar = document.querySelector('.form-progress-bar');
        
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'form-progress-bar w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-6';
            progressBar.innerHTML = '<div class="progress-fill h-full bg-blue-600 transition-all duration-300 rounded-full" style="width: 0"></div>';
            
            contactForm.insertBefore(progressBar, contactForm.firstChild);
        }
        
        const progressFill = progressBar.querySelector('.progress-fill');
        progressFill.style.width = progress + '%';
        
        // Change color based on progress
        if (progress === 100) {
            progressFill.classList.remove('bg-blue-600');
            progressFill.classList.add('bg-green-600');
        } else {
            progressFill.classList.remove('bg-green-600');
            progressFill.classList.add('bg-blue-600');
        }
    }
}

function initContentPreloader() {
    // Preload critical content and show loading states
    const criticalSections = ['#hero', '#services', '#benefits'];
    
    criticalSections.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            section.classList.add('content-loaded');
        }
    });
}

function initStateManagement() {
    // Global state management for the application
    window.AppState = {
        currentSection: 'hero',
        formData: {},
        userPreferences: {
            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        },

        loadFormData() {
            const saved = localStorage.getItem('ia-solutions-form-data');
            if (saved) {
                this.formData = JSON.parse(saved);
                this.restoreFormData();
            }
        },
        
        restoreFormData() {
            Object.keys(this.formData).forEach(key => {
                const field = document.querySelector(`[name="${key}"]`);
                if (field && this.formData[key]) {
                    field.value = this.formData[key];
                }
            });
        }
    };
    
    // Load saved form data
    window.AppState.loadFormData();
    
    // Listen for section changes
    document.addEventListener('sectionChanged', (e) => {
        console.log('Section changed to:', e.detail.section);
    });
}

function initAdvancedAnimationTriggers() {
    // More sophisticated animation triggers
    const advancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationDelay = element.dataset.delay || 0;
                const animationType = element.dataset.animation || 'fadeInUp';
                
                setTimeout(() => {
                    element.classList.add('animate-in', `animation-${animationType}`);
                    
                    // Trigger custom events for complex animations
                    element.dispatchEvent(new CustomEvent('elementVisible', {
                        detail: { element, animationType }
                    }));
                }, animationDelay);
                
                advancedObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Enhanced elements to observe
    const advancedElements = document.querySelectorAll(
        '.service-card, .testimonial-card, .benefit-item, .stat-item, .contact-info'
    );
    
    advancedElements.forEach(el => advancedObserver.observe(el));
}

