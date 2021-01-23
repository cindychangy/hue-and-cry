import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, typography }) => ({
  ctaBox: {
    background: palette.primary.light,
  },
  headline: {
    color: palette.primary.main,
    fontWeight: typography.fontWeightBold,
  },
  helpInfo: {
    fontSize: '1.1rem',
  },
  sourcesLinks: {
    fontSize: '1rem',
  }
}));
