import React from 'react';

import { SubHeading } from 'components/atoms/subHeading/SubHeading';
import { PostHeroProps } from './PostHero.types';

import * as S from './PostHero.styles';

export const PostHero = ({ category, title, bgImage, featureImage }: PostHeroProps) => {
  
  const backgroundImage = {
    backgroundImage: `url('${bgImage}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <S.HeroContainer>
      <S.BlockImage style={backgroundImage}>
        <S.FeatureImage>
          <img src={featureImage} alt={title} />
        </S.FeatureImage>
      </S.BlockImage>
      <S.BlockColor>
        <S.BlockText>
          <SubHeading 
            heading={category} 
            link={`${encodeURIComponent(category.replace(/\s+/g, '-').toLowerCase())}`} 
            heroHeading
            />
          <S.PostTitle variant="h1">{title}</S.PostTitle>
        </S.BlockText>
      </S.BlockColor>
    </S.HeroContainer>
  )
}
