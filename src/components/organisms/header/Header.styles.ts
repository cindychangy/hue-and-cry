import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2),
  margin: '0 auto 30px auto',
  [theme.breakpoints.down('lg')]: {
    flexWrap: 'wrap',
    margin: '0',
  },
  '& a': {
    color: theme.palette.common.black,
  },
}));

export const Logo = styled(Typography)(() => ({
  fontFamily: 'Bebas Neue',
  fontSize: '3rem',
  letterSpacing: -0.9,
  '& a:hover': {
    textDecoration: 'none',
    opacity: 0.8,
  }
}));

export const NavItemsContainer = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const Nav = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));

export const NavMobile = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
  flexBasis: '100%',
  paddingTop: theme.spacing(5),
  borderTop: '1px solid #d7dcde',
  height: '100vh',
  '& h3': {
    fontSize: '1.85rem',
    marginBottom: '1.5rem',
  }
}));

export const MobileIcon = styled(IconButton)(({ theme }) => ({
  display: 'none',
  '&.MuiIconButton-root': {
    color: theme.palette.common.black,
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    top: '-2px',
  },
  '& svg': {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    position: 'relative',
    top: '-4px',
  },
}));