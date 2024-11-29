/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all templates
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Extend Tailwind's default theme
      animation: {
        'spin-slow': 'spin 2s linear infinite', // Custom animation
      },
    },
  },
  // Add any required plugins here
  plugins: [],
};
