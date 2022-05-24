import React from 'react';

import Grid from '@mui/material/Grid';
import { PostPreview } from 'components/organisms/postPreview/PostPreview';

import { PostGridProps } from './PostGrid.types';

export const PostGrid = ({ posts }: PostGridProps ) => {

  const PostList = posts.map(post => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={post.slug}>
      <PostPreview
        image={post.featuredImage.node.sourceUrl} 
        category={post.categories && post.categories.nodes[0].name} 
        title={post.title} 
        excerpt={post.excerpt}  
        categorySlug={post.categories && post.categories.nodes[0].slug}
        slug={post.slug}
        id={post.postId}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={6}>
      {PostList}
    </Grid>
  )
}

