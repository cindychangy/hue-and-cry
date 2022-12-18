import { styled } from '@mui/material/styles';
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
  fontSize: 48,
  letterSpacing: -0.9,
  '& a:hover': {
    textDecoration: 'none',
    opacity: 0.7,
  },
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
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  height: '100vh',
  '& h3': {
    fontSize: 30,
    marginBottom: 24,
  },
}));

export const MobileIcon = styled(IconButton)(({ theme }) => ({
  display: 'none',
  '&.MuiIconButton-root': {
    color: theme.palette.common.black,
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    top: -2,
  },
  '& svg': {
    fontSize: 32,
  },
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    position: 'relative',
    top: -4,
  },
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  '& svg': {
    marginTop: 8,
    '&:first-of-type': {
      marginRight: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(2),
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
  },
}));
