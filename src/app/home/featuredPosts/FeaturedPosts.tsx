import React from 'react';

import Grid from '@mui/material/Grid';
import { PostPreview } from 'components/organisms/postPreview/PostPreview';
import { Post } from 'api/types';

export const FeaturedPosts = ({ posts }: { posts: Post[] }) => {

  const featuredPostList = posts.map(post => (

    <Grid item xs={12} sm={6} md={4} key={post.postId}>
      <PostPreview
        image={post.featuredImage.node.sourceUrl} 
        title={post.title} 
        excerpt={post.excerpt}
        category={post.categories.nodes[0].name} 
        categorySlug={post.categories.nodes[0].slug}
        slug={post.slug}
        id={post.postId}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={6}>
      {featuredPostList}
    </Grid>
  )
}

