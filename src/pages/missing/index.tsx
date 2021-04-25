import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Missing } from 'app/missing/Missing';
import { getCategory } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(2);

  return {
    props: { posts },
  };
};

const MissingPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <Missing posts={posts} />;

export default MissingPage;