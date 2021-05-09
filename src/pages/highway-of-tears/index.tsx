import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { HighwayOfTearsHome } from '../../app/highwayOfTears/HighwayOfTears';
import { getCategory } from 'api/actions/categories/categoriesActions';
import { baseURL, metaImage } from 'api/types';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(10);

  return {
    props: { posts },
  };
};

const HighwayOfTearsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>The Highway of Tears | Hue and Cry</title>
        <link rel="canonical" href={`${baseURL}/highway-of-tears`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The Highway of Tears" />
        <meta property="og:description" content="The Highway of Tears is an isolated 725-kilometer stretch of Highway 16. It has been the location of many unsolved murders and disappearances of Indigenous women." />
        <meta property="og:url" content={`${baseURL}/highway-of-tears`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <HighwayOfTearsHome posts={posts} />
    </>
  )
}

export default HighwayOfTearsPage;