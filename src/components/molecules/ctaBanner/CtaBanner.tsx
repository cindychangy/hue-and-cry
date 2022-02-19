import React from 'react';
import LazyLoad from 'react-lazyload';

import Typography from '@mui/material/Typography';

import { AppRoute } from 'app/App.types';
import { CtaBannerProps } from './CtaBanner.types';

import * as S from './CtaBanner.styles';


export const CtaBanner = ( { isHero, showLink }: CtaBannerProps) => {

  const featureImage = {
    backgroundImage: `url('https://wordpress.thehueandcry.com/wp-content/uploads/highway-of-tears-banner.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <LazyLoad height={250} once>
      <S.CtaContainer style={featureImage} mt={isHero ? 4 : 8 } mb={8}>
        <S.CtaTextWrapper>
          <S.CtaHeading variant="h2">
            Highway of Tears
          </S.CtaHeading>
          <S.CtaText>
            The Highway of Tears is an isolated 725-kilometer stretch of Highway 16 between Prince George and Prince Rupert in British Columbia, Canada. This highway has been the location of many unsolved murders and disappearances of Indigenous women beginning as early as the 1970s.
          </S.CtaText>
          <Typography variant="h5">
          {showLink && <S.SeeMore href={AppRoute.HIGHWAY_OF_TEARS} children="See all stories"/>}
          </Typography>
        </S.CtaTextWrapper>
      </S.CtaContainer>
    </LazyLoad>
  )
};

