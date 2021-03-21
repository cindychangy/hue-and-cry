import React from 'react'

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

import { Post } from 'api/types';
import { useStyles } from './Post.styles';

const PostHome = ({ post }: { post: Post }) => {
  const classes = useStyles();

  return (
    <>
      <Header/>
        <PostHero
          category={post.category}
          categoryLink={post.categoryLink}
          title={post.title.rendered}
          bgImage={post.acf.background_image}
          featureImage={post.jetpack_featured_media_url}
        />
        <Box maxWidth={1000} m="auto" pt={4} px={{ xs: 2, md: 4 }}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <PostMeta
              category={post.category}
              location={post.acf.location}
              year={post.acf.year}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box 
                className={classes.articleBody}
                dangerouslySetInnerHTML={{__html: post.content.rendered}}
              >
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box maxWidth={1280} m="auto" my={6} px={{ xs: 2, md: 4 }}>
          <CalloutBox
            helpInfo={post.acf.how_to_help}
            sourcesInfo={post.acf.dig_deeper}
          />

          <Box mt={8}/>
          <RelatedVideos videos={post.acf.videos} />

          <Divider />
          <RelatedPodcasts podcasts={post.acf.podcasts} />

          <Divider />
          <Comments />
        </Box>

        {/* <RelatedPosts posts={postsMock} /> */}

        <Box maxWidth={700} m="auto" pb={1} px={2}>
          <Copyright sources={post.acf.copyright_sources} />
        </Box>
      <Footer/>
    </>
  )
}

export default PostHome;