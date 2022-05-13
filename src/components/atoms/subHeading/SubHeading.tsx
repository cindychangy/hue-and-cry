import React from 'react';
import { SubHeadingProps } from './SubHeading.types';

import * as S from './SubHeading.styles';

export const SubHeading = ({ heading, link, heroHeading }: SubHeadingProps) => {

  return (
    <S.SubHeading
      variant="caption" 
      sx={{ fontSize: heroHeading ? '14px' : '11px' }}
    >
      <S.CategoryName 
        href={`/${encodeURIComponent(link)}`}
      >
        {heading}
      </S.CategoryName>
    </S.SubHeading>
  )
}