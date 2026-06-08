import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#1A3C6E',
        secondary: '#F4B860',
        success:   '#22C55E',
        warning:   '#F59E0B',
        error:     '#EF4444',
      },
    },
  },
  plugins: [],
};
export default config;
