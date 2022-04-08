import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: 4,
  [theme.breakpoints.down('lg')]: {
    paddingLeft: 0,
  },
}));

export const AboutBox = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  background: '#EFF1F5',
  padding: theme.spacing(4),
  marginTop: theme.spacing(6),
  color: theme.palette.common.black,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  '&:hover': {
    background: '#E4E7EC',
  },
}));

export const AboutHeader = styled(Typography)(({ theme }) => ({
  fontFamily: 'Bebas Neue',
  fontSize: '2.8rem',
  lineHeight: 0.9,
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
  fontSize: '1rem',
  fontFamily: '"gilroy-regular", sans-serif',
  fontWeight: 400,
  lineHeight: 1.3,
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

export const ArticleTitle = styled(Typography)(() => ({
  fontSize: '1.05rem',
  letterSpacing: '-0.2px',
}));

