import React from 'react';

import Grid from '@mui/material/Grid';
import { PostPreview } from 'components/organisms/postPreview/PostPreview';

import { PostGridProps } from './PostGrid.types';

export const PostGrid = ({ posts }: PostGridProps ) => {

  const PostList = posts.map(post => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
      <PostPreview
        image={post.jetpack_featured_media_url} 
        category={post.categories_names[0]} 
        title={post.title.rendered} 
        excerpt={post.excerpt.rendered}  
        categoryLink={`${encodeURIComponent(post.categories_names[0].replace(/\s+/g, '-').toLowerCase())}`} 
        slug={post.slug}
        id={post.id}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={6}>
      {PostList}
    </Grid>
  )
}

