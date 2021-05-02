import React from 'react';

import { Box, Typography, Link } from 'components/atoms';
import { useStyles } from './Footer.styles';


export const Footer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.footer}>
        &copy; 2021 &nbsp;<a href="mailto:hello@thehueandcry.com">The Hue and Cry</a> &nbsp; | &nbsp; True Crime Blog 
      </Typography>
    </Box>
  )
}
