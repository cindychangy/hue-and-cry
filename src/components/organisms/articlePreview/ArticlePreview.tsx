import React from 'react'

import { Box, Typography, SubHeading, Link } from 'components/atoms'
import { useStyles } from './ArticlePreview.styles';
import { ArticlePreviewProps } from './ArticlePreview.types'

export const ArticlePreview = ({ image, category, title, excerpt, categoryLink, articleSlug }: ArticlePreviewProps) => {
  const classes = useStyles();

  const featureImage = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <Box mb={1}>
      <Link href={articleSlug}>
        <Box className={classes.imageBox} style={featureImage}></Box>
      </Link>
      <SubHeading 
        heading={category}
        link={categoryLink}
      />
      <Typography variant="h2" gutterBottom>
        <Link href={articleSlug} className={classes.title}>
          {title}
        </Link>
      </Typography>
      <Typography 
        className={classes.excerpt}
        dangerouslySetInnerHTML={{__html: excerpt}}
      >
      </Typography>
    </Box>
  )
}
