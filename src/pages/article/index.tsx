import React from 'react'

import { Grid, Box, Icons } from 'components/atoms'
import { ResourceHeading, VideoBox } from 'components/molecules'
import { Header, Footer } from 'components/organisms'
import { ArticleHero } from './articleHero/ArticleHero'
import { ArticleMeta } from './articleMeta/ArticleMeta'
import { CalloutBox } from './calloutBox/CalloutBox' 
import { RelatedPosts } from './relatedPosts/RelatedPosts'

import { ArticleProps } from './Article.types'
import { mockArticle, articlesMock } from 'api/mocks/mockData'
import { useStyles } from './Article.styles';

const Article = ({ article = mockArticle, articles }: ArticleProps) => {
  const classes = useStyles();

  return (
    <>
      <Header/>
        <ArticleHero
          category={article.category}
          title={article.title}
          bgImage={article.bgImage}
          featureImage={article.featureImage}
        />
        <Box maxWidth={1000} m="auto">
          <Grid container>
            <Grid item xs={12} md={3}>
              <ArticleMeta
              category={article.category}
              location={article.location}
              year={article.year}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box className={classes.articleBody}>
                {article.body}
              </Box>
            </Grid>
          </Grid>

          <CalloutBox
            helpInfo="dsdsadad" 
            sourcesInfo="dsadadsadsaaa"
          />

          <Box mt={6}>
            <ResourceHeading
              heading="Videos about this case"
              icon={<Icons.Videocam/>}
            />
            <VideoBox 
              link="#"
              title="I am a video title"
            />
          </Box>
        </Box>

        <RelatedPosts articles={articlesMock} />
      <Footer/>
    </>
  )
}

export default Article
