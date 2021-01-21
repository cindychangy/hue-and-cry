import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  subHeading: {
    color: palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: 500,
  },
}));
