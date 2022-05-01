import React from 'react';

import { CopyrightProps } from './Copyright.types';
import * as S from './Copyright.styles';

export const Copyright = ({ sources }: CopyrightProps) => {

  return (
    <S.Copyright>
      All images and videos used for this story are not the property of The Hue and Cry and are displayed for informational purposes only. They are property of their original owners/publications. Photos are from {sources}.
    </S.Copyright>
  )
}
