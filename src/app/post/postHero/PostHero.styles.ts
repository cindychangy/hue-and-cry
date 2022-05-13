import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const HeroContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.spacing(87),
  marginBottom: 0,
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    marginBottom: 0,
  },
}));

export const PostTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    fontSize: 53,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 40,
  },
}));

export const BlockImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  height: theme.spacing(75),
  width: '48%',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
}));

export const FeatureImage = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  width: theme.spacing(55),
  height: theme.spacing(55),
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: theme.spacing(50),
  },
  '& img': {
    width: 'auto',
    height: '100%',
  }
}));

export const BlockColor = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'absolute',
  background: theme.palette.common.black,
  color: theme.palette.common.white,
  height: theme.spacing(82),
  width: '60%',
  right: 0,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
}));

export const BlockText = styled(Box)(({ theme }) => ({
  width: '65%', 
  marginLeft: theme.spacing(30),
  paddingRight: theme.spacing(2.5),
  [theme.breakpoints.down('xl')]: {
    marginLeft: theme.spacing(20),
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 0,
    padding: theme.spacing(2.5),
  },
}));
