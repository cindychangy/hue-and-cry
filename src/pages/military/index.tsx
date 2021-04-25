import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Military } from 'app/military/Military';
import { getCategory } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(8);

  return {
    props: { posts },
  };
};

const MilitaryPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <Military posts={posts} />;

export default MilitaryPage;