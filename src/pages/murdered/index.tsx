import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Murdered } from 'app/murdered/Murdered';
import { getCategory } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(3);

  return {
    props: { posts },
  };
};

const MurderedPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <Murdered posts={posts} />;

export default MurderedPage;