import { styled } from '@mui/system';
import Box from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'components/atoms/link/Link';

export const AboutHero = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.spacing(40),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('sm')]: {
    height: theme.spacing(25),
  }
}));

export const Title = styled(Typography)(() => ({
  fontSize: '2rem',
}));

export const TextStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  marginBottom: theme.spacing(4),
  lineHeight: 1.8,
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 700,
}));

export const Cite = styled(Typography)(({ theme }) => ({
  opacity: 0.5,
  fontFamily: "'gilroy-medium', sans-serif",
  marginTop: theme.spacing(1.5),
}));
