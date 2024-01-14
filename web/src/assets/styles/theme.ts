export default {
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  colors: {
    background: '#F6F5FC',
    primary: {
      lighter: '#E0E3FF',
      light: '#6674F4',
      main: '#5061FC',
      dark: '#3346F0'
    },
    warning: {
      light: '#FDA172',
      main: '#FC6A03',
      dark: '#DD571C'
    },
    danger: {
      light: '#F97171',
      main: '#FC5050',
      dark: '#F63131'
    },
    gray: {
      900: '#222222',
      200: '#BCBCBC',
      100: '#E5E5E5'
    },
    success: {
      main: '#51CA73'
    }
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: 'Sora,sans-serif',
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  }
} as const
