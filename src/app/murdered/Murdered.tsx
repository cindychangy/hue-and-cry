import React from 'react';

import { Grid } from 'components/atoms';
import { SectionHeading } from 'components/molecules';
import { PostGrid } from 'components/organisms';
import { Page } from 'components/templates';

import { Category, Post } from 'api/types';

export const Murdered = ({ posts }: { posts: Post[] }) => {

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <SectionHeading heading={Category.MURDERED} />
          <PostGrid posts={posts} />
        </Grid>
      </Grid>
    </Page>
  );
};
