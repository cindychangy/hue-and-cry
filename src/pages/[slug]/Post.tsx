import React from 'react'
import { GetStaticPaths } from 'next';

import { Grid, Box, Divider } from 'components/atoms';
import { Header, Footer } from 'components/organisms';
import { PostHero } from './postHero/PostHero';
import { PostMeta } from './postMeta/PostMeta';
import { CalloutBox } from './calloutBox/CalloutBox';
import { RelatedPosts } from './related/relatedPosts/RelatedPosts';
import { RelatedVideos } from './related/relatedVideos/RelatedVideos';
import { RelatedPodcasts } from './related/relatedPodcasts/RelatedPodcasts';
import { Comments } from './comments/Comments';
import { Copyright } from './copyright/Copyright';

import { PostProps } from './Post.types';
import { mockPost, postsMock, mockVideos, mockPodcasts } from 'api/mocks/mockData';
import { useStyles } from './Post.styles';

const Post = ({ post }: PostProps) => {
  const classes = useStyles();

  return (
    <>
    <p>Single Post</p>
      {/* <Header/>
        <ArticleHero
          category={article.category}
          categoryLink={article.categoryLink}
          title={article.title.rendered}
          bgImage={article.bgImage}
          featureImage={article.jetpack_featured_media_url}
        />
        <Box maxWidth={1000} m="auto" pt={4} px={{ xs: 2, md: 4 }}>
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
        </Box>

        <Box maxWidth={1280} m="auto" my={6} px={{ xs: 2, md: 4 }}>
          <CalloutBox
            helpInfo="dsdsadad" 
            sourcesInfo="dsadadsadsaaa"
          />

          <Box mt={8}/>
          <RelatedVideos videos={mockVideos} />

          <Divider />
          <RelatedPodcasts podcasts={mockPodcasts} />

          <Divider />
          <Comments />
        </Box>

        <RelatedPosts posts={postsMock} />

        <Box maxWidth={700} m="auto" pb={1} px={2}>
          <Copyright 
            sources="ABC News and The Atlantic"
          />
        </Box>
      <Footer/> */}
    </>
  )
}

export default Post;