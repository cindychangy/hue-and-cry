import React from 'react';
import Box from '@mui/material/Box';

import { SectionHeadingProps } from './SectionHeading.types';

import * as S from './SectionHeading.styles';

export const SectionHeading = ({ heading }: SectionHeadingProps) => {

  return (
    <Box>
      <S.DividerStyled/>
      {heading && <S.Heading variant="h3">{heading}</S.Heading>}
    </Box>
  )
}