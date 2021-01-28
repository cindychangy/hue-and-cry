import React from 'react'

import { Grid, } from 'components/atoms'
import { FeaturedArticles } from './featuredArticles/FeaturedArticles'
import { Page } from 'components/templates'

import { HomeProps } from './Home.types'

const Home = ({ articles }: HomeProps) => {

  return (
    <Page>
      <Grid container spacing={8}>
        <Grid item xs={12} md={9}>
          <FeaturedArticles articles={articles} />
        </Grid>
        <Grid item xs={12} md={2}>
          sidebar
        </Grid>
      </Grid>
    </Page>      
  )
}

export default Home
