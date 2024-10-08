/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {

      boxShadow: {
        'input-focus': '5px 8px 4px 0px rgba(0, 0, 0, 0.5)', // Custom shadow for input
      },
      
      // Add custom scrollbar utilities here
      scrollbar: {
        none: {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, and Opera */
          },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, and Opera */
          },
        },
      }, ['responsive', 'hover']);
    },
  ],
}