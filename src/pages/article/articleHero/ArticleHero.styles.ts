import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  heroContainer: {
    width: '100%',
    height: spacing(87),
    marginBottom: 0,
    [breakpoints.down('xs')]: {
      height: 'auto',
      marginBottom: spacing(5),
    },
  },
  blockImage: {
    position: 'absolute',
    height: spacing(75),
    width: '48%',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [breakpoints.down('sm')]: {
      position: 'relative',
      width: '100%',
      height: 'auto',
    },
  },
  featureImage: {
    overflow: 'hidden',
    width: spacing(55),
    height: spacing(55),
    objectFit: 'cover',
    [breakpoints.down('xs')]: {
      width: '100%',
      height: 'auto',
    },
    '& img': {
      width: '100%',
    }
  },
  blockColor: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    background: '#151A1F',
    color: palette.common.white,
    height: spacing(82),
    width: '60%',
    right: 0,
    zIndex: -1,
    [breakpoints.down('sm')]: {
      position: 'relative',
      width: '100%',
      height: 'auto',
    },
  },
  blockText: {
    width: '70%', 
    marginLeft: spacing(30),
    paddingRight: spacing(2.5),
    [breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      padding: spacing(2.5),
    },
  }
}));
