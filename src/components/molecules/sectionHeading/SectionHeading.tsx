import React from 'react'
import { Box, Typography } from 'components/atoms'

import { useStyles } from './SectionHeading.styles';
import { SectionHeadingProps } from './SectionHeading.types';

export const SectionHeading = ({ title, icon }: SectionHeadingProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h3">{title}</Typography>
      <Box className={classes.icon}>
        {icon}
      </Box>
    </Box>
  )
}