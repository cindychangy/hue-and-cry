import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  articleBody: {
    position: 'relative',
    top: spacing(-0.6),
    '& p': {
      lineHeight: 1.8,
      '&:first-child': {
        marginTop: 0,
      },
    },
    '& h2': {
      marginTop: 0,
    },
    '& h3': {
      fontFamily: "'gilroy-extrabold', sans-serif",
      letterSpacing: -0.3,
      fontSize: '1.375rem',
      marginTop: 0,
    },
    '& figure': {
      textAlign: 'center',
      margin: spacing(4, 0),

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
      borderTop: `1px solid ${palette.primary.main}`,
      margin: spacing(8, 4),
      [breakpoints.down('sm')]: {
        margin: spacing(4, 0, 6, 0),
      },
      '& p': {
        fontSize: '1.3rem',
        paddingTop: spacing(4),
        [breakpoints.down('sm')]: {
          fontSize: '1.375rem',
          paddingTop: spacing(2),
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
      color: palette.common.black,
      textDecoration: 'none',
      boxShadow: `inset 0 -3px ${palette.common.white}, inset 0 -5px 0 ${palette.common.black}`,
      paddingBottom: spacing(0.3),
    },
    '& a:hover': {
      transition: '.1s, box-shadow .1s, -webkit-box-shadow .1s',
      boxShadow: 'none',
    }
  },
}));
