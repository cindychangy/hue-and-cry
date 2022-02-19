import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const HeroContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.spacing(87),
  marginBottom: 0,
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    marginBottom: 0,
  },
}));

export const PostTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '4.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3.6rem',
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
  [theme.breakpoints.down('sm')]: {
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
  [theme.breakpoints.down('xs')]: {
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
  background: '#151A1F',
  color: theme.palette.common.white,
  height: theme.spacing(82),
  width: '60%',
  right: 0,
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
}));

export const BlockText = styled(Box)(({ theme }) => ({
  width: '70%', 
  marginLeft: theme.spacing(30),
  paddingRight: theme.spacing(2.5),
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(18),
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    padding: theme.spacing(2.5),
  },
}));
