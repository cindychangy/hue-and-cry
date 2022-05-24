import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Header } from 'components/organisms/header/Header';
import { Footer } from 'components/organisms/footer/Footer';
import { PostHero } from './postHero/PostHero';
import { PostMeta } from './postMeta/PostMeta';
import { CalloutBox } from './calloutBox/CalloutBox';
import { RelatedPosts } from './related/relatedPosts/RelatedPosts';
import { RelatedVideos } from './related/relatedVideos/RelatedVideos';
import { RelatedPodcasts } from './related/relatedPodcasts/RelatedPodcasts';
import { Comments } from './comments/Comments';
import { Copyright } from './copyright/Copyright';

import { PostProps } from './Post.types';

import * as S from './Post.styles';

export const PostContainer = ({ post, relatedPosts }: PostProps) => {


  console.log(post.podcasts);

  return (
    <>
      <Header/>
        <PostHero
          category={post.categories.nodes[0].name}
          title={post.title}
          bgImage={post.postAssets.backgroundImage.sourceUrl}
          featureImage={post.featuredImage.node.sourceUrl}
        />
        <Box maxWidth={1000} m="auto" pt={4} px={{ xs: 2, md: 4 }}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <PostMeta
                categories={post.categories.nodes}
                location={post.storyFacts.location}
                year={post.storyFacts.year}
                postTitle={post.title}
                postLink={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <S.ArticleBody 
                dangerouslySetInnerHTML={{__html: post.content}}
              >
              </S.ArticleBody>
            </Grid>
          </Grid>
        </Box>

        <Box maxWidth={1280} m="auto" my={6} px={{ xs: 2, md: 4 }}>
            <CalloutBox
              helpInfo={post.ctaHowToHelp.howToHelp}
              sourcesInfo={post.ctaDigDeeper.digDeeper}
            />
          {post.videos && (
              <>
                <Box mt={8}/>
                <RelatedVideos videos={post.videos.videos} />
                <Divider />
              </>
            )}

            {post.podcasts && (
              <>
                <RelatedPodcasts podcasts={post.podcasts.podcasts} />
                <Divider />
              </>
            )}

            <Comments 
              postSlug={post.slug} 
              postId={post.postId} 
              postTitle={post.title} 
            />
        </Box>
        {/* <RelatedPosts posts={relatedPosts} /> */}

        <Box maxWidth={700} m="auto" px={2}>
          <Copyright sources={post.postAssets.copyrightSources} />
        </Box>
      <Footer/>
    </>
  )
};