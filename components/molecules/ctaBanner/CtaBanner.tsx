import React from 'react';
import LazyLoad from 'react-lazyload';

import Typography from '@mui/material/Typography';

import { AppRoute } from 'app/App.types';
import { CtaBannerProps } from './CtaBanner.types';
import { HERO_HOMEPAGE_CTA } from 'constants/media';

import * as S from './CtaBanner.styles';

export const CtaBanner = ( { isHero, showLink }: CtaBannerProps) => {

  return (
    <LazyLoad height={250} once>
      <S.CtaContainer style={HERO_HOMEPAGE_CTA} mt={isHero ? 4 : 8 } mb={8}>
        <S.CtaTextWrapper>
          <S.CtaHeading variant="h2">
            Highway of Tears
          </S.CtaHeading>
          <Typography>
            The Highway of Tears is an isolated 725-kilometer stretch of Highway 16 between Prince George and Prince Rupert in British Columbia, Canada. This highway has been the location of many unsolved murders and disappearances of Indigenous women beginning as early as the 1970s.
          </Typography>
          <Typography variant="caption">
          {showLink && <S.SeeMore href={AppRoute.HIGHWAY_OF_TEARS} children="See all stories"/>}
          </Typography>
        </S.CtaTextWrapper>
      </S.CtaContainer>
    </LazyLoad>
  )
};

