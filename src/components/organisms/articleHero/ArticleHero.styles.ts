import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, breakpoints }) => ({
  heroContainer: {
    width: '100%',
  },
  blockImage: {
    position: 'absolute',
    top: 0,
    height: '600px',
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
    width: '450px',
    height: '480px',
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
    height: '650px',
    width: '60%',
    right: 0,
    top: 0,
    zIndex: -1,
    [breakpoints.down('sm')]: {
      position: 'relative',
      width: '100%',
      height: 'auto',
    },
  },
  blockText: {
    width: '70%', 
    marginLeft: '200px',
    paddingRight: '20px',
    [breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      padding: '20px',
    },
  }
}));
