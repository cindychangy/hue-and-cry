import React from 'react'

import { Box, Typography, Link } from 'components/atoms'

import { useStyles } from './CtaBanner.styles';

export const CtaBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.ctaContainer}>
      <Box className={classes.ctaTextWrapper}>
        <Typography variant="h2" className={classes.ctaHeading}>
          Highway of Tears
        </Typography>
        <Typography className={classes.ctaText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </Typography>
        <Typography variant="h5">
        <Link href="#" className={classes.seeMore}>See all stories</Link>
        </Typography>
      </Box>
    </Box>
  )
}

