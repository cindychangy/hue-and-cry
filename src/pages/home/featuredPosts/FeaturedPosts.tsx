import React from 'react'

import { Grid } from 'components/atoms'
import { PostPreview } from 'components/organisms'

import { Post } from 'api/types';

export const FeaturedPosts = ({ posts }: { posts: Post[] }) => {

  const featuredPostList = posts.map(post => (
    <Grid item xs={12} md={4} key={post.id}>
      <PostPreview
        image={post.jetpack_featured_media_url} 
        category={post.categories_names[0]} 
        title={post.title.rendered} 
        excerpt={post.excerpt.rendered}
        categoryLink={post.categoryLink} 
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

