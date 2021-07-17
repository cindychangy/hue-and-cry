import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  gridContainer: {
    justifyContent: 'center',
  },
  relatedContainer: {
    background: palette.grey[100],
    marginBottom: spacing(8),
  },
  imageBox: {
    height: spacing(15),
    width: '100%',
  },
  articleTitle: {
    fontFamily: 'gilroy-extrabold',
    fontSize: '0.95rem',
    lineHeight: 1.2,
    marginTop: spacing(1),
  }
}));
