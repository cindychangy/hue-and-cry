import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    display: 'flex',
    alignContent: 'center',
    marginBottom: spacing(2),
  },
  icon: {
    marginLeft: spacing(0.5),
    position: 'relative',
    top: spacing(-0.4),
    '& svg': {
      fontSize: '1.7rem',
    }
  }
}));
