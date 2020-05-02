module.exports = {
  theme: {
    container: {
      padding: {
        default: '2rem',
        lg: '6rem',
      }
    },
    fontFamily: {
      body: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'soft-blue': '#5368df',
        'soft-red': '#fa5757',
        'grayish-blue': '#9194a1',
        'very-dark-blue': '#252b46',
        'light-gray': '#f7f7f7',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
      },
      width: {
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
      },
      height: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
      },
      zIndex: {
        '-1': '-1',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
        '3xl': '4rem',
        '4xl': '6rem',
      },
      opacity: {
        '85': '0.85',
        '95': '0.95',
      },
      borderWidth: {
        '1/2': '0.5px',
      },
      letterSpacing: {
        'xl': '0.150em',
        '2xl': '0.250em',
        '3xl': '0.350em',
        '4xl': '0.450em',
      },
      screens: {
        'xs': '425px',
      }
    },
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'active'],
    borderColor: ['hover', 'focus', 'active'],
    borderWidth: ['hover', 'focus', 'active', 'last'],
    color: ['hover', 'focus', 'active'],
  },
  plugins: [],
}
