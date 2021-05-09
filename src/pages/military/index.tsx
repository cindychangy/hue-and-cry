import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { Military } from 'app/military/Military';
import { getCategory } from 'api/actions/categories/categoriesActions';
import { baseURL, metaImage } from 'api/types';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(8);

  return {
    props: { posts },
  };
};

const MilitaryPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>Military | Hue and Cry</title>
        <link rel="canonical" href={`${baseURL}/military`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Military" />
        <meta property="og:description" content="Cases of suspicious deaths and dissapearances of women serving in the military." />
        <meta property="og:url" content={`${baseURL}/military`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <Military posts={posts} />
    </>
  )
}

export default MilitaryPage;