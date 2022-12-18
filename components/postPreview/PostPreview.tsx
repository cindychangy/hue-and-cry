import React from 'react';
import LazyLoad from 'react-lazyload';

import Typography from '@mui/material/Typography';
import { Link } from 'components/atoms/link/Link';
import { SubHeading } from 'components/atoms/subHeading/SubHeading';
import { PostPreviewProps } from './PostPreview.types';

import * as S from './PostPreview.styles';

export const PostPreview = ({ image, category, title, excerpt, categorySlug, slug }: PostPreviewProps) => {

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
      {category &&
        <SubHeading 
          heading={category}
          link={categorySlug}
        />
      }
      <Typography variant="h3">
        <S.Title href={slug}>{title}</S.Title>
      </Typography>
      <S.Excerpt dangerouslySetInnerHTML={{__html: excerpt}}/>
    </S.FeatureContainer>
  )
}
