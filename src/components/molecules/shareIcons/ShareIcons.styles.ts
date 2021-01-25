import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  shareContainer: {
    display: 'flex',
    alignContent: 'center',
    paddingTop: '8px',
  },
  button: {
    border: '1px solid #d8d8d8',
    marginRight: '6px',
    opacity: 1,
    height: '42px',
    width: '42px',
    color: palette.text.primary,

    '&:hover': {
      background: 'transparent',
      border: '1px solid #e8e8e8',
    },
    '& svg': {
      fontSize: '1.1rem',
    }
  },
  attachement: {
    transform: 'rotate(-45deg)',
  }
}));
