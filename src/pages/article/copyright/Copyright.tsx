import React from 'react'

import { Box, Typography } from 'components/atoms'

import { CopyrightProps } from './Copyright.types'
import { useStyles } from './Copyright.styles'

export const Copyright = ({ sources }: CopyrightProps) => {
  const classes = useStyles();

  return (
    <Box my={4}>
      <Typography className={classes.copyright}>
        All images and videos used for this story are not the property of The Hue and Cry and are displayed for informational purposes only. They are property of their original owners/publications. Photos are from {sources}.
      </Typography>
    </Box>
  )
}
