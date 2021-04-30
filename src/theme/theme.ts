import { createMuiTheme }  from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

const theme = createMuiTheme({
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
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: '5.625rem',
      lineHeight: 0.9,
      textTransform: 'uppercase',
      [breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: '1.975rem',
      textTransform: 'uppercase',
      lineHeight: 0.95,
    },
    h3: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: '1.313rem',
      textTransform: 'uppercase',
      lineHeight: 1,
    },
    h4: {
      fontFamily: "'gilroy-extrabold', sans-serif",
      fontSize: '1.2rem',
      lineHeight: 1,
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'gilroy-medium', sans-serif",
      fontSize: '0.89rem',
      lineHeight: 1,
      letterSpacing: 0.5,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '1.12rem',
      lineHeight: 1.8,
    }
  }
})
export default theme