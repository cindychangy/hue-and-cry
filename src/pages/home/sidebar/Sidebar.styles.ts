import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  aboutBox: {
    background: palette.grey[200],
    padding: spacing(2),
  },
  aboutHeader: {
    fontFamily: 'Bebas Neue',
    fontSize: '2rem',
  },
}));
