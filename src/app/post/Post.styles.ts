import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const ArticleBody = styled(Box)(({ theme }) => ({
  position: 'relative',
  top: theme.spacing(-0.6),
  '& p': {
    fontSize: 18,
    lineHeight: 1.8,
    '&:first-of-type': {
      marginTop: 0,
    },
  },
  '& h2': {
    marginTop: 0,
  },
  '& h3': {
    fontSize: '1.375rem',
    marginTop: theme.spacing(3),
  },
  '& figure': {
    textAlign: 'center',
    margin: theme.spacing(4, 0),
    '& figcaption': {
      fontFamily: "'Neue Haas Grotesk Regular', sans-serif",
      fontSize: 15,
      color: theme.palette.grey[500],
    },
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  '& blockquote': {
    fontFamily: "'Neue Haas Grotesk Regular', sans-serif",
    borderTop: `1px solid ${theme.palette.primary.main}`,
    margin: theme.spacing(8, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(4, 0, 6, 0),
    },
    '& p': {
      paddingTop: theme.spacing(4),
      '& strong': {
        fontFamily: "'Neue Haas Grotesk Bold', serif",
        fontSize: 24,
        lineHeight: 1.2,
        letterSpacing: 0.2,
      },
    },
  },
  '& figcaption a': {
    boxShadow: 'none',
    textDecoration: 'none',
    color: theme.palette.grey[500],
  },
  '& cite': {
    fontSize: '1rem',
    color: theme.palette.grey[500],
    fontStyle: 'normal',
  },
  '& a': {
    color: theme.palette.grey[500],
    textDecoration: 'none',
    paddingBottom: theme.spacing(0.3),
  },
  '& a:hover': {
    transition: '.1s, box-shadow .1s, -webkit-box-shadow .1s',
    boxShadow: 'none',
  },
}));
