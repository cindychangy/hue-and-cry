import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import MurderedHome from './Murdered';
import { getCategories } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategories(3);

  return {
    props: { posts },
  };
};

const MurderedContainer = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <MurderedHome posts={posts} />;

export default MurderedContainer;