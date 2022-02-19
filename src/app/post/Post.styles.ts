import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const ArticleBody = styled(Box)(({ theme }) => ({
  position: 'relative',
  top: theme.spacing(-0.6),
  '& p': {
    lineHeight: 1.8,
    fontSize: '1.12rem',
    '&:first-child': {
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
      fontFamily: "'gilroy-medium', sans-serif",
      fontSize: '0.9375rem',
      opacity: 0.6,
    },

    '& img': {
      maxWidth: '100%',
      height: 'auto',
    }
  },
  '& blockquote': {
    fontFamily: "'gilroy-medium', sans-serif",
    borderTop: `1px solid ${theme.palette.primary.main}`,
    margin: theme.spacing(8, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(4, 0, 6, 0),
    },
    '& p': {
      fontSize: '1.3rem',
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
        paddingTop: theme.spacing(2),
      },
      '& strong': {
        fontFamily: "'tiempos-semibold', serif",
      },
    },
  },
  '& cite': {
    fontSize: '1.0625rem',
    opacity: 0.6,
  },
  '& a': {
    color: theme.palette.common.black,
    textDecoration: 'none',
    boxShadow: `inset 0 -3px ${theme.palette.common.white}, inset 0 -5px 0 ${theme.palette.common.black}`,
    paddingBottom: theme.spacing(0.3),
  },
  '& a:hover': {
    transition: '.1s, box-shadow .1s, -webkit-box-shadow .1s',
    boxShadow: 'none',
  }
}));