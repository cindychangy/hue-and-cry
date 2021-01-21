import React from 'react'
import { Box, Icons, IconButton } from 'components/atoms'

import { useStyles } from './ShareIcons.styles';
// import { ShareIconsProps } from './ShareIcons.types';

export const  ShareIcons = () => {
  const classes = useStyles();

  return (
    <Box className={classes.shareContainer}>
      <IconButton className={classes.button} aria-label="share">
        <Icons.Facebook/>
      </IconButton>

      <IconButton className={classes.button} aria-label="share">
        <Icons.Twitter/>
      </IconButton>

      <IconButton className={classes.button} aria-label="share">
        <Icons.Attachment className={classes.attachement} />
      </IconButton>
    </Box>
  )
}