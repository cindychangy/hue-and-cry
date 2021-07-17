import React from 'react';
import { Box, Typography, Link } from 'components/atoms';

import { useStyles } from './VideoBox.styles';
import { VideoBoxProps } from './VideoBox.types';

export const  VideoBox = ({ link, video, title }: VideoBoxProps) => {
  const classes = useStyles();

  return (
    <Box maxWidth={320} mr={{ xs: 0, sm: 6 }}>
      <Box 
        width={320} 
        height={220}
        dangerouslySetInnerHTML={{__html: video}}
      />
      <Typography className={classes.videoTitle}>
        <Link href={link} className={classes.link} externalLink>
          {title}
        </Link>
      </Typography>
    </Box>
  )
}