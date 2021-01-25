import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignContent: 'center',
  },
  icon: {
    marginLeft: '4px',
    position: 'relative',
    top: '-4px',
  }
}));
