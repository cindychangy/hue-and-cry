import React from 'react'
import { Box, Typography, Link } from 'components/atoms'

import { useStyles } from './VideoBox.styles';
import { VideoBoxProps } from './VideoBox.types';

export const  VideoBox = ({ embed, link, title }:VideoBoxProps ) => {
  const classes = useStyles();

  return (
    <>
    <Box 
      className={classes.videoContainer}
      dangerouslySetInnerHTML={{__html: embed}}
    >
    </Box>
    <Typography className={classes.videoTitle}>
      <Link href={link} className={classes.link}>
        {title}
      </Link>
    </Typography>
    </>
  )
}