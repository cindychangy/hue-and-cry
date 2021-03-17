import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  articleBody: {
    position: 'relative',
    top: spacing(-0.6),
    '& p': {
      lineHeight: 1.7,
    },
    '& h2': {
      marginTop: 0,
    }
  },
}));
