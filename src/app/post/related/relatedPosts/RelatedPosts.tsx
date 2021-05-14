import React from 'react';

import { Grid, Box, Typography, Link } from 'components/atoms';

import { useStyles } from './RelatedPosts.styles';
import { Post } from 'api/types';

export const RelatedPosts = ({ posts }: { posts: Post[] }) => {
  const classes = useStyles();

  const showRelatedPosts = posts.map(post => (
    <Grid item xs={6} sm={3} md={2} key={post.id}>
      <Link href={post.slug}>
        <Box 
          className={classes.imageBox} 
          style={{
            backgroundImage: `url('${post.jetpack_featured_media_url}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
        </Box>
      </Link>
      <Typography className={classes.articleTitle}>
        <Link href={post.slug} color="inherit">
          {post.title.rendered}
        </Link>
      </Typography>
    </Grid>
  ));

  return (
    <Box className={classes.relatedContainer}>
      <Box m="auto" py={6} px={{ xs: 2, md: 4 }}>
        <Box textAlign="center">
          <Typography variant="h4">Related Cases</Typography>
        </Box>
        <Box mb={4}/>

        <Grid container spacing={6} className={classes.gridContainer}>
          {showRelatedPosts}
        </Grid>
      </Box>
    </Box>
  )
}
