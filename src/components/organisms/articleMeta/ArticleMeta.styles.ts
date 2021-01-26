import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  metaContainer: {
    paddingBottom: spacing(1),
  },
  text: {
    fontFamily: '"gilroy-medium", sans-serif',
    fontSize: '0.9rem',
    marginTop: spacing(0.5),
  },
}));
