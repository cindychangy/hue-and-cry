import React from 'react';

import { CustomLinkProps } from './Link.types';
import * as S from './Link.styles';

export const Link = ({ externalLink, ...props } : CustomLinkProps) => 
  <S.Link 
    target={externalLink ? '_blank' : undefined}
    rel={externalLink ? 'noreferrer noopener' : undefined}
    {...props} 
  />;
