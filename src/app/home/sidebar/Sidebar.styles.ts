import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  sidebarWrapper: {
    paddingLeft: 4,
    [breakpoints.down('lg')]: {
      paddingLeft: 0,
    },
  },
  aboutBox: {
    textAlign: 'left',
    background: '#EFF1F5',
    padding: spacing(4),
    marginTop: spacing(6),
    color: palette.common.black,
    [breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    '&:hover': {
      background: '#E4E7EC',
    },
  },
  aboutHeader: {
    fontFamily: 'Bebas Neue',
    fontSize: '2.8rem',
    lineHeight: 0.9,
    marginTop: spacing(4),
    [breakpoints.down('lg')]: {
      marginTop: 0,
    },
    '& > span': {
      display: 'block',
      [breakpoints.down('lg')]: {
        display: 'inline-block',
      },
    },
    '& > span:not(:first-child)': {
      marginLeft: 0,
      [breakpoints.down('lg')]: {
        marginLeft: spacing(0.6),
      },
    }
  },
  aboutText: {
    fontSize: '1rem',
    fontFamily: '"gilroy-regular", sans-serif',
    fontWeight: 400,
    lineHeight: 1.3,
    marginTop: spacing(2),
    [breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
  },
  articleTitle: {
    fontSize: '1.05rem',
    letterSpacing: '-0.2px',
  },
}));
