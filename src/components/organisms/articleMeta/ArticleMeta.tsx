import React from 'react'

import { Box, Typography } from 'components/atoms'
import { ShareIcons } from 'components/molecules'
import { useStyles } from './ArticleMeta.styles';
import { ArticleMetaProps } from './ArticleMeta.types'


export const ArticleMeta = ({ category, location, year }: ArticleMetaProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="h5" color="primary">Category</Typography>
        <Typography className={classes.text}>{category}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" color="primary">Location</Typography>
        <Typography className={classes.text}>{location}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" color="primary">Year</Typography>
        <Typography className={classes.text}>{year}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" color="primary">Share</Typography>
        <ShareIcons/>
      </Box>
    </Box>
  )
}
