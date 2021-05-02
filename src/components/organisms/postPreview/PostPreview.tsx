import React from 'react';
import LazyLoad from 'react-lazyload';

import { Box, Typography, SubHeading, Link } from 'components/atoms';
import { useStyles } from './PostPreview.styles';
import { PostPreviewProps } from './PostPreview.types';

export const PostPreview = ({ image, category, title, excerpt, categoryLink, slug }: PostPreviewProps) => {
  const classes = useStyles();

  const featureImage = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <Box mb={1}>
      <Link href={`/${encodeURIComponent(slug)}`}>
        <LazyLoad height={200} once>
          <Box className={classes.imageBox} style={featureImage}></Box>
        </LazyLoad>
      </Link>
      <SubHeading 
        heading={category}
        link={categoryLink}
      />
      <Typography variant="h2">
        <Link 
          href={slug} 
          className={classes.title}
        >
          {title}
        </Link>
      </Typography>
      <Box 
        className={classes.excerpt}
        dangerouslySetInnerHTML={{__html: excerpt}}
      >
      </Box>
    </Box>
  )
}
