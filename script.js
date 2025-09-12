// Auto-Entrepreneur IA - Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    showFieldError(field, 'Ce champ est requis');
                    isValid = false;
                } else {
                    clearFieldError(field);
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('#email');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    showFieldError(emailField, 'Veuillez entrer une adresse email valide');
                    isValid = false;
                } else {
                    clearFieldError(emailField);
                }
            }
            
            // Phone validation (optional but if provided, should be valid)
            const phoneField = contactForm.querySelector('#phone');
            if (phoneField && phoneField.value) {
                const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
                if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
                    showFieldError(phoneField, 'Veuillez entrer un numéro de téléphone valide');
                    isValid = false;
                } else {
                    clearFieldError(phoneField);
                }
            }
            
            if (isValid) {
                submitForm(contactForm);
            }
        });
    }
    
    // Form field error handling
    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.classList.add('border-red-500', 'bg-red-50');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'text-red-600 text-sm mt-1';
        errorDiv.textContent = message;
        errorDiv.setAttribute('data-field-error', field.id);
        
        field.parentNode.appendChild(errorDiv);
    }
    
    function clearFieldError(field) {
        field.classList.remove('border-red-500', 'bg-red-50');
        
        const existingError = field.parentNode.querySelector('[data-field-error="' + field.id + '"]');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // Form submission
    function submitForm(form) {
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner mr-2"></span>Envoi en cours...';
        submitButton.classList.add('loading');
        
        // Create FormData object
        const formData = new FormData(form);
        
        // Submit to Formspree (replace YOUR_FORM_ID with actual Formspree form ID)
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showSuccessMessage();
                form.reset();
            } else {
                throw new Error('Erreur lors de l\'envoi du formulaire');
            }
        })
        .catch(error => {
            showErrorMessage('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
            console.error('Form submission error:', error);
        })
        .finally(() => {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            submitButton.classList.remove('loading');
        });
    }
    
    function showSuccessMessage() {
        const contactSection = document.querySelector('#contact');
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success mb-6';
        alertDiv.innerHTML = `
            <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Merci pour votre demande ! Nous vous recontacterons dans les 24 heures.</span>
            </div>
        `;
        
        const formContainer = contactSection.querySelector('.max-w-4xl');
        formContainer.insertBefore(alertDiv, formContainer.firstChild);
        
        // Remove message after 10 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 10000);
        
        // Scroll to success message
        alertDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    function showErrorMessage(message) {
        const contactSection = document.querySelector('#contact');
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-error mb-6';
        alertDiv.innerHTML = `
            <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>${message}</span>
            </div>
        `;
        
        const formContainer = contactSection.querySelector('.max-w-4xl');
        formContainer.insertBefore(alertDiv, formContainer.firstChild);
        
        // Remove message after 10 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 10000);
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .bg-gray-50, .bg-blue-50');
    animateElements.forEach(el => observer.observe(el));
    
    // Header background on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('backdrop-blur', 'bg-white/95');
                header.classList.remove('bg-white');
            } else {
                header.classList.remove('backdrop-blur', 'bg-white/95');
                header.classList.add('bg-white');
            }
        });
    }
    
    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
    
    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        
        // Enter key on buttons
        if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
            e.target.click();
        }
    });
    
    // Form auto-save to localStorage (for better UX)
    const formFields = contactForm?.querySelectorAll('input, textarea, select');
    if (formFields) {
        formFields.forEach(field => {
            // Load saved data
            const savedValue = localStorage.getItem(`form_${field.id}`);
            if (savedValue && field.type !== 'checkbox' && field.type !== 'radio') {
                field.value = savedValue;
            } else if (savedValue && (field.type === 'checkbox' || field.type === 'radio')) {
                field.checked = savedValue === 'true';
            }
            
            // Save data on change
            field.addEventListener('input', function() {
                if (field.type === 'checkbox' || field.type === 'radio') {
                    localStorage.setItem(`form_${field.id}`, field.checked);
                } else {
                    localStorage.setItem(`form_${field.id}`, field.value);
                }
            });
        });
        
        // Clear saved data on successful submission
        contactForm.addEventListener('formsubmitted', function() {
            formFields.forEach(field => {
                localStorage.removeItem(`form_${field.id}`);
            });
        });
    }
    
    // Performance optimization: Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Analytics event tracking (placeholder for Google Analytics or similar)
    function trackEvent(eventName, category, label) {
        // Replace with your analytics implementation
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: category,
                event_label: label
            });
        }
        
        console.log('Event tracked:', eventName, category, label);
    }
    
    // Track important interactions
    const ctaButtons = document.querySelectorAll('a[href="#contact"], button[type="submit"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isForm = button.type === 'submit';
            trackEvent('cta_click', isForm ? 'form' : 'navigation', button.textContent.trim());
        });
    });
    
    // Track section views
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackEvent('section_view', 'scroll', entry.target.id);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
    
    console.log('Auto-Entrepreneur IA - Landing page initialized successfully');
});