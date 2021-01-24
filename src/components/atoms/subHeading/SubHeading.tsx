import React from 'react'
import { Typography, Link } from 'components/atoms'

import { useStyles } from './SubHeading.styles';
import { SubHeadingProps } from './SubHeading.types';

export const SubHeading = ({ heading, link }: SubHeadingProps) => {
  const classes = useStyles();

  return (
    <>
    {!link ? (
      <Typography variant="h5" className={classes.subHeading}>{heading}</Typography> 
    ) : (
      <Typography variant="h5" className={classes.subHeading}>
        <Link href={link}>
          {heading}
        </Link>
      </Typography>
    )}
    </>
  )
}
