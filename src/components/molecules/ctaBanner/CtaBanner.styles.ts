import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'components/atoms/link/Link';

export const CtaContainer = styled(Box)(({ theme }) => ({
  height: theme.spacing(32),
  color: theme.palette.common.white,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
  },
}));

export const CtaTextWrapper = styled(Box)(({ theme }) => ({
  width: '62%',
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CtaHeading = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(3),
}));

export const CtaText = styled(Typography)(() => ({
  fontSize: '1rem',
}));

export const SeeMore = styled(Link)(({ theme }) => ({
  display: 'block',
  marginTop: theme.spacing(2),
  color: theme.palette.common.white,
  textDecoration: 'underline',
  fontSize: '1rem',
}));