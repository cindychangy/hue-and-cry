import { createTheme } from '@mui/material/styles';

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
      main: '#F0F0F0',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: '"tiempos-regular", sans-serif',
    h1: {
      fontFamily: '"Neue Haas Grotesk Bold", sans-serif',
      fontSize: 68,
      lineHeight: 1,
    },
    h2: {
      fontFamily: '"Neue Haas Grotesk Medium", sans-serif',
      fontSize: 48,
      lineHeight: 1,
    },
    h3: {
      fontFamily: '"Neue Haas Grotesk Medium", sans-serif',
      fontSize: 22,
      lineHeight: 1.1,
    },
    h4: {
      fontFamily: "'Neue Haas Grotesk Bold', sans-serif",
      fontSize: 19,
      lineHeight: 1,
    },
    body1: {
      fontSize: 16,
      fontFamily: '"tiempos-regular", sans-serif',
    },
    caption: {
      fontFamily: "'Neue Haas Grotesk Regular', sans-serif",
      fontSize: 14,
      lineHeight: 1,
    },
  },
});

export default theme;
