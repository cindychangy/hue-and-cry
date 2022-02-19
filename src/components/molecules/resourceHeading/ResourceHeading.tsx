import React from 'react';
import Typography from '@mui/material/Typography';

import { ResourceHeadingProps } from './ResourceHeading.types';

import * as S from './ResourceHeading.styles';

export const ResourceHeading = ({ heading, icon }: ResourceHeadingProps) => {

  return (
    <S.Container>
      <Typography variant="h4">{heading}</Typography>
      <S.IconContainer>
        {icon}
      </S.IconContainer>
    </S.Container>
  )
}