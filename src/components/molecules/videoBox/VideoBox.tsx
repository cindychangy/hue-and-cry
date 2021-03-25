import React from 'react';
import { Box, Typography, Link } from 'components/atoms';

import { useStyles } from './VideoBox.styles';
import { VideoBoxProps } from './VideoBox.types';

export const  VideoBox = ({ link, title }:VideoBoxProps ) => {
  const classes = useStyles();

  return (
    <Box maxWidth={320} mr={{ xs: 0, sm: 6 }}>
      <iframe width="320" height="220" src={link} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <Typography className={classes.videoTitle}>
      <Link href={link} className={classes.link}>
        {title}
      </Link>
    </Typography>
    </Box>
  )
}