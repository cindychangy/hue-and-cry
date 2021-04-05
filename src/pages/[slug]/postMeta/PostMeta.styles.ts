import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  metaContainer: {
    paddingBottom: spacing(1),
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  metaTitle: {
    marginBottom: spacing(1.2),
  },
  text: {
    fontFamily: '"gilroy-medium", sans-serif',
    fontSize: '0.9rem',
    lineHeight: 1.2,
    color: '#464646',
  },
  list: {
    paddingLeft: 0,
    listStyle: 'none',
    marginTop: 0,

    '& li': {
      lineHeight: 1.4,
    }
  }
}));
