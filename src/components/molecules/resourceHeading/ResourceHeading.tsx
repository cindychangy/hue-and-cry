import React from 'react'
import { Box, Typography } from 'components/atoms'

import { useStyles } from './ResourceHeading.styles';
import { ResourceHeadingProps } from './ResourceHeading.types';

export const ResourceHeading = ({ title, icon }: ResourceHeadingProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h4">{title}</Typography>
      <Box className={classes.icon}>
        {icon}
      </Box>
    </Box>
  )
}