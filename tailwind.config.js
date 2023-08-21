/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'var(--white)',
      black: '#000',
      dark: 'var(--dark)',
      green: 'var(--green)',
      yellow: 'var(--yellow)',
      pink: 'var(--pink)',
      magenta: 'var(--magenta)',
      purple: {
        100: 'var(--purple-100)',
        200: 'var(--purple-200)',
      },
      blue: {
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
      },
      gray: {
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      spacing: {
        4.5: '18px',
      },
      boxShadow: {
        card: '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)',
        modal:
          '0px 18px 35px -4px rgba(0, 0, 0, 0.24), 0px 0px 2px 0px rgba(0, 0, 0, 0.24)',
        'primary-button': '0px 4px 12px 0px rgba(102, 102, 255, 0.24)',
        'stay-shadow': '0px 2px 3px 0px rgba(27, 29, 44, 0.18)',
        menu: '0px 20px 40px -4px rgba(145, 158, 171, 0.16)',
      },
      inset: {
        0.75: '3px',
      },
      backgroundOpacity: {
        15: '0.15',
      },
      gap: {
        15: '60px',
      },
      zIndex: {
        60: '60',
      },
      borderRadius: {
        '2sm': '4px',
        '8xl': '40px',
      },
      margin: {
        15: '60px',
        30: '120px',
        42: '168px',
      },
      padding: {
        15: '60px',
        30: '120px',
        42: '168px',
      },
      width: {
        4.5: '18px',
        15: '60px',
        18: '72px',
        30: '120px',
        50: '200px',
        120: '480px',
        153: '612px',
        360: '1440px',
      },
      maxWidth: {
        'content-wrapper': '1440px',
        'dashboard-wrapper': '1120px',
        'dashboard-wrapper-sidebar': '344px',
        'dashboard-wrapper-maincontent': '736px',
      },
      height: {
        4.5: '18px',
        15: '60px',
        18: '72px',
        30: '120px',
        50: '200px',
        120: '480px',
        153: '612px',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            translate: '0 0.5rem',
            opacity: '0',
          },
          '100%': {
            translate: '0 0',
            opacity: '1',
          },
        },
        popIn: {
          '0%': {
            opacity: '0',
            scale: '0.95',
          },
          '60%': {
            opacity: '0.75',
            scale: '1.02',
          },

          '100%': {
            opacity: '1',
            scale: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 500ms 0.1ms cubic-bezier(0.5, 0, 0, 1) normal both',
        'pop-in': 'popIn 200ms ease-out normal both',
      },
    },
  },
  plugins: [],
};
