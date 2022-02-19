import React from 'react';

import Box from '@mui/material/Box';
import { ShareIcons } from 'components/molecules/shareIcons/ShareIcons';
import { PostMetaProps } from './PostMeta.types';

import * as S from './PostMeta.styles';

export const PostMeta = ({ categories, location, year, postLink, postTitle }: PostMetaProps) => {

  const categoryList = categories.map((category, index)  => (
      <li key={index}>
      <S.LinkStyled 
        href={`${encodeURIComponent(category.replace(/\s+/g, '-').toLowerCase())}`}
      >
        {category}
      </S.LinkStyled>
      </li>
  ));

  return (
    <S.MetaContainer>
      <Box mb={3}>
        <S.MetaTitle variant="h5" color="primary">Category</S.MetaTitle>
          <S.ListStyled>{categoryList}</S.ListStyled>
      </Box>
      <Box mb={3}>
        <S.MetaTitle variant="h5" color="primary">Location</S.MetaTitle>
        <S.TypographyStyled>{location}</S.TypographyStyled>
      </Box>
      <Box mb={3}>
        <S.MetaTitle variant="h5" color="primary">Year</S.MetaTitle>
        <S.TypographyStyled>{year}</S.TypographyStyled>
      </Box>
      <Box mb={3}>
        <S.MetaTitle variant="h5" color="primary">Share</S.MetaTitle>
        <ShareIcons postTitle={postTitle} postLink={postLink} />
      </Box>
    </S.MetaContainer>
  )
}
