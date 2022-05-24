import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import Head from 'next/head';
import { Home }  from 'app/home/Home';
import { Post } from 'api/types'

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getPosts {
        posts(first: 100) {
          nodes {
            excerpt
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories(first: 1) {
              nodes {
                name
                slug
              }
            }
            id
            tags {
              nodes {
                name
              }
            }
          }
        }
      }
  `,
  });

  const posts = data.posts.nodes;

  const featured = posts.filter((post: Post) => post.tags.nodes[0] && post.tags.nodes[0].name === 'homepage');
  const sidebar = posts.filter((post: Post) => post.tags.nodes[0] && post.tags.nodes[0].name === 'featured')

  return {
    props: {
      featuredPosts: featured,
      sidebarPosts: sidebar,
    },
 };
}

const Index = ({ featuredPosts, sidebarPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {

   return (
     <>
     <Head>
      <meta name="description" content="A true crime blog focusing on crimes against women and girls who have yet to see justice." />
      <link rel="canonical" href="https://thehueandcry.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Hue and Cry | True Crime Blog" />
      <meta property="og:description" content="A true crime blog focusing on crimes against women and girls who have yet to see justice." />
      <meta property="og:url" content="https://thehueandcry.com/" />
      <meta property="og:site_name" content="Hue and Cry" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thehue_andcry" />
     </Head>
     <Home featuredPosts={featuredPosts} sidebarPosts={sidebarPosts} />
     </>
   )
}

export default Index;