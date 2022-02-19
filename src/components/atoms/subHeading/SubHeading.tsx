import React from 'react';
import { SubHeadingProps } from './SubHeading.types';

import * as S from './SubHeading.styles';

export const SubHeading = ({ heading, link, heroHeading }: SubHeadingProps) => {

  return (
    <S.SubHeading
      variant="h5" 
      sx={{ fontSize: heroHeading ? '0.9375rem' : '0.89rem'}}
    >
      <S.CategoryName 
        href={`/${encodeURIComponent(link)}`}
      >
        {heading}
      </S.CategoryName>
    </S.SubHeading>
  )
}