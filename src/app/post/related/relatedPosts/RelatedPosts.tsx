import React from 'react';

import { Grid, Box, Typography, Link } from 'components/atoms';

import { useStyles } from './RelatedPosts.styles';
import { RelatedPostsProps } from './RelatedPosts.types';

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  const classes = useStyles();

  const showRelatedPosts = posts.map(post => (
    // <Grid item xs={12} sm={6} md={4} lg={2} key={post.title}>
    //   <Box 
    //     className={classes.imageBox} 
    //     style={{
    //       backgroundImage: `url('${post.featureImage}')`,
    //       backgroundSize: 'cover',
    //       backgroundRepeat: 'no-repeat'
    //     }}
    //   >
    //   </Box>
    //   <Typography className={classes.articleTitle}>
    //     <Link href={post.postLink} color="inherit">
    //       {post.title}
    //     </Link>
    //   </Typography>
    // </Grid>
    <p>Related Posts</p>
  ));

  return (
    <Box className={classes.relatedContainer}>
      <Box maxWidth={1260} m="auto" py={12} px={{ xs: 2, md: 4 }}>
        <Typography variant="h4">Related Cases</Typography>
        <Box mb={4}/>

        <Grid container spacing={4}>
          {showRelatedPosts}
        </Grid>
      </Box>
    </Box>
  )
}
