import React from 'react';

import { Box, Typography } from 'components/atoms';
import { ShareIcons } from 'components/molecules';
import { useStyles } from './PostMeta.styles';
import { PostMetaProps } from './PostMeta.types';


export const PostMeta = ({ category, location, year }: PostMetaProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.metaContainer}>
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
