import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const ShareContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  paddingTop: theme.spacing(1),
}));

export const IconButtonStyled = styled('a')(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  marginRight: theme.spacing(0.5),
  opacity: 1,
  height: theme.spacing(6),
  width: theme.spacing(6),
  borderRadius: '50%',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  '&:hover': {
    background: '#efefef',
    border: `none`,
  },
  '& svg': {
    fontSize: '1.2rem',
    alignSelf: 'center',
  }
}));
