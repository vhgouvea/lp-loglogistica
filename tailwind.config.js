module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {},
      container: {
        center: true,
        screens: {
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: '2rem',
        },
      },
    },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        title: ['Unbounded Variable', 'sans-serif'],
      },
      fontSize: {
        '3xl': '2rem',
      },
      textColor: {
        title: '#353535', // Cor personalizada para h1
        text: '#818181',   // Cor personalizada para p
      }
    },
  },
  plugins: [],
};

