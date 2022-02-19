import { styled } from '@mui/system';
import Link from '@mui/material/Link';

export const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
    opacity: '0.7',
  }
}));
