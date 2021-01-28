import React from 'react'

import { Grid } from 'components/atoms'
import { ArticlePreview } from 'components/organisms'

import { FeaturedArticlesProps } from './FeaturedArticles.types'

export const FeaturedArticles = ({ articles }: FeaturedArticlesProps ) => {

  const featuredArticleList = articles.map(article => (
    <Grid item xs={12} md={4} key={article.title}>
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
      {featuredArticleList}
    </Grid>
  )
}

