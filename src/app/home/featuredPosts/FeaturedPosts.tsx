import React from 'react';

import Grid from '@mui/material/Grid';
import { PostPreview } from 'components/organisms/postPreview/PostPreview';
import { Post } from 'api/types';

export const FeaturedPosts = ({ posts }: { posts: Post[] }) => {

  const featuredPostList = posts.map(post => (

    <Grid item xs={12} sm={6} md={4} key={post.id}>
      <PostPreview
        image={post.jetpack_featured_media_url} 
        title={post.title.rendered} 
        excerpt={post.excerpt.rendered}
        category={post.categories_names[0]} 
        categoryLink={`${encodeURIComponent(post.categories_names[0].replace(/\s+/g, '-').toLowerCase())}`} 
        slug={post.slug}
        id={post.id}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={6}>
      {featuredPostList}
    </Grid>
  )
}

