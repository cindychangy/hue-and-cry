import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export const DividerStyled = styled(Divider)(({ theme }) => ({
  background: theme.palette.common.black,
  height: 2,
  marginBottom: theme.spacing(2),
}));

export const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
