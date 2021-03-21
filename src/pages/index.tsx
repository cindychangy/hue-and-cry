import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Home  from './home/Home';

import { getPosts } from 'api/actions';
import { HomeProps } from './home/Home.types';

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const posts = await getPosts(10);

  return {
    props: { posts },
  };
};

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <Home posts={posts} />;

export default Index;