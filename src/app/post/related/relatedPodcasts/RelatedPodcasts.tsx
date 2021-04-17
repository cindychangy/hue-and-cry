import React from 'react';

import { Box, Typography, Link, Icons } from 'components/atoms';
import { ResourceHeading } from 'components/molecules';

import { useStyles } from './RelatedPodcasts.styles';
import { RelatedPodcastsProps } from './RelatedPodcasts.types';

export const RelatedPodcasts = ({ podcasts }: RelatedPodcastsProps) => {

  const classes = useStyles();

  const podcastList = podcasts.map((podcast, index)  => (
    <Box key={index} className={classes.podcastConatiner}>
      <Typography className={classes.showTitle}>
        {podcast.podcast_show}
      </Typography>
      <Link 
        href={podcast.link} 
        className={classes.link} 
        color='inherit' 
        rel={'noreferrer noopener'} 
        target={'_blank'}
      >
        {podcast.show_title}
      </Link>
    </Box>
  ))

  return (
    <Box my={8}>
    <ResourceHeading
      heading="Podcasts about this case"
      icon={<Icons.VolumeUp/>}
    />
    <Box mt={3}/>

    <Box className={classes.podcastWrapper}>
      {podcastList}
    </Box>
    </Box>
  )
}
