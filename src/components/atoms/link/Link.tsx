import React from 'react';

import { CustomLinkProps } from './Link.types';
import * as S from './Link.styles';

export const Link = ({ externalLink, href } : CustomLinkProps) => 
  <S.LinkStyled 
    target={externalLink ? '_blank' : undefined}
    rel={externalLink ? 'noreferrer noopener' : undefined}
    href={href}
  />;
