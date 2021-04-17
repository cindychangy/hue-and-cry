import React from 'react';

import { Box, Icons } from 'components/atoms';
import { ResourceHeading, VideoBox } from 'components/molecules';

import { RelatedVideosProps } from './RelatedVideos.types';

export const RelatedVideos = ({ videos }: RelatedVideosProps) => {

  const videoList = videos.map((video, index) => (
    <VideoBox 
      key={index}
      link={video.link}
      title={video.video_title}
    />
  ));

  return (
    <>
      <ResourceHeading
        heading="Videos about this case"
        icon={<Icons.Videocam/>}
      />
      <Box mb={8} display={{ xs: 'block', md: 'flex'}}>
        {videoList}
      </Box>
    </>
  )
}
