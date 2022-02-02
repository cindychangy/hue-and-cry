import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Link } from 'components/atoms/link/Link';

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

export const Title = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  transition: '.2s, box-shadow .2s, -webkit-box-shadow .2s',
  textDecoration: 'none',
  lineHeight: 1,
  cursor: 'pointer',
  '&:hover': {
    boxShadow: 'inset 0 -3px #fff, inset 0 -6px 0 #000',
    textDecoration: 'none',
    opacity: 1,
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
    },
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.4rem',
  },
}));

export const Excerpt = styled(Box)(({ theme }) => ({
  display: '-webkit-box',
  width: '100%',
  overflow: 'hidden',
  webkitLineClamp: 2,
  webkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  margin: 0,
  height: '62px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    height: '68px',
  },
  'p': {
    fontSize: '0.96rem',
    color: '#505356',
    lineHeight: 1.6,
  }
}));