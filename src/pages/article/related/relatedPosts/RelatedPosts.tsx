import React from 'react'

import { Grid, Box, Typography, Link } from 'components/atoms'

import { useStyles } from './RelatedPosts.styles';
import { RelatedPostsProps } from './RelatedPosts.types';

export const RelatedPosts = ({ articles }: RelatedPostsProps) => {
  const classes = useStyles();

  const showRelatedPosts = articles.map(article => (
    <Grid item xs={12} sm={6} md={4} lg={2} key={article.title}>
      <Box 
        className={classes.imageBox} 
        style={{
          backgroundImage: `url('${article.featureImage}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </Box>
      <Typography className={classes.articleTitle}>
        <Link href={article.articleLink} color="inherit">
          {article.title}
        </Link>
      </Typography>
    </Grid>
  ));

  return (
    <Box className={classes.relatedContainer}>
      <Box maxWidth={1260} m="auto" py={6} my={6}>
        <Typography variant="h4">Related Cases</Typography>
        <Box mb={4}/>

        <Grid container spacing={4}>
          {showRelatedPosts}
        </Grid>
      </Box>
    </Box>
  )
}
