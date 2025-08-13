import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
       black75: 'rgba(0,0,0,0.75)', // For overlays/lightboxes,
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this matches your folder structure
    "./index.html",
  ],
  plugins: [],
};

export default config;
