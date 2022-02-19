import React from 'react';

import Box from '@mui/material/Box';
import { Link } from 'components/atoms/link/Link';
import { SubHeading } from 'components/atoms/subHeading/SubHeading';
import { SectionHeading } from 'components/molecules/sectionHeading/SectionHeading';

import { AppRoute } from 'app/App.types';
import { SidebarProps } from './Sidebar.types';

import * as S from './Sidebar.styles';

export const Sidebar = ({ posts }: SidebarProps) => {
  
  const sidebarPosts = posts.map(post => (
    <Box my={3} key={post.id}>
      <SubHeading
        heading={post.categories_names[0]}
        link={`${encodeURIComponent(post.categories_names[0].replace(/\s+/g, '-').toLowerCase())}`}
      />
      <S.ArticleTitle>
        <Link href={post.slug} color="inherit">
          {post.title.rendered}
        </Link>
      </S.ArticleTitle>
    </Box>
  ));

  return (
    <S.SidebarWrapper>
      <SectionHeading heading="Featured Stories" />
      {sidebarPosts}
      <Link href={AppRoute.ABOUT}>
        <S.AboutBox>
          <S.AboutHeader>
            <span>What</span><span>happened</span><span>to her?</span>
          </S.AboutHeader>
          <S.AboutText>
            Learn more about the mission of Hue and Cry.
          </S.AboutText>
        </S.AboutBox>
      </Link>
    </S.SidebarWrapper>
  )
}
