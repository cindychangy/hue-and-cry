import React from 'react'

import { Grid } from 'components/atoms'
import { ArticlePreview } from 'components/organisms'

import { ArticleGridProps } from './ArticleGrid.types'

export const ArticleGrid = ({ articles }: ArticleGridProps ) => {

  const ArticleList = articles.map(article => (
    <Grid item xs={12} md={6} lg={3} key={article.title}>
      <ArticlePreview
        image={article.featureImage} 
        category={article.category} 
        title={article.title} 
        excerpt={article.excerpt}  
        categoryLink={article.categoryLink} 
        articleLink={article.articleLink}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={6}>
      {ArticleList}
    </Grid>
  )
}

