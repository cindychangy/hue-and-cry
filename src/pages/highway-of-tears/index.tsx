import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import HighwayOfTearsHome from './HighwayOfTears';
import { getCategories } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategories(10);

  return {
    props: { posts },
  };
};

const HighwayOfTearsContainer = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <HighwayOfTearsHome posts={posts} />;

export default HighwayOfTearsContainer;