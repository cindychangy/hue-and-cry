import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { IndigenousWomen } from 'app/indigenousWomen/IndigenousWomen';
import { getCategories } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategories(9);

  return {
    props: { posts },
  };
};

const IndigenousWomenPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <IndigenousWomen posts={posts} />;

export default IndigenousWomenPage;