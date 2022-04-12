import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const ImageBox = styled(Box)(({ theme }) => ({
  height: theme.spacing(24),
  width: '100%',
  marginBottom: '14px',
  [theme.breakpoints.down('xs')]: {
    height: theme.spacing(34),
  },
  [theme.breakpoints.down('sm')]: {
    height: theme.spacing(30),
  },
}));

export const Title = styled('a')(({ theme }) => ({
  color: theme.palette.common.black,
  transition: '.1s, box-shadow .1s, -webkit-box-shadow .1s',
  textDecoration: 'none',
  lineHeight: 1,
  cursor: 'pointer',
  '&:hover': {
    boxShadow: 'inset 0 -3px #fff, inset 0 -11px 0 #FFBA9C',
    textDecoration: 'none',
    opacity: 1,
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
    },
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.7rem',
  },
}));

export const Excerpt = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.spacing(8),
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '2',
  // fontFamily: 'Neue Haas Grotesk',
  // fontSize: 1.3,
  // letterSpacing: 0.3,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    height: '68px',
  },
  'p': {
    fontSize: '0.96rem',
    color: '#505356',
    lineHeight: 1.6,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
  }
}));