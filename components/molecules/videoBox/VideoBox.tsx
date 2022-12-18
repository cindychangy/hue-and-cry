import React from 'react';
import Box from '@mui/material/Box';

import { VideoBoxProps } from './VideoBox.types';

import * as S from './VideoBox.styles';

export const  VideoBox = ({ link, video, title }: VideoBoxProps) => {

  return (
    <Box maxWidth={320} mr={{ xs: 0, sm: 6 }}>
      <Box 
        width={320} 
        height={220}
        dangerouslySetInnerHTML={{__html: video}}
      />
      <S.VideoTitle>
        <S.LinkStyled href={link} externalLink>
          {title}
        </S.LinkStyled>
      </S.VideoTitle>
    </Box>
  )
}