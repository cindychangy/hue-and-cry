import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  footer: {
    color: 'rgba(255,255,255,0.8)',
    background: palette.common.black,
    height: spacing(7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'gilroy-medium',
    fontSize: '0.8rem',
    marginTop: spacing(3),

    '& a': {
      color: 'rgba(255,255,255,0.8)',

      '&:hover': {
        color: palette.common.white,
      }
    }
  },
}));
