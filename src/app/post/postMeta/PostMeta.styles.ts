import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'components/atoms/link/Link';

export const MetaContainer = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const MetaTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.2),
}));

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontFamily: '"Neue Haas Grotesk Regular", sans-serif',
  fontSize: '0.9rem',
  lineHeight: 1.2,
  color: theme.palette.common.black,
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  fontFamily: '"Neue Haas Grotesk Regular", sans-serif',
  fontSize: '0.9rem',
  lineHeight: 1.2,
  color: theme.palette.common.black,
}));


export const ListStyled = styled('ul')(() => ({
  fontFamily: '"Neue Haas Grotesk Regular", sans-serif',
  fontSize: '0.9rem',
  paddingLeft: 0,
  listStyle: 'none',
  marginTop: 0,
  '& li': {
    lineHeight: 1.4,
  }
}));