import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(( { spacing, palette }) => ({
  videoContainer: {
    width: '100%',
    height: spacing(20),
    background: '#e7e7e7',
  },
  videoTitle: {
    fontSize: '15px',
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
