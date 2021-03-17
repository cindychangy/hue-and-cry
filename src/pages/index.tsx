import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Home  from './home/Home';

import { getPosts, getCategories } from 'api/actions';
import { HomeProps } from './home/Home.types';

// export const getStaticPaths: GetStaticPaths = async () => {

//   const data = await getPosts();

//   const paths = data.map((item) => ({
//     params: { slug: item.slug}
//   }))

//   return { paths, fallback: false };
// };

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const posts = await getPosts();

  return {
    props: { posts },
  };
};

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => 
  <Home posts={posts} />;

export default Index;