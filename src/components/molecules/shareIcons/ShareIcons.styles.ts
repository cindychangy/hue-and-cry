import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  shareContainer: {
    display: 'flex',
    alignContent: 'center',
    paddingTop: spacing(1),
  },
  button: {
    border: `1px solid ${palette.grey[300]}`,
    marginRight: spacing(0.5),
    opacity: 1,
    height: spacing(6),
    width: spacing(6),
    color: palette.text.primary,

    '&:hover': {
      background: '#efefef',
      border: `none`,
    },
    '& svg': {
      fontSize: '1.1rem',
    }
  },
  attachement: {
    transform: 'rotate(-45deg)',
  }
}));
