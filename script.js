// ========================================
// JAVASCRIPT SIMPLIFIÉ - LANDING PAGE IA
// ========================================
// Version finalisée : 4 fonctionnalités essentielles uniquement
// Réduction de 1807 lignes à ~200 lignes (89% de réduction)

// DOM Content Loaded - FONCTIONNALITÉS ESSENTIELLES UNIQUEMENT
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();        // Navigation mobile basique
    initSmoothScrolling();   // Smooth scroll pour les ancres
    initFormValidation();    // Validation formulaire complète
    initBackToTop();         // Back to top
    enhanceMobileFormExperience(); // Amélioration mobile
});

// ========================================
// 1. NAVIGATION MOBILE - Simple et efficace
// ========================================
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    // Toggle menu
    mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden');
        this.setAttribute('aria-expanded', !isExpanded);

        // Toggle hamburger icon
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });

    // Close menu when clicking links
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });

    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
}

// ========================================
// 2. SMOOTH SCROLLING - Simple et performant
// ========================================
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// 3. BACK TO TOP - Simple et efficace
// ========================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (!backToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// 4. FORM VALIDATION - Simple et robuste
// ========================================
function initFormValidation() {
    const contactForm = document.querySelector('#contact form');

    if (!contactForm) return;

    const requiredFields = contactForm.querySelectorAll('[required]');

    // Real-time validation on blur
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });

        field.addEventListener('input', function() {
            clearFieldError(this);
        });
    });

    // Form submission validation
    contactForm.addEventListener('submit', function(e) {
        let isValid = true;

        // Validate required fields
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        // Validate checkboxes (needs)
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

// Field validation helper
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let errorMessage = '';

    // Clear previous error
    clearFieldError(field);

    // Required field check
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'Ce champ est obligatoire';
        isValid = false;
    } else if (fieldName === 'email' && value) {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Veuillez entrer une adresse email valide';
            isValid = false;
        }
    } else if (fieldName === 'phone' && value) {
        // Phone validation
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

// Show error message
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

// Clear error message
function clearFieldError(field) {
    field.classList.remove('border-red-500');
    field.classList.add('border-gray-300');

    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// ========================================
// 5. ENHANCED MOBILE FORM EXPERIENCE
// ========================================
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

        // Format phone number as user types
        if (input.type === 'tel') {
            input.addEventListener('input', function() {
                let value = this.value.replace(/\D/g, '');
                if (value.length >= 10) {
                    value = value.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
                }
                this.value = value;
            });
        }
    });
}
