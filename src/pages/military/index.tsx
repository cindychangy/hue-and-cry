import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import MilitaryHome from './Military';
import { getCategories } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategories(8);

  return {
    props: { posts },
  };
};

const MilitaryContainer = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <MilitaryHome posts={posts} />;

export default MilitaryContainer;