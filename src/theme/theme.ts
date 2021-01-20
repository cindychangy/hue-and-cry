import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F86F35'
    },
    secondary: {
      main: '#f0f0f0'
    },
    text: {
      primary: '#151A1F'
    },
  },
  typography: {
    fontFamily: 'Georgia, sans-serif',
    h1: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: '5.0625rem',
      lineHeight: 0.9,
    },
    h2: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: '3.0625rem',
      lineHeight: 0.95,
    },
    h3: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: '1.5625rem',
      lineHeight: 0.8,
    },
    h4: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: '1.5625rem',
      lineHeight: 0.8,
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '.8125rem',
      lineHeight: 0.8,
    },
  }
})
export default theme