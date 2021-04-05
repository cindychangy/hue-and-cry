import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(( { spacing, palette }) => ({
  videoTitle: {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginTop: spacing(2),
  },
  link: {
    textDecoration: 'underline',
    color: palette.common.black,

    '&:hover': {
      color: palette.grey[800],
      textDecoration: 'none',
    }
  }
}));
