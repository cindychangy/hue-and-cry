import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'components/atoms/link/Link';

export const PodcastWrapper = styled(Box)(({ theme }) => ({
  width: '100%', 
  display: 'flex',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const PodcastConatiner = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  margin: theme.spacing(0, 2, 2.5, 0),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(3.5)
  },
}));

export const ShowTitle = styled(Typography)(() => ({
  fontSize: '1.125rem',
  fontWeight: 700,
}));

export const LinkStyled = styled(Link)(() => ({
  fontSize: '1rem',
  textDecoration: 'underline',
  '&:hover': {
    textDecoration: 'none',
  }
}));
