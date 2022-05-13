import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(0.5),
  [theme.breakpoints.down('lg')]: {
    paddingLeft: 0,
  },
}));

export const AboutBox = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  background: theme.palette.grey[100],
  padding: theme.spacing(4),
  marginTop: theme.spacing(6),
  color: theme.palette.common.black,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  '& a': {
    fontWeight: 600,
  }
}));

export const AboutHeader = styled(Typography)(({ theme }) => ({
  fontFamily: 'Neue Haas Grotesk Bold',
  fontSize: 32,
  lineHeight: 1,
  '& > span': {
    display: 'block',
    [theme.breakpoints.down('lg')]: {
      display: 'inline-block',
    },
  },
  '& > span:not(:first-of-type)': {
    marginLeft: 0,
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(0.6),
    },
  }
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: 17,
  fontFamily: '"Neue Haas Grotesk", sans-serif',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: 19,
  },
}));

export const ArticleTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
  },
}));

