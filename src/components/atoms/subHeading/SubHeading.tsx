import React from 'react';
import classNames from 'classnames';

import { Typography, Link } from 'components/atoms';

import { useStyles } from './SubHeading.styles';
import { SubHeadingProps } from './SubHeading.types';

export const SubHeading = ({ heading, link, heroHeading }: SubHeadingProps) => {
  const classes = useStyles();

  return (
    <Typography 
      variant="h5" 
      className={classNames(classes.subHeading, heroHeading && classes.subHeadingHero)}
    >
      <Link 
        href={`/${encodeURIComponent(link)}`}
        className={classes.categoryName}
      >
        {heading}
      </Link>
    </Typography>
  )
}