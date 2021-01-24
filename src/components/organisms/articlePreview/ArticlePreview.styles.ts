import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  imageBox: {
    height: '248px',
    width: '265px',
    background: '#cecece',
    marginBottom: '14px',
  },
  title: {
    color: palette.common.black,
    transition: '.2s, box-shadow .2s, -webkit-box-shadow .2s',
    textDecoration: 'none',
    '&:hover': {
      boxShadow: 'inset 0 -3px 0 #141A20',
      textDecoration: 'none',
    }
  },
}));
