import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { SectionHeading } from 'components/molecules/sectionHeading/SectionHeading';
import { PostGrid } from 'components/organisms/postGrid/PostGrid';
import { Page } from 'components/templates';
import { CtaBanner } from 'components/molecules/ctaBanner/CtaBanner';
import { Post } from 'api/types';

export const HighwayOfTearsHome = ({ posts }: { posts: Post[] }) => {

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <SectionHeading />
          <CtaBanner isHero />
          <PostGrid posts={posts} />
          <Box height={{ sm: 'auto', md: 200 }}/>
        </Grid>
      </Grid>
    </Page>
  );
};
