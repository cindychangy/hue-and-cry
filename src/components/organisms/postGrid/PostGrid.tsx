import React from 'react';
import LazyLoad from 'react-lazyload';

import { Grid } from 'components/atoms';
import { PostPreview } from 'components/organisms';

import { PostGridProps } from './PostGrid.types';

export const PostGrid = ({ posts }: PostGridProps ) => {

  const PostList = posts.map(post => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
      <LazyLoad height={350} once>
        <PostPreview
          image={post.jetpack_featured_media_url} 
          category={post.categories_names[0]} 
          title={post.title.rendered} 
          excerpt={post.excerpt.rendered}  
          categoryLink={`${encodeURIComponent(post.categories_names[0].replace(/\s+/g, '-').toLowerCase())}`} 
          slug={post.slug}
          id={post.id}
        />
      </LazyLoad>
    </Grid>
  ));

  return (
    <Grid container spacing={6}>
      {PostList}
    </Grid>
  )
}

