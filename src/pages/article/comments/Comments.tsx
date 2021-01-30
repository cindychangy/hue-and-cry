import React from 'react'

import { Box, Typography, Icons } from 'components/atoms'
import { useStyles } from './Comments.styles';

export const Comments = () => {
  const classes = useStyles();

  return (
    <Box className={classes.commentsContainer} pt={3}>
      <Typography variant="h4" className={classes.commentsTitle}> 
        Comments
      </Typography>
      <Icons.Comment/>
    </Box>
  )
}
