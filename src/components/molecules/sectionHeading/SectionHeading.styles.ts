import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  divider: {
    background: palette.common.black,
    height: '2px',
    marginBottom: spacing(3),
  }
}));
