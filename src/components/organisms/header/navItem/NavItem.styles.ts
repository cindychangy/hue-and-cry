import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

export const NavItem = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  letterSpacing: '0.1',
  marginRight: theme.spacing(3),
  textDecoration: 'none',
}));
