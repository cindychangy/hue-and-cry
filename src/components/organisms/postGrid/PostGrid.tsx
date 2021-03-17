import React from 'react'

import { Grid } from 'components/atoms'
import { PostPreview } from 'components/organisms'

import { PostGridProps } from './PostGrid.types'

export const PostGrid = ({ posts }: PostGridProps ) => {

  const PostList = posts.map(post => (
    <Grid item xs={12} md={6} lg={3} key={post.id}>
      <PostPreview
        image={post.jetpack_featured_media_url} 
        category={post.category} 
        title={post.title.rendered} 
        excerpt={post.excerpt.rendered}  
        categoryLink={post.categoryLink} 
        postSlug={post.slug}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={6}>
      {PostList}
    </Grid>
  )
}

