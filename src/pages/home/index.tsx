import React from 'react'

import { Grid, } from 'components/atoms'
import { SectionHeading, } from 'components/molecules'
import { FeaturedArticles } from './featuredArticles/FeaturedArticles'
import { Page } from 'components/templates'
import { CtaBanner } from './ctaBanner/CtaBanner'
import { Sidebar } from './sidebar/Sidebar'

import { HomeProps } from './Home.types'

const Home = ({ articles }: HomeProps) => {

  return (
    <Page>
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <FeaturedArticles articles={articles} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Sidebar articles={articles} />
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
        </Grid>
        <Grid item xs={12} md={3}>
        </Grid>
      </Grid>
    </Page>      
  )
}

export default Home
