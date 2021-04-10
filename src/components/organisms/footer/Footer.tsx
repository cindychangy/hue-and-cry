import React from 'react';

import { Box, Typography } from 'components/atoms';
import { useStyles } from './Footer.styles';


export const Footer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.footer}>
        &copy; 2021 The Hue and Cry  |  True Crime Blog 
      </Typography>
    </Box>
  )
}
