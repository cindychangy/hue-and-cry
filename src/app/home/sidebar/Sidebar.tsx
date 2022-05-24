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
    <Box my={3} key={post.slug}>
      <SubHeading
        heading={post.categories.nodes[0].name}
        link={post.categories.nodes[0].slug}
      />
      <S.ArticleTitle>
        <Link href={post.slug} color="inherit">
          {post.title}
        </Link>
      </S.ArticleTitle>
    </Box>
  ));

  return (
    <S.SidebarWrapper>
      <SectionHeading heading="Featured Stories" />
      {sidebarPosts}
        <S.AboutBox>
          <S.AboutHeader>
            <span>What</span><span>happened</span><span>to her?</span>
          </S.AboutHeader>
          <S.AboutText>
          <Link href={AppRoute.ABOUT}>Learn more</Link> about the mission of Hue and Cry.
          </S.AboutText>
        </S.AboutBox>
    </S.SidebarWrapper>
  )
}
