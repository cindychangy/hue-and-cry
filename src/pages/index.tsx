import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Home  from './home/Home';

import { getPosts, getCategories } from 'api/actions';
import { HomeProps } from './home/Home.types';

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const articles = await getPosts();

  return {
    props: { articles },
  };
};

const Index = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <Home articles={articles} />;

export default Index;