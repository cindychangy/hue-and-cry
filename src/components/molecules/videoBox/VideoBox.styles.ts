import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Link } from 'components/atoms/link/Link';

export const VideoTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.6,
  marginTop: theme.spacing(2),
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'underline',
  color: theme.palette.common.black,

  '&:hover': {
    color: theme.palette.grey[800],
    textDecoration: 'none',
  }
}));
