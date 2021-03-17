import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography }) => ({
  showTitle: {
    fontWeight: typography.fontWeightBold,
  },
  link: {
    fontSize: '1rem',
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    }
  }
}));