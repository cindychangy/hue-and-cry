import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(( { spacing, palette }) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing(2),
    margin: '0 auto 40px auto',
    '& a': {
      color: palette.common.black,
    }
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
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    fontSize: '1.4rem',
    marginRight: spacing(3),
  }
}));
