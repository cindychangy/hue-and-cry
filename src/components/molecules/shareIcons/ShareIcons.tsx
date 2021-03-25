import React from 'react';
import { useRouter } from 'next/router';
import { Box, Icons, IconButton } from 'components/atoms';

import { useStyles } from './ShareIcons.styles';

export const  ShareIcons = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.shareContainer}>
      <IconButton 
        className={classes.button} 
        aria-label="share"
        href="`https://www.facebook.com/sharer/sharer.php?u=${router.path}`">
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