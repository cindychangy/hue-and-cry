import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Murdered } from 'app/murdered/Murdered';
import { getCategories } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategories(3);

  return {
    props: { posts },
  };
};

const MurderedPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <Murdered posts={posts} />;

export default MurderedPage;