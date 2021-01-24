import React from 'react'

import { Box, Typography, SubHeading, Link } from 'components/atoms'
import { useStyles } from './ArticlePreview.styles';
import { ArticlePreviewProps } from './ArticlePreview.types'

export const ArticlePreview = ({ image, category, title, excerpt, categoryLink, articleLink }: ArticlePreviewProps) => {
  const classes = useStyles();

  const featureImage = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <Box>
      <Box className={classes.imageBox} style={featureImage}></Box>
      <SubHeading 
        heading={category}
        link={categoryLink}
      />
      <Typography variant="h2" gutterBottom>
        <Link href={articleLink} className={classes.title}>
          {title}
        </Link>
      </Typography>
      <Typography>{excerpt}</Typography>
    </Box>
  )
}
