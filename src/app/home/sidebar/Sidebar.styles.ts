import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  aboutBox: {
    background: '#EFF1F5',
    padding: spacing(4),
    marginTop: spacing(6),
    color: palette.common.black,
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    '&:hover': {
      background: '#E4E7EC',
    }
  },
  aboutHeader: {
    fontFamily: 'Bebas Neue',
    fontSize: '2.8rem',
    lineHeight: 0.9,
    marginTop: spacing(4),
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
