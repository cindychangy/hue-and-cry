import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const MetaContainer = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const MetaTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.2),
}));

export const TypographyStyled = styled(Typography)(() => ({
  fontFamily: '"Neue Haas Grotesk Regular", sans-serif',
  fontSize: 15,
}));

export const ListStyled = styled('ul')(() => ({
  fontFamily: '"Neue Haas Grotesk Regular", sans-serif',
  fontSize: 15,
  paddingLeft: 0,
  listStyle: 'none',
  marginTop: 0,
}));