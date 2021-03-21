import React from 'react'

import { Box, Typography, SubHeading, Link } from 'components/atoms'
import { useStyles } from './PostPreview.styles';
import { PostPreviewProps } from './PostPreview.types'

export const PostPreview = ({ image, category, title, excerpt, categoryLink, postSlug }: PostPreviewProps) => {
  const classes = useStyles();

  const featureImage = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <Box mb={1}>
      <Link href={`/${encodeURIComponent(postSlug)}`}>
        <Box className={classes.imageBox} style={featureImage}></Box>
      </Link>
      <SubHeading 
        heading={category}
        link={categoryLink}
      />
      <Typography variant="h2" gutterBottom>
        <Link 
          href={postSlug} 
          className={classes.title}
        >
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
