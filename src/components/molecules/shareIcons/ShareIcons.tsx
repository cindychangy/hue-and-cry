import React from 'react';
import { Box, Icons, IconButton } from 'components/atoms';

import { ShareIconProps } from './ShareIcons.types';
import { useStyles } from './ShareIcons.styles';

export const  ShareIcons = ({ postTitle, postLink}: ShareIconProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.shareContainer}>
      <IconButton 
        className={classes.button} 
        aria-label='share'
        href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`}
        rel={'noreferrer noopener'} 
        target={'_blank'}
      >
        <Icons.Facebook/>
      </IconButton>

      <IconButton 
        className={classes.button} 
        aria-label="share"
        href={`https://www.twitter.com/intent/tweet?url=${postLink}`}
        rel={'noreferrer noopener'} 
        target={'_blank'}
      >
        <Icons.Twitter/>
      </IconButton>

      <IconButton 
        className={classes.button} 
        aria-label='share'
        href={`mailto:?subject=${postTitle}&amp;body=${postLink}`}
        rel={'noreferrer noopener'} 
        target={'_blank'}
      >
        <Icons.Attachment className={classes.attachement} />
      </IconButton>
    </Box>
  )
}