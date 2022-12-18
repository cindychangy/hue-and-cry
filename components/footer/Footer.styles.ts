import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

export const Footer = styled(Typography)(({ theme }) => ({
  background: theme.palette.common.black,
  fontFamily: '"Neue Haas Grotesk", sans-serif',
  color: theme.palette.common.white,
  padding: theme.spacing(5, 0),
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('lg')]: {
    paddingTop: theme.spacing(4),
    marginTop: theme.spacing(6),
  },
  '& a': {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      display: 'block',
    },
    '&:hover': {
      color: theme.palette.common.white,
    }
  },
  '& svg': {
    fontSize: 19,
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  }
}));

export const FooterLogo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 36,
  color: theme.palette.common.white,
}));

export const Copyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontFamily: '"Neue Haas Grotesk", sans-serif',
  fontSize: 13,
  letterSpacing: '0.5px',
  [theme.breakpoints.down('lg')]: {
    marginBottom: theme.spacing(2.5),
  },
}));


