import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  ctaBox: {
    background: palette.primary.light,
    padding: '30px',
    [breakpoints.down('xs')]: {
      padding: '20px',
    },
  },
  headline: {
    color: palette.primary.main,
    fontWeight: typography.fontWeightBold,
    marginBottom: '18px',
  },
  helpInfo: {
    fontSize: '1.1rem',
  },
  sourcesLinks: {
    fontSize: '1rem',
    marginTop: 0,
    [breakpoints.down('xs')]: {
      marginTop: '30px',
    },
  }
}));
