import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  subHeading: {
    color: palette.primary.main,
    marginBottom: spacing(1.2),
  },
  subHeadingHero: {
    fontSize: '	0.9375rem',
  },
  categoryName: {
    letterSpacing: '0.2px',
    cursor: 'pointer',
  }
}));
