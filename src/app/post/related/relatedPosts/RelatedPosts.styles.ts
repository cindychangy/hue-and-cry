import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const GridContainer = styled(Grid)(() => ({
  justifyContent: 'center',
}));

export const RelatedContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[100],
  marginBottom: theme.spacing(8),
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  height: theme.spacing(15),
  width: '100%',
}));

export const ArticleTitle = styled(Box)(({ theme }) => ({
  fontFamily: '"Neue Haas Grotesk Medium", sans-serif',
  letterSpacing: 0.25,
  fontSize: 17,
  lineHeight: 1.2,
  marginTop: theme.spacing(1),
}));
