import React, { useState, useEffect } from 'react';

import { Grid } from 'components/atoms';
import { SectionHeading, } from 'components/molecules';
import { ArticleGrid, } from 'components/organisms';
import { FeaturedArticles } from './featuredArticles/FeaturedArticles';
import { Page } from 'components/templates';
import { CtaBanner } from './ctaBanner/CtaBanner';
import { Sidebar } from './sidebar/Sidebar';

import { HomeProps } from './Home.types';
import { Article } from 'api/types';

const Home = ({ articles }: HomeProps) => {

  const [featuredTop, setFeaturedTop] = useState([] as Article[]);
  const [featuredBottom, setFeaturedBottom] = useState([] as Article[]);

  useEffect(() => {
    if(articles) {
      setFeaturedTop(articles.splice(0, 6));
      setFeaturedBottom(articles.splice(-4));
    }
  }, []);

  return (
    <Page>
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <FeaturedArticles articles={featuredTop} />
        </Grid>
        <Grid item xs={12} md={3}>
          {/* <Sidebar articles={articles} /> */}
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
          <ArticleGrid articles={featuredBottom} />
        </Grid>
      </Grid>
    </Page>
  )
}

export default Home;
