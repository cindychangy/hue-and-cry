import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  relatedContainer: {
    background: palette.grey[100],
  },
  imageBox: {
    height: spacing(15),
    width: spacing(20),
  },
  articleTitle: {
    fontFamily: 'gilroy-extrabold',
    fontSize: '0.95rem',
    lineHeight: 1.2,
    marginTop: spacing(1),
  }
}));
