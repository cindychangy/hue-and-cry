import React from 'react'

import { Grid, Box, Icons } from 'components/atoms'
import { ResourceHeading, VideoBox } from 'components/molecules'

import { RelatedVideosProps } from './RelatedVideos.types';

export const RelatedVideos = ({ videos }: RelatedVideosProps) => {

  const videoList = videos.map(video => (
    <Grid item xs={12} md={6} lg={3} key={video.title}>
      <VideoBox 
        link={video.link}
        title={video.title}
      />
    </Grid>
  ));

  return (
    <Box mb={8}>
    <ResourceHeading
      heading="Videos about this case"
      icon={<Icons.Videocam/>}
    />
    <Grid container spacing={3}>
      {videoList}
    </Grid>
    </Box>
  )
}
