import React from 'react'
import { Typography } from 'components/atoms'

import { useStyles } from './SubHeading.styles';
import { SubHeadingProps } from './SubHeading.types';

export const SubHeading = ({ heading }: SubHeadingProps) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.subHeading}>{heading}</Typography>
  )
}