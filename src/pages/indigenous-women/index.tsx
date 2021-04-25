import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { IndigenousWomen } from 'app/indigenousWomen/IndigenousWomen';
import { getCategory } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(9);

  return {
    props: { posts },
  };
};

const IndigenousWomenPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <IndigenousWomen posts={posts} />;

export default IndigenousWomenPage;