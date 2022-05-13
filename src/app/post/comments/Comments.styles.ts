import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const CommentsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(4, 0),
  '& > svg': {
    fontSize: 32,
    position: 'relative',
    top: theme.spacing(-1),
    transform: 'scaleX(-1)',
  }
}));

export const CommentsTitle = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  textAlign: 'center',
  marginRight: theme.spacing(1),
}));