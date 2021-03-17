import React from 'react'

import { Grid } from 'components/atoms'
import { ArticlePreview } from 'components/organisms'

import { ArticleGridProps } from './ArticleGrid.types'

export const ArticleGrid = ({ articles }: ArticleGridProps ) => {

  const ArticleList = articles.map(article => (
    <Grid item xs={12} md={6} lg={3} key={article.id}>
      <ArticlePreview
        image={article.jetpack_featured_media_url} 
        category={article.category} 
        title={article.title.rendered} 
        excerpt={article.excerpt.rendered}  
        categoryLink={article.categoryLink} 
        articleSlug={article.slug}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={6}>
      {ArticleList}
    </Grid>
  )
}

