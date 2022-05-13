import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const FeatureContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  '& > a:hover': {
    opacity: 1,
  }
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  height: theme.spacing(24),
  width: '100%',
  marginBottom: theme.spacing(1),
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
    boxShadow: 'rgb(255 255 255) 0px -3px inset, rgb(255 172 108) 0px -11px 0px inset',
    textDecoration: 'none',
    opacity: 1,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 27,
  },
}));

export const Excerpt = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.spacing(8),
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '2',
  [theme.breakpoints.down('md')]: {
    height: theme.spacing(9),
  },
  'p': {
    fontSize: 16,
    lineHeight: 1.6,
    color: theme.palette.grey[700],
  }
}));