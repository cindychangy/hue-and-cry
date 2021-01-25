import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  articleBody: {
    '& p': {
      lineHeight: 1.7,
    },
    '& h2': {
      marginTop: 0,
    }
  },
}));
