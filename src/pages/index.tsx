import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { Home }  from 'app/home/Home';
import { getPosts, getFeaturedPosts } from 'api/actions/posts/postsActions';
import { HomeProps } from 'app/home/Home.types';

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const [posts, sidebarPosts] = await Promise.all([
    await getPosts(14),
    await getFeaturedPosts()
  ]);

  return {
    props: { posts, sidebarPosts },
  };
};

const Index = ({ posts, sidebarPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
     <Home posts={posts} sidebarPosts={sidebarPosts} />
     </>
   )
}

export default Index;
