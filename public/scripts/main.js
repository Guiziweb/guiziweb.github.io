/**
 * Main JavaScript file for Guiziweb site
 * Handles mobile navigation, smooth scrolling, cookie consent and more
 */

// Mobile Navigation
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        mobileMenu.classList.toggle('hidden');
        this.setAttribute('aria-expanded', !isExpanded);
        // Icon toggling is now handled by the Icon component
    });

    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });

    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        // Icon reset is now handled by the Icon component
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
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

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

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

// Calendly Highlight Animation
function initCalendlyHighlight() {
    const highlightButton = document.getElementById('highlight-calendly');
    const calendlyWidget = document.getElementById('calendly-widget');

    if (highlightButton && calendlyWidget) {
        highlightButton.addEventListener('click', function() {
            calendlyWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
            calendlyWidget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)';
            calendlyWidget.style.transform = 'scale(1.02)';
            setTimeout(() => {
                calendlyWidget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                calendlyWidget.style.transform = 'scale(1)';
            }, 2000);
        });
    }
}

// Cookie Consent Management
function initCookieConsent() {
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieModal = document.getElementById('cookie-modal');
    const acceptButton = document.getElementById('cookie-accept');
    const declineButton = document.getElementById('cookie-decline');
    const settingsButton = document.getElementById('cookie-settings');
    const modalCloseButton = document.getElementById('cookie-modal-close');
    const savePreferencesButton = document.getElementById('cookie-save-preferences');
    const acceptAllButton = document.getElementById('cookie-accept-all');

    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent) {
        // Afficher le bandeau après un délai
        setTimeout(() => {
            cookieBanner.classList.remove('translate-y-full');
        }, 1000);
    }

    // Accepter tous les cookies
    acceptButton.addEventListener('click', () => {
        setCookiePreferences({
            necessary: true,
            analytics: true
        });
        hideBanner();
    });

    // Refuser les cookies non-essentiels
    declineButton.addEventListener('click', () => {
        setCookiePreferences({
            necessary: true,
            analytics: false
        });
        hideBanner();
    });

    // Ouvrir les paramètres
    settingsButton.addEventListener('click', () => {
        cookieModal.classList.remove('hidden');
        // Charger les préférences actuelles
        loadCurrentPreferences();
    });

    // Fermer la modal
    modalCloseButton.addEventListener('click', closeModal);

    // Fermer la modal en cliquant à l'extérieur
    cookieModal.addEventListener('click', (e) => {
        if (e.target === cookieModal) {
            closeModal();
        }
    });

    // Sauvegarder les préférences personnalisées
    savePreferencesButton.addEventListener('click', () => {
        const analyticsChecked = document.getElementById('analytics-cookies').checked;

        setCookiePreferences({
            necessary: true,
            analytics: analyticsChecked
        });

        closeModal();
        hideBanner();
    });

    // Accepter tout depuis la modal
    acceptAllButton.addEventListener('click', () => {
        setCookiePreferences({
            necessary: true,
            analytics: true
        });

        // Mettre à jour le toggle
        document.getElementById('analytics-cookies').checked = true;

        closeModal();
        hideBanner();
    });

    function setCookiePreferences(preferences) {
        localStorage.setItem('cookieConsent', JSON.stringify({
            timestamp: Date.now(),
            preferences: preferences
        }));

        // Charger Google Analytics si accepté
        if (preferences.analytics) {
            loadGoogleAnalytics();
        }
    }

    function loadCurrentPreferences() {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            const data = JSON.parse(consent);
            document.getElementById('analytics-cookies').checked = data.preferences.analytics !== false;
        } else {
            // Par défaut, Analytics est coché
            document.getElementById('analytics-cookies').checked = true;
        }
    }

    function hideBanner() {
        cookieBanner.classList.add('translate-y-full');
    }

    function closeModal() {
        cookieModal.classList.add('hidden');
    }

    function loadGoogleAnalytics() {
        // Chargement de Google Tag Manager
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GTM-TQ6L9WFT';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-TQ6L9WFT');
    }

    // Charger GA si déjà consenti
    if (cookieConsent) {
        const data = JSON.parse(cookieConsent);
        if (data.preferences.analytics) {
            loadGoogleAnalytics();
        }
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initBackToTop();
    initCalendlyHighlight();
    initCookieConsent();
});