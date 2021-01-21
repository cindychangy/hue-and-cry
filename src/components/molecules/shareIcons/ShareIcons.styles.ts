import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  shareContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    border: '2px solid #e3e6e6',
    marginRight: '6px',
    opacity: 1,

    '&:hover': {
      background: 'transparent',
      border: '2px solid #d2d2d2',
    },
    '& > svg': {
      fontSize: '20px',
    }
  },
  attachement: {
    transform: 'rotate(-45deg)',
  }
}));
