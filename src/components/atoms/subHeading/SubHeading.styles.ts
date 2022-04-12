import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Link } from 'components/atoms/link/Link';

export const SubHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1.2),
  textTransform: 'uppercase', 
  letterSpacing: '1px',
}));

export const CategoryName = styled(Link)(() => ({
  letterSpacing: '0.2px',
  cursor: 'pointer',
}));
