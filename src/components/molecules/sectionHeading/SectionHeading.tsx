import React from 'react';
import { Box, Typography, Divider } from 'components/atoms';

import { useStyles } from './SectionHeading.styles';
import { SectionHeadingProps } from './SectionHeading.types';

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Divider className={classes.divider} />
      {heading && <Typography variant="h3" className={classes.heading}>{heading}</Typography>}
    </Box>
  )
}