import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '../../../apollo-client';

import { IndigenousWomen } from 'app/indigenousWomen/IndigenousWomen';

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await client.query({
    query: gql`
      query getCategoryPosts {
        posts(where: {categoryId: 9}) {
          nodes {
            title
            postId
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            excerpt
          }
        }
      }
  `,
  });


  return {
    props: { posts: data.posts.nodes },
  };
};

const IndigenousWomenPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>Indigenous Women | Hue and Cry</title>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Indigenous Women | The Hue and Cry" />
        <meta property="og:description" content="Unsolved cases of murdered and missing Indigenous women." />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_META_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <IndigenousWomen posts={posts} />
    </>
  )
}

export default IndigenousWomenPage;