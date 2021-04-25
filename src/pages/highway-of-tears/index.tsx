import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HighwayOfTearsHome } from '../../app/highwayOfTears/HighwayOfTears';
import { getCategory } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(10);

  return {
    props: { posts },
  };
};

const HighwayOfTearsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <HighwayOfTearsHome posts={posts} />;

export default HighwayOfTearsPage;