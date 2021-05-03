import React from 'react';
import LazyLoad from 'react-lazyload';

import { Box, Typography, Icons } from 'components/atoms';
import { DisqusEmbed } from './disqusEmbed/DisqusEmbed';

import { CommentsProps } from './Comments.types';
import { useStyles } from './Comments.styles';

export const Comments = ({ postSlug, postId, postTitle}: CommentsProps) => {
  const classes = useStyles();

  return (
    <Box maxWidth={800} m="auto">
      <Box className={classes.commentsContainer} pt={3}>
        <Typography variant="h4" className={classes.commentsTitle}> 
          Comments
        </Typography>
        <Icons.Comment/>
      </Box>

      <LazyLoad height={400} once>
        <DisqusEmbed  
          postSlug={postSlug} 
          postId={postId} 
          postTitle={postTitle} 
        />
      </LazyLoad>
    </Box>
  )
}