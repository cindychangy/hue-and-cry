import { styled } from '@mui/system';
import Box from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'components/atoms/link/Link';

export const AboutHero = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.spacing(40),
  borderRadius: 0,
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('sm')]: {
    height: theme.spacing(25),
  }
}));

export const Title = styled(Typography)(({theme }) => ({
  fontSize: 27,
  lineHeight: 1.2,
  [theme.breakpoints.down('sm')]: {
    fontSize: 22,
  },
}));

export const TextStyled = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  lineHeight: 1.8,
  marginBottom: theme.spacing(4),
  'a': {
    fontWeight: 'bolder',
  }
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  textDecoration: 'underline',
}));

export const Cite = styled(Typography)(({ theme }) => ({
  opacity: 0.5,
  fontFamily: "'Neue Haas Grotesk', sans-serif",
  marginTop: theme.spacing(1.5),
}));
