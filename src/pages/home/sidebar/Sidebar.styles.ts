import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  aboutBox: {
    background: palette.grey[200],
    padding: spacing(2),
    marginTop: spacing(6),
  },
  aboutHeader: {
    fontFamily: 'Bebas Neue',
    fontSize: '2rem',
  },
  articleTitle: {
    fontSize: '1.1rem',
  }
}));
