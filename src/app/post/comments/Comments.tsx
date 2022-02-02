import React from 'react';

import Box from '@mui/material/Box';
import { DisqusEmbed } from './disqusEmbed/DisqusEmbed';
import ChatIcon from '@mui/icons-material/Chat';
import { CommentsProps } from './Comments.types';

import * as S from './Comments.styles';

export const Comments = ({ postSlug, postId, postTitle}: CommentsProps) => {

  return (
    <Box maxWidth={800} m="auto">
      <S.CommentsContainer pt={3}>
        <S.CommentsTitle variant="h4">Comments</S.CommentsTitle>
        <ChatIcon/>
      </S.CommentsContainer>

      <DisqusEmbed  
        postSlug={postSlug} 
        postId={postId} 
        postTitle={postTitle} 
      />
    </Box>
  )
}