import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const CtaBox = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: theme.spacing(5),
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(2.5),
  },
  '& a': {
    color: theme.palette.common.black,
  },
  '& a:hover': {
    textDecoration: 'none',
  },
  '& strong': {
    fontFamily: "'tiempos-semibold', serif",
  },
}));

export const Headline = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

export const HelpInfo = styled(Box)(({ theme }) => ({
  fontSize: '1.1rem',
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down('xs')]: {
    paddingRight: 0,
  },
}));

export const SourcesLinks = styled(Box)(({ theme }) => ({
  fontSize: '1rem',
  marginTop: 0,
  [theme.breakpoints.down('xs')]: {
    marginTop: theme.spacing(2.5),
  },
  '& p a': {
    display: 'inline-block',
    paddingBottom: theme.spacing(1.4),
  }
}));
