import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, breakpoints, spacing }) => ({
  podcastWrapper: {
    width: '100%', 
    display: 'flex',
    flexWrap: 'wrap',
    [breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  podcastConatiner: {
    flexGrow: 1,
    margin: spacing(0, 2, 2.5, 0),
    [breakpoints.down('sm')]: {
      marginBottom: spacing(3.5),
    },
  },
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