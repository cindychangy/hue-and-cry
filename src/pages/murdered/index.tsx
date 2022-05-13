import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { Murdered } from 'app/murdered/Murdered';
import { getCategory } from 'api/actions/categories/categoriesActions';

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getCategory(3);

  return {
    props: { posts },
  };
};

const MurderedPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>Murdered | Hue and Cry</title>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}/murdered`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Murdered" />
        <meta property="og:description" content="Cases of murdered women and girls." />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/murdered`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_META_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <Murdered posts={posts} />
    </>
  )
}

export default MurderedPage;