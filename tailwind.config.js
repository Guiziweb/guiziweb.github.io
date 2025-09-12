/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      // Design System Colors
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main primary
          600: '#2563eb', // Primary hover
          700: '#1d4ed8',
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
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Main success
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16'
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Main warning
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Main danger
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a'
        }
      },
      
      // Typography System
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      
      // Spacing System
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem'
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
        'spin-slow': 'spin 3s linear infinite',
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
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)'
      },
      
      // Border Radius System
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      
      // Enhanced Gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)'
      },
      
      // Backdrop Blur System
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px'
      },
      
      // Z-Index System
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      },
      
      // Container System
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }
      }
    }
  },
  plugins: [
    // Add custom utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Text utilities
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)'
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.15)'
        },
        
        // Glass morphism
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.25)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.18)'
        },
        '.glass-dark': {
          'background': 'rgba(0, 0, 0, 0.25)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)'
        },
        
        // Gradient text
        '.gradient-text': {
          'background': `linear-gradient(135deg, ${theme('colors.primary.500')}, ${theme('colors.accent.500')})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text'
        },
        
        // Enhanced focus states
        '.focus-primary': {
          '&:focus': {
            'outline': `2px solid ${theme('colors.primary.500')}`,
            'outline-offset': '2px'
          }
        },
        
        // Button variants
        '.btn': {
          'padding': '0.75rem 1.5rem',
          'border-radius': theme('borderRadius.lg'),
          'font-weight': theme('fontWeight.semibold'),
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          'cursor': 'pointer',
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'text-decoration': 'none'
        },
        '.btn-primary': {
          'background-color': theme('colors.primary.600'),
          'color': theme('colors.white'),
          'box-shadow': theme('boxShadow.soft-md'),
          '&:hover': {
            'background-color': theme('colors.primary.700'),
            'transform': 'translateY(-2px) scale(1.02)',
            'box-shadow': theme('boxShadow.soft-xl')
          },
          '&:active': {
            'transform': 'translateY(-1px) scale(1.01)'
          }
        },
        '.btn-secondary': {
          'background-color': 'transparent',
          'color': theme('colors.primary.600'),
          'border': `2px solid ${theme('colors.primary.600')}`,
          '&:hover': {
            'background-color': theme('colors.primary.50'),
            'transform': 'translateY(-1px) scale(1.02)',
            'box-shadow': `0 4px 6px -1px rgba(37, 99, 235, 0.2)`
          }
        },
        
        // Card variants
        '.card': {
          'background-color': theme('colors.white'),
          'border-radius': theme('borderRadius.xl'),
          'box-shadow': theme('boxShadow.soft-lg'),
          'border': `1px solid ${theme('colors.secondary.200')}`,
          'transition': 'all 0.3s ease'
        },
        '.card-hover': {
          '&:hover': {
            'transform': 'translateY(-8px)',
            'box-shadow': theme('boxShadow.soft-xl'),
            'border-color': theme('colors.primary.300')
          }
        },
        
        // Loading states
        '.loading': {
          'opacity': '0.6',
          'pointer-events': 'none',
          'position': 'relative'
        },
        '.loading::after': {
          'content': '""',
          'position': 'absolute',
          'top': '50%',
          'left': '50%',
          'margin': '-12px 0 0 -12px',
          'width': '24px',
          'height': '24px',
          'border': '2px solid #ffffff',
          'border-radius': '50%',
          'border-top-color': 'transparent',
          'animation': 'spin 1s linear infinite'
        },
        
        // Skeleton loaders
        '.skeleton': {
          'background': 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          'background-size': '200% 100%',
          'animation': 'shimmer 2s infinite'
        },
        
        // Stagger animation delays
        '.stagger-1': { 'animation-delay': '0.1s' },
        '.stagger-2': { 'animation-delay': '0.2s' },
        '.stagger-3': { 'animation-delay': '0.3s' },
        '.stagger-4': { 'animation-delay': '0.4s' },
        '.stagger-5': { 'animation-delay': '0.5s' },
        '.stagger-6': { 'animation-delay': '0.6s' }
      }
      
      addUtilities(newUtilities)
    }
  ]
}