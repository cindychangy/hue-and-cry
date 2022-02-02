import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachmentIcon from '@mui/icons-material/Attachment';

import { ShareIconProps } from './ShareIcons.types';

import * as S from './ShareIcons.styles';

export const  ShareIcons = ({ postTitle, postLink}: ShareIconProps) => {

  return (
    <S.ShareContainer>
      <S.IconButtonStyled 
        aria-label='share'
        href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`}
        rel={'noreferrer noopener'} 
        target={'_blank'}
      >

      </S.IconButtonStyled>

      <S.IconButtonStyled 
        aria-label="share"
        href={`https://www.twitter.com/intent/tweet?url=${postLink}`}
        rel={'noreferrer noopener'} 
        target={'_blank'}
      >
        <TwitterIcon/>
      </S.IconButtonStyled>

      <S.IconButtonStyled 
        aria-label='share'
        href={`mailto:?subject=${postTitle}&amp;body=${postLink}`}
        rel={'noreferrer noopener'} 
        target={'_blank'}
      >
        <AttachmentIcon sx={{ transform: 'rotate(-45deg)' }}/>
      </S.IconButtonStyled>
    </S.ShareContainer>
  )
}