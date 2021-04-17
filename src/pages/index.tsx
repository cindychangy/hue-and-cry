import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
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

const Index = ({ posts, sidebarPosts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <Home posts={posts} sidebarPosts={sidebarPosts} />;

export default Index;
