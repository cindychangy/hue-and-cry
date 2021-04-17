import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  ctaContainer: {
    height: spacing(32),
    color: palette.common.white,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: spacing(4),
    margin: spacing(8, 0),
    [breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  ctaTextWrapper: {
    width: '62%',
    margin: 'auto',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  ctaHeading: {
    fontSize: '3rem',
    marginBottom: spacing(3),
  },
  ctaText: {
    fontSize: '1rem',
  },
  seeMore: {
    display: 'block',
    marginTop: spacing(2),
    color: palette.common.white,
    textDecoration: 'underline',
    fontSize: '1rem',
  }
}));
