import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '../../../apollo-client';

import { Murdered } from 'app/murdered/Murdered';

export const getStaticProps: GetStaticProps = async () => {
  
  const { data } = await client.query({
    query: gql`
      query getCategoryPosts {
        posts(where: {categoryId: 2}) {
          nodes {
            postId
            title
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

const MurderedPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>Murdered | Hue and Cry</title>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Murdered" />
        <meta property="og:description" content="Cases of murdered women and girls." />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_META_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <Murdered posts={posts} />
    </>
  )
}

export default MurderedPage;