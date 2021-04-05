import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  footer: {
    color: 'rgba(255,255,255,0.8)',
    background: palette.common.black,
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'gilroy-medium',
    fontSize: '0.9rem',
  },
}));
