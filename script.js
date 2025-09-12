// Landing Page JavaScript - Basic Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle menu visibility
            mobileMenu.classList.toggle('hidden');
            
            // Update ARIA attribute
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Change icon
            const icon = mobileMenuToggle.querySelector('svg path');
            if (!isExpanded) {
                // Change to X icon
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                // Change back to hamburger
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                
                // Reset icon to hamburger
                const icon = mobileMenuToggle.querySelector('svg path');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    
                    // Remove error styling on input
                    field.addEventListener('input', function() {
                        this.classList.remove('border-red-500');
                    });
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            // Email validation
            const emailField = this.querySelector('#email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField && !emailRegex.test(emailField.value)) {
                isValid = false;
                emailField.classList.add('border-red-500');
                
                // Show error message
                let errorMsg = emailField.nextElementSibling;
                if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                    errorMsg = document.createElement('p');
                    errorMsg.className = 'error-message text-red-500 text-sm mt-1';
                    errorMsg.textContent = 'Veuillez saisir une adresse email valide';
                    emailField.parentNode.appendChild(errorMsg);
                }
                
                emailField.addEventListener('input', function() {
                    this.classList.remove('border-red-500');
                    const errorMsg = this.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                });
            }
            
            if (!isValid) {
                e.preventDefault();
                
                // Show general error message
                let generalError = this.querySelector('.general-error');
                if (!generalError) {
                    generalError = document.createElement('div');
                    generalError.className = 'general-error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4';
                    generalError.textContent = 'Veuillez corriger les erreurs ci-dessus avant d\'envoyer le formulaire.';
                    this.insertBefore(generalError, this.firstChild);
                }
                
                // Scroll to form
                this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                return false;
            }
            
            // If valid, show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            
            // Remove any existing error messages
            const generalError = this.querySelector('.general-error');
            if (generalError) {
                generalError.remove();
            }
        });
    }
    
    // Service Cards Hover Effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Scroll-based Header Shadow
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    }
    
    // Simple Animation on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // CTA Button Click Tracking (for analytics)
    const ctaButtons = document.querySelectorAll('a[href="#contact"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Here you could add analytics tracking
            console.log('CTA clicked:', this.textContent.trim());
        });
    });
    
    // Phone Number Formatting (French format)
    const phoneInput = document.querySelector('#phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format as French phone number
            if (value.length > 0) {
                if (value.startsWith('33')) {
                    value = '+' + value;
                } else if (value.startsWith('0')) {
                    value = '+33 ' + value.substring(1);
                } else if (!value.startsWith('+')) {
                    value = '+33 ' + value;
                }
                
                // Add spaces for readability
                value = value.replace(/(\+33\s?)(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1$2 $3 $4 $5 $6');
            }
            
            e.target.value = value;
        });
    }
    
    // Success message display (for Formspree success)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
        successMessage.innerHTML = `
            <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Message envoyé avec succès ! Nous vous recontacterons rapidement.</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;
        document.body.appendChild(successMessage);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (successMessage.parentElement) {
                successMessage.remove();
            }
        }, 5000);
        
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});

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

// Performance optimization - lazy load images if any are added later
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading
initializeLazyLoading();

// Console welcome message
console.log('%cAI Assistant Landing Page', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cDéveloppé avec ❤️ pour les PME françaises', 'color: #6b7280; font-size: 14px;');