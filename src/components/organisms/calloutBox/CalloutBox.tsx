import React from 'react'

import { Grid, Box, Typography } from 'components/atoms'
import { useStyles } from './CalloutBox.styles';
import { CalloutBoxProps } from './CallboutBox.types'


export const CalloutBox = ({ helpInfo, sourcesInfo }: CalloutBoxProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.ctaBox}> 
      <Grid item xs={12} md={6}>
        <Box className={classes.helpInfo}>
          <Typography variant="h4" className={classes.headline} gutterBottom>
            Help this Case
          </Typography>
          {helpInfo}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className={classes.sourcesLinks}>
          <Typography variant="h4" className={classes.headline} gutterBottom>
            Sources and Links
          </Typography>
          {sourcesInfo}
        </Box>
      </Grid>
    </Grid>
  )
}
