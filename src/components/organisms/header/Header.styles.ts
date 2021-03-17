import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(( { spacing, palette, breakpoints }) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing(2),
    margin: '0 auto 40px auto',
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
  navItem: {
    fontSize: '1.4rem',
    marginRight: spacing(3),
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
    },
  }
}));
