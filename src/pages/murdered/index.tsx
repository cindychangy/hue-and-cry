import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import MissingHome from './Missing';
import { getCategories } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategories(2);

  return {
    props: { posts },
  };
};

const MissingContainer = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <MissingHome posts={posts} />;

export default MissingContainer;