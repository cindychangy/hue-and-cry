import React, { useState, useEffect } from 'react';

import { Grid } from 'components/atoms';
import { SectionHeading, } from 'components/molecules';
import { PostGrid, } from 'components/organisms';
import { FeaturedPosts } from './featuredPosts/FeaturedPosts';
import { Page } from 'components/templates';
import { CtaBanner } from './ctaBanner/CtaBanner';
import { Sidebar } from './sidebar/Sidebar';

import { HomeProps } from './Home.types';
import { Post } from 'api/types';

export const Home = ({ posts, sidebarPosts }: HomeProps) => {

  const [featuredTop, setFeaturedTop] = useState([] as Post[]);
  const [featuredBottom, setFeaturedBottom] = useState([] as Post[]);

  useEffect(() => {
    if(posts) {
      setFeaturedTop(posts.splice(0, 6));
      setFeaturedBottom(posts.splice(-8));
    }
  }, []);

  return (
    <Page>
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <FeaturedPosts posts={featuredTop} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Sidebar posts={sidebarPosts} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <CtaBanner/>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <SectionHeading heading="More Stories" />
          <PostGrid posts={featuredBottom} />
        </Grid>
      </Grid>
    </Page>
  )
};
