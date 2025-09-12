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
    
    // Animation on Scroll
    initScrollAnimations();
});

// Mobile Menu Functions
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = document.querySelectorAll('.nav-link-mobile');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
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

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card');
    animateElements.forEach(element => {
        element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        observer.observe(element);
    });
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

// Console message for developers
console.log(`
🤖 IA Solutions PME - Landing Page
Développé avec HTML5, Tailwind CSS et JavaScript Vanilla
Compatible GitHub Pages

Fonctionnalités incluses:
✅ Navigation responsive
✅ Smooth scrolling
✅ Calculateur ROI
✅ Validation formulaire
✅ Animations scroll
✅ Menu mobile
✅ Back to top
`);