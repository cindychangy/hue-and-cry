import React from 'react'

import { Box, Typography, SubHeading } from 'components/atoms'
import { useStyles } from './ArticleHero.styles';
import { ArticleHeroProps } from './ArticleHero.types'

export const ArticleHero = ({ category, title, bgImage, featureImage }: ArticleHeroProps) => {
  const classes = useStyles();

  const backgroundImage = {
    backgroundImage: `url('${bgImage}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <Box className={classes.heroContainer}>
      <Box className={classes.blockImage} style={backgroundImage}>
        <Box className={classes.featureImage}>
          <img src={featureImage}/>
        </Box>
      </Box>
      <Box className={classes.blockColor}>
        <Box className={classes.blockText}>
          <SubHeading 
            heading={category} 
          />
          <Typography variant="h1">
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
