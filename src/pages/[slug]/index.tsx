import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '../../../apollo-client';

import { PostContainer } from 'app/post/Post';
import { Post } from 'api/types';
import { PostContainerProps } from 'app/post/Post.types';
import { getRelatedPosts } from 'api/actions/posts/postsActions';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const { data } = await client.query({
    query: gql`
      query getSlugs {
        posts(first: 100) {
          nodes {
            slug
          }
        }
      }
    `,
  });

  const slugs = data.posts.nodes.map((post: Post) => post.slug);
  const paths = await slugs.map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query singlePost {
        post(id: "${params?.slug}", idType: SLUG) {
          content
          categories {
            nodes {
              name
            }
          }
          ctaDigDeeper {
            digDeeper
          }
          ctaHowToHelp {
            howToHelp
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          podcasts {
            podcasts {
              link
              podcastShow
              showTitle
            }
          }
          postAssets {
            backgroundImage {
              sourceUrl
            }
            copyrightSources
          }
          storyFacts {
            location
            year
          }
          title
          videos {
            videos {
              link
              video
              videoTitle
            }
          }
          id
          excerpt
          slug
          dateGmt
          modifiedGmt
          categories {
            nodes {
              name
              slug
            }
          }
          postId
        }
      }
  `,
  });

  const relatedPosts = await getRelatedPosts(data.post.postId);

  return {
    props: { post: data.post, relatedPosts },
  };
};

const PostPage = ({ post, relatedPosts }: PostContainerProps) => {
  const excerpt = post.excerpt.replace(/(<([^>]+)>)/gi, '');

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
        />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="article:published_time" content={post.date_gmt} />
        <meta property="article:modified_time" content={post.modified_gmt} />
        <meta property="og:image" content={post.featuredImage.node.sourceUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <PostContainer post={post} relatedPosts={relatedPosts} />
    </>
  );
};

export default PostPage;
