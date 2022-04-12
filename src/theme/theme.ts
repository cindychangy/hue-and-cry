import { createTheme } from '@mui/material';

const theme = createTheme({ 
  palette: {
    common: {
      black: '#151A1F',
      white: '#FFFFFF',
    },
    primary: {
      main: '#F78250',
      light: '#FBF1E9',
    },
    secondary: {
      main: '#F0F0F0'
    },
    text: {
      primary: '#333'
    },
  },
  typography: {
    fontFamily: '"tiempos-regular", sans-serif',
    h1: {
      fontFamily: '"Neue Haas Grotesk Bold", sans-serif',
      fontSize: '4.25rem',
      lineHeight: 1.1,
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '2.5rem',
      // },
    },
    h2: {
      fontFamily: '"Neue Haas Grotesk Medium", sans-serif',
      fontSize: '1.375rem',
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Neue Haas Grotesk Medium", sans-serif',
      fontSize: '1.313rem',
      lineHeight: 1,
    },
    h4: {
      fontFamily: "'Neue Haas Grotesk Bold', sans-serif",
      fontSize: '1.2rem',
      lineHeight: 1,
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Neue Haas Grotesk Regular', sans-serif",
      fontSize: '0.9rem',
      lineHeight: 1,
    },
    body1: {
      fontSize: '1rem',
      fontFamily: '"tiempos-regular", sans-serif',
    },
    body2: {
      fontSize: '1.12rem',
      lineHeight: 1.8,
    }
  },
});

export default theme;