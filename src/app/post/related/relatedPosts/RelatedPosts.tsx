import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'components/atoms/link/Link';
import Typography from '@mui/material/Typography';
import { RelatedPost } from 'api/types';

import * as S from './RelatedPosts.styles';

export const RelatedPosts = ({ posts }: { posts: RelatedPost[] }) => {

  const showRelatedPosts = posts.map(post => (
    <Grid item xs={6} sm={3} md={2} key={post.id}>
      <Link href={post.slug}>
        <S.ImageBox 
          style={{
            backgroundImage: `url('${post.jetpack_featured_media_url}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
        </S.ImageBox>
      </Link>
      <S.ArticleTitle>
        <Link href={post.slug} color="inherit">
          {post.title.rendered}
        </Link>
      </S.ArticleTitle>
    </Grid>
  ));

  return (
    <S.RelatedContainer>
      <Box m="auto" py={6} px={{ xs: 2, md: 4 }}>
        <Box textAlign="center">
          <Typography variant="h4">Related Cases</Typography>
        </Box>
        <Box mb={4}/>

        <S.GridContainer container spacing={3}>
          {showRelatedPosts}
        </S.GridContainer>
      </Box>
    </S.RelatedContainer>
  )
}
