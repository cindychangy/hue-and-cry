import React from 'react'

import { Box, Typography, Link } from 'components/atoms'

import { AppRoute } from 'app/App.types';
import { useStyles } from './CtaBanner.styles';

export const CtaBanner = () => {
  const classes = useStyles();

  const featureImage = {
    backgroundImage: `url('https://wordpress.thehueandcry.com/wp-content/uploads/highway-of-tears-banner.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <Box className={classes.ctaContainer} style={featureImage}>
      <Box className={classes.ctaTextWrapper}>
        <Typography variant="h2" className={classes.ctaHeading}>
          Highway of Tears
        </Typography>
        <Typography className={classes.ctaText}>
          The Highway of Tears is an isolated 725-kilometer stretch of Highway 16 between Prince George and Prince Rupert in British Columbia, Canada. This highway has been the location of many unsolved murders and disappearances of Indigenous women beginning as early as the 1970s.
        </Typography>
        <Typography variant="h5">
        <Link href={AppRoute.HIGHWAY_OF_TEARS} className={classes.seeMore}>See all stories</Link>
        </Typography>
      </Box>
    </Box>
  )
};

