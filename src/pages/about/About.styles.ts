import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography, breakpoints }) => ({
  aboutHero: {
    width: '100%',
    height: spacing(40),
    marginBottom: spacing(10),
    [breakpoints.down('sm')]: {
      height: spacing(25),
    },
  },
  title: {
    fontSize: '2.75rem',
  },
  bodyText: {
    fontSize: '1.25rem',
    marginBottom: spacing(4),
  },
  link: {
    color: palette.common.black,
    fontWeight: typography.fontWeightBold,
  },
  cite: {
    opacity: 0.5,
    fontFamily: "'gilroy-medium', sans-serif",
    marginTop: spacing(1.5),
  }
}));
