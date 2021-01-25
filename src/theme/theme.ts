import { createMuiTheme }  from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#151A1F',
    },
    primary: {
      main: '#F86F35',
      light: '#FBF1E9',
    },
    secondary: {
      main: '#f0f0f0'
    },
    text: {
      primary: '#333'
    },
  },
  typography: {
    fontFamily: '"tiempos-regular", sans-serif',
    fontSize: 17,
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
      fontSize: '1.875rem',
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
      fontSize: '0.9rem',
      lineHeight: 1,
      letterSpacing: 0.5,
    },
  }
})
export default theme