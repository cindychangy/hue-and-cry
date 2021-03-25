import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  commentsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: spacing(4, 0),
    '& > svg': {
      fontSize: '2rem',
      position: 'relative',
      top: spacing(-1),
      transform: 'scaleX(-1)',
    }
  },
  commentsTitle: {
    fontSize: '2.2rem',
    textAlign: 'center',
    marginRight: spacing(1),
  },
}));
