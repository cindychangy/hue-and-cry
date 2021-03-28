import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  articleBody: {
    position: 'relative',
    top: spacing(-0.6),
    '& p': {
      lineHeight: 1.7,
    },
    '& h2': {
      marginTop: 0,
    },
    '& h3': {
      fontFamily: "'gilroy-extrabold', sans-serif",
      letterSpacing: -0.3,
      fontSize: 22,
      marginTop: 0,
    },
    '& figure': {
      textAlign: 'center',
      margin: spacing(4, 0),

      '& figcaption': {
        fontFamily: "'gilroy-medium', sans-serif",
        fontSize: 15,
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
        fontSize: 24,
        margin: spacing(4, 0, 2.5, 0),
        [breakpoints.down('sm')]: {
          fontSize: 22,
          margin: spacing(2, 0, 2, 0)
        },
      }
    },
    '& cite': {
      fontSize: 17,
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
