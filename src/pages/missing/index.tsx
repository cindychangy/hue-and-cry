import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { Missing } from 'app/missing/Missing';
import { getCategory } from 'api/actions/categories/categoriesActions';
import { baseURL, metaImage } from 'api/types';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(2);

  return {
    props: { posts },
  };
};

const MissingPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>Missing | Hue and Cry</title>
        <link rel="canonical" href={`${baseURL}/missing`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Missing" />
        <meta property="og:description" content="Cases of women and girls who have gone missing." />
        <meta property="og:url" content={`${baseURL}/missing`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <Missing posts={posts} />
    </>
  )
}

export default MissingPage;