import { createMuiTheme }  from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

const theme = createMuiTheme({
  palette: {
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
    fontFamily: 'Georgia, sans-serif',
    fontSize: 14,
    h1: {
      fontFamily: "'gilroy-extrabold', sans-serif",
      fontSize: '4.5rem',
      lineHeight: 1,
      [breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: "'gilroy-extrabold', sans-serif",
      fontSize: '1.438rem',
      lineHeight: 0.95,
    },
    h3: {
      fontFamily: "'gilroy-extrabold', sans-serif",
      fontWeight: 700,
      fontSize: '1.313rem',
      lineHeight: 1,
    },
    h4: {
      fontFamily: "'gilroy-medium', sans-serif",
      fontSize: '1rem',
      lineHeight: 1,
    },
    h5: {
      fontFamily: "'gilroy-medium', sans-serif",
      fontSize: '0.85rem',
      lineHeight: 1,
      letterSpacing: 1.3,
    },
  }
})
export default theme