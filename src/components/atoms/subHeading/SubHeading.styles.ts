import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  subHeading: {
    color: palette.primary.main,
    marginBottom: '6px',
  },
}));
