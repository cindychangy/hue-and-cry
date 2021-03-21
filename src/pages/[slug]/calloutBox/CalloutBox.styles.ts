import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, typography, breakpoints, spacing }) => ({
  ctaBox: {
    background: palette.primary.light,
    padding: spacing(4),
    [breakpoints.down('xs')]: {
      padding: spacing(2),
    },
    '& a': {
      color: palette.common.black,
    },
    '& a:hover': {
      textDecoration: 'none',
    }
  },
  headline: {
    color: palette.primary.main,
    fontWeight: typography.fontWeightBold,
    marginBottom: spacing(2),
  },
  helpInfo: {
    fontSize: '1.1rem',
    paddingRight: spacing(2),
    [breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
  sourcesLinks: {
    fontSize: '1rem',
    marginTop: 0,
    [breakpoints.down('xs')]: {
      marginTop: spacing(2.5),
    },
    '& p a': {
      display: 'inline-block',
      paddingBottom: spacing(1.4),
    }
  }
}));
