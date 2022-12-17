import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

export const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
    opacity: '0.6',
  },
}));
