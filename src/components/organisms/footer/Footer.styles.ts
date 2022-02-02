import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

export const Footer = styled(Typography)(({ theme }) => ({
  color: 'rgba(255,255,255,0.8)',
  background: theme.palette.common.black,
  height: theme.spacing(7),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'gilroy-medium',
  fontSize: '0.8rem',
  marginTop: theme.spacing(3),

  '& a': {
    color: 'rgba(255,255,255,0.8)',

    '&:hover': {
      color: theme.palette.common.white,
    }
  }
}));
