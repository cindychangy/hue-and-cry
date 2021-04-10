import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import IndigenousWomenHome from './IndigenousWomen';
import { getCategories } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategories(9);

  return {
    props: { posts },
  };
};

const IndigenousWomenContainer = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <IndigenousWomenHome posts={posts} />;

export default IndigenousWomenContainer;