import React from 'react';
import LazyLoad from 'react-lazyload';

import Box from '@mui/material/Box';
import VideocamIcon from '@mui/icons-material/Videocam';
import { ResourceHeading } from 'components/molecules/resourceHeading/ResourceHeading';
import { VideoBox } from 'components/molecules/videoBox/VideoBox';

import { RelatedVideosProps } from './RelatedVideos.types';

export const RelatedVideos = ({ videos }: RelatedVideosProps) => {

  const VIDEO_LIST = videos.map((video, index) => (
    <VideoBox 
      key={index}
      link={video.link}
      title={video.videoTitle}
      video={video.video}
    />
  ));

  return (
    <>
      <ResourceHeading
        heading="Videos about this case"
        icon={<VideocamIcon/>}
      />
      <LazyLoad height={220} once>
        <Box mb={8} display={{ xs: 'block', md: 'flex'}}>
          {VIDEO_LIST}
        </Box>
      </LazyLoad>
    </>
  )
}
