import React from 'react';
import LazyLoad from 'react-lazyload';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'components/atoms/link/Link';
import { SubHeading } from 'components/atoms/subHeading/SubHeading';
import { PostPreviewProps } from './PostPreview.types';

import * as S from './PostPreview.styles';

export const PostPreview = ({ image, category, title, excerpt, categoryLink, slug }: PostPreviewProps) => {

  const featureImage = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <S.FeatureContainer>
      <Link href={`/${encodeURIComponent(slug)}`}>
        <LazyLoad height={200} once>
          <S.ImageBox style={featureImage}></S.ImageBox>
        </LazyLoad>
      </Link>
      <SubHeading 
        heading={category}
        link={categoryLink}
      />
      <Typography variant="h2">
        <S.Title href={slug}>{title}</S.Title>
      </Typography>
      <S.Excerpt dangerouslySetInnerHTML={{__html: excerpt}}/>
    </S.FeatureContainer>
  )
}
