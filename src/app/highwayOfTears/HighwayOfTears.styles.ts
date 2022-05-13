import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Neue Haas Grotesk Bold',
  fontSize: 67,
  lineHeight: 1,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: 43,
  }
}));

export const BoxGray = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[100],
  padding: theme.spacing(5),
  margin: theme.spacing(0, 2, 2, 0),
  width: '100%',
}));

export const ParagraphStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const SubTextStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  'span': {
    display: 'inline-block',
    fontWeight: 900,
    fontSize: 18,
    lineHeight: 1,
    marginTop: theme.spacing(2),
    '& svg': {
      position: 'relative',
      top: theme.spacing(0.725),
    }
  },
  [theme.breakpoints.down('lg')]: {
    'span': {
      lineHeight: 1.6,
    },
    'svg': {
      display: 'none',
    }
  }
}));

export const BoxHeader = styled(Typography)(({ theme }) => ({
  fontSize: 19,
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
  fontFamily: "'Neue Haas Grotesk Medium', serif",
  fontSize: 24,
  lineHeight: 1,
  width: theme.spacing(20),
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
    padding: 0,
    paddingTop: theme.spacing(3),
  }
}));

export const TimelineName = styled(Typography)(( { theme }) => ({
  fontFamily: "'Neue Haas Grotesk Medium', serif",
  fontSize: 24,
  margin: theme.spacing(-0.725, 0, 0.125, 0),
}));

export const TimelineLocation = styled(Typography)(({ theme }) => ({
  fontFamily: "'Neue Haas Grotesk', sans-serif",
  color: theme.palette.grey[500],
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
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
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
  height: theme.spacing(11.25),
  width: theme.spacing(11.25),
  borderRadius: '50%',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(1),
  }
}));


