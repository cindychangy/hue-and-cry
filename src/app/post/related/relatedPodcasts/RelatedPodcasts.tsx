import React from 'react';

import Box from '@mui/material/Box';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { ResourceHeading } from 'components/molecules/resourceHeading/ResourceHeading';

import { RelatedPodcastsProps } from './RelatedPodcasts.types';

import * as S from './RelatedPodcasts.styles';

export const RelatedPodcasts = ({ podcasts }: RelatedPodcastsProps) => {

  const podcastList = podcasts.map((podcast, index)  => (
    <S.PodcastConatiner key={index}>
      <S.ShowTitle>
        {podcast.podcastShow}
      </S.ShowTitle>
      <S.LinkStyled 
        href={podcast.link} 
        color='inherit' 
        rel={'noreferrer noopener'} 
        target={'_blank'}
      >
        {podcast.showTitle}
      </S.LinkStyled>
    </S.PodcastConatiner>
  ))

  return (
    <Box my={8}>
    <ResourceHeading
      heading="Podcasts about this case"
      icon={<VolumeUpIcon/>}
    />
    <Box mt={3}/>

    <S.PodcastWrapper>
      {podcastList}
    </S.PodcastWrapper>
    </Box>
  )
}
