import React from 'react';

import { Box, Typography, Link } from 'components/atoms';
import { ShareIcons } from 'components/molecules';
import { useStyles } from './PostMeta.styles';
import { PostMetaProps } from './PostMeta.types';


export const PostMeta = ({ categories, location, year, postLink, postTitle }: PostMetaProps) => {
  const classes = useStyles();

  const categoryList = categories.map((category, index)  => (
      <li>
      <Link className={classes.text} key={index} href="#">
        {category}
      </Link>
      </li>
  ));

  return (
    <Box className={classes.metaContainer}>
      <Box mb={3}>
        <Typography variant="h5" color="primary" className={classes.metaTitle}>Category</Typography>
          <ul className={classes.list}>{categoryList}</ul>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" color="primary" className={classes.metaTitle}>Location</Typography>
        <Typography className={classes.text}>{location}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" color="primary" className={classes.metaTitle}>Year</Typography>
        <Typography className={classes.text}>{year}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" color="primary" className={classes.metaTitle}>Share</Typography>
        <ShareIcons postTitle={postTitle} postLink={postLink} />
      </Box>
    </Box>
  )
}
