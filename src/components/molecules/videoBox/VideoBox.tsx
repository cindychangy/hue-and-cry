import React from 'react'
import { Box, Typography } from 'components/atoms'

import { useStyles } from './VideoBox.styles';
import { VideoBoxProps } from './VideoBox.types';

export const  VideoBox = ({ link, title }:VideoBoxProps ) => {
  const classes = useStyles();

  return (
    <>
    <Box></Box>
    <Typography>{title}</Typography>
    </>
  )
}