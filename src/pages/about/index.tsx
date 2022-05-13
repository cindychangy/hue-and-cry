import React from 'react';
import Head from 'next/head';

import { About } from 'app/about/About';

const AboutPage = () => {

  return (
    <>
      <Head>
        <title>About | Hue and Cry</title>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}/about`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About Hue and Cry" />
        <meta property="og:description" content="Hue and Cry is a true crime blog focusing on crimes against women and girls who have yet to see justice. We focus on crimes that are committed against women of color." />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/about`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_META_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <About />
    </>
  )
}

export default AboutPage;
