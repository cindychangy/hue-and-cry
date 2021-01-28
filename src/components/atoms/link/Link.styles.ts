import { Link as MuiLink } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const Link = withStyles(({ palette }) => ({
  root: {
    textDecoration: 'none',
  },
  underlineHover: {
    '&:hover': {
      textDecoration: 'none',
      opacity: 0.7,
    }
  }
}))(MuiLink);