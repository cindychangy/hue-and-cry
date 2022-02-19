import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  marginBottom: theme.spacing(2),
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  position: 'relative',
  top: theme.spacing(-0.4),
  '& svg': {
    fontSize: '1.7rem',
  }
}));
