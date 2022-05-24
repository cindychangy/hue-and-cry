import React from 'react';

import Grid from '@mui/material/Grid';
import { SectionHeading } from 'components/molecules/sectionHeading/SectionHeading';
import { PostGrid } from 'components/organisms/postGrid/PostGrid';
import { Page } from 'components/templates';

import { CategoryName, Post } from 'api/types';

export const Military = ({ posts }: { posts: Post[] }) => {

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <SectionHeading heading={CategoryName.MILITARY} />
          <PostGrid posts={posts} />
        </Grid>
      </Grid>
    </Page>
  );
};
