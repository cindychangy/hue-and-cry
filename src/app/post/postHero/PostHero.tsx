import React from 'react';

import { Box, Typography, SubHeading } from 'components/atoms';
import { useStyles } from './PostHero.styles';
import { PostHeroProps } from './PostHero.types';

export const PostHero = ({ category, title, bgImage, featureImage }: PostHeroProps) => {
  const classes = useStyles();

  const backgroundImage = {
    backgroundImage: `url('${bgImage}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <Box className={classes.heroContainer}>
      <Box className={classes.blockImage} style={backgroundImage}>
        <Box className={classes.featureImage}>
          <img src={featureImage} alt={title} />
        </Box>
      </Box>
      <Box className={classes.blockColor}>
        <Box className={classes.blockText}>
          <SubHeading 
            heading={category} 
            link={`${encodeURIComponent(category.replace(/\s+/g, '-').toLowerCase())}`} 
            heroHeading
            />
          <Typography variant="h1" className={classes.postTitle}>{title}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
