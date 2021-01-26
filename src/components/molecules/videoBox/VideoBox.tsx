import React from 'react'
import { Box, Typography, Link } from 'components/atoms'

import { useStyles } from './VideoBox.styles';
import { VideoBoxProps } from './VideoBox.types';

export const  VideoBox = ({ link, title }:VideoBoxProps ) => {
  const classes = useStyles();

  return (
    <>
    <Box className={classes.videoContainer}></Box>
    <Typography className={classes.videoTitle}>
      <Link href={link} className={classes.link}>
        {title}
      </Link>
    </Typography>
    </>
  )
}