import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(( { palette }) => ({
  copyright: {
    fontSize: '0.8rem',
    fontFamily: 'gilroy-regular',

    '& a': {
      color: palette.common.black,
      textDecoration: 'none',
    }
  },
}));
