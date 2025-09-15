// ========================================
// JAVASCRIPT OPTIMISÉ - LANDING PAGE IA
// ========================================
// Version nettoyée : fonctionnalités essentielles uniquement

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();        // Navigation mobile
    initSmoothScrolling();   // Smooth scroll pour les ancres
    initBackToTop();         // Back to top
    initCalendlyHighlight(); // Calendly highlight effect
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
            const targetId = this.getAttribute('href');

            // Ignore empty or invalid selectors
            if (!targetId || targetId === '#' || targetId.length <= 1) {
                return;
            }

            e.preventDefault();

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
// 4. CALENDLY HIGHLIGHT EFFECT
// ========================================
function initCalendlyHighlight() {
    const highlightButton = document.getElementById('highlight-calendly');
    const calendlyWidget = document.getElementById('calendly-widget');

    if (highlightButton && calendlyWidget) {
        highlightButton.addEventListener('click', function() {
            // Scroll vers le calendly si on est sur mobile
            calendlyWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Effet de surbrillance
            calendlyWidget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)';
            calendlyWidget.style.transform = 'scale(1.02)';

            // Retour à la normale après 2 secondes
            setTimeout(() => {
                calendlyWidget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                calendlyWidget.style.transform = 'scale(1)';
            }, 2000);
        });
    }
}