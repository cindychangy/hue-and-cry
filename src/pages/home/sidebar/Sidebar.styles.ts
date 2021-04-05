import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  aboutBox: {
    background: '#EFF1F5',
    padding: spacing(4),
    marginTop: spacing(6),
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  aboutHeader: {
    fontFamily: 'Bebas Neue',
    fontSize: '2.8rem',
    lineHeight: 0.9,
    marginTop: spacing(6),
  },
  aboutText: {
    fontFamily: '"gilroy-regular", sans-serif',
    fontWeight: 400,
    lineHeight: 1.3,
    marginTop: spacing(2),
  },
  articleTitle: {
    fontSize: '1.05rem',
    letterSpacing: '-0.2px',
  },
}));
