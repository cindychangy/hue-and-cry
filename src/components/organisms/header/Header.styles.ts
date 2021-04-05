import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(( { spacing, palette, breakpoints }) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing(2),
    margin: '0 auto 30px auto',
    [breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      margin: '0',
    },
    '& a': {
      color: palette.common.black,
    },
  },
  logo: {
    fontFamily: 'Bebas Neue',
    fontSize: '3rem',
    letterSpacing: -0.9,
    '& a:hover': {
      textDecoration: 'none',
      opacity: 0.8,
    }
  },
    navIemsContainer: {
      display: 'inline-block',
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  nav: {
    display: 'flex',
    alignItems: 'center',
    [breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  navMobile: {
    background: '#fafafa',
    flexBasis: '100%',
    paddingTop: spacing(5),
    borderTop: '1px solid #d7dcde',
    height: '100vh',

    '& h3': {
      fontSize: '2rem',
      marginBottom: '2rem',
    }
  },
  mobileIcon: {
    display: 'none',
    '&.MuiIconButton-root': {
      color: palette.common.black,
    },
    '& svg': {
      fontSize: '2rem',
    },
    [breakpoints.down('sm')]: {
      display: 'block',
      position: 'relative',
      top: '-7px',
    },
  },
  hide: {
    display: 'none',
  }
}));
