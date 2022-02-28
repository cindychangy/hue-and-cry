import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Bebas Neue',
  fontSize: '4.2rem',
  lineHeight: '4.2rem',
  marginBottom: theme.spacing(1),
}));

export const BoxGray = styled(Box)(({ theme }) => ({
  background: '#F1F1F1',
  padding: theme.spacing(5),
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(2),
  width: '100%',
}));

export const ParagraphStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const BoxHeader = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  marginBottom: theme.spacing(3),
}));

export const TimelineBio = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignContnet: 'center',
  flex: 2,
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }
}));

export const CaseMeta = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 2),
    textAlign: 'left',
  }
}));

export const TimelineYear = styled(TimelineOppositeContent)(({ theme }) => ({
  fontFamily: "'tiempos-semibold', serif",
  fontSize: '1.5rem',
  lineHeight: 1,
  width: theme.spacing(20),
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
    padding: 0,
    paddingTop: theme.spacing(3),
  }
}));

export const TimelineName = styled(Typography)(( { theme }) => ({
  fontFamily: "'tiempos-semibold', serif",
  fontSize: '1.5rem',
  marginBottom: theme.spacing(0.125),
  marginTop: theme.spacing(-1),
}));

export const TimelineLocation = styled(Typography)(({ theme }) => ({
  fontFamily: "'gilroy-medium', sans-serif",
  fontSize: '1rem',
  color: '#959595',
  textAlign: 'right',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
  }
}));

export const TimelineSeparatorStyled = styled(TimelineSeparator)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

export const TimelineCase = styled(TimelineItem)(({ theme }) => ({
  borderBottom: 0,
  '&::before': {
    flex: 0,
    marginBottom: theme.spacing(24),
    paddingBottom: 0,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      content: 'none',
    }
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    paddingBottom: theme.spacing(2),
    borderBottom: '1px solid #E7E7E7',
  }
}));

export const TimelineLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    opacity: 0.7,
  }
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flexShrink: '0',
  alignSelf: 'center',
  height: '90px',
  width: '90px',
  borderRadius: '50%',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(1),
  }
}));

