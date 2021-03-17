import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  imageBox: {
    height: '214px',
    width: '100%',
    background: '#cecece',
    marginBottom: '14px',
  },
  title: {
    color: palette.common.black,
    transition: '.2s, box-shadow .2s, -webkit-box-shadow .2s',
    textDecoration: 'none',
    lineHeight: 1,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'inset 0 -3px #fff, inset 0 -6px 0 #000',
      textDecoration: 'none',
      opacity: 1,
    }
  },
  excerpt: {
    fontSize: '0.96rem',
  }
}));
