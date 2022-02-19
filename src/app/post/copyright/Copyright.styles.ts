import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const Copyright = styled(Box)(({ theme }) => ({
  fontSize: '0.8rem',
  fontFamily: 'gilroy-regular',
  '& a': {
    color: theme.palette.common.black,
    textDecoration: 'none',
  }
}));
