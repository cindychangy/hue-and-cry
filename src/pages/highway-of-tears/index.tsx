import React from 'react'
import Head from 'next/head';
import { HighwayOfTearsHome } from '../../app/highwayOfTears/HighwayOfTears';

const HighwayOfTearsPage = () => {

  return (
    <>
      <Head>
        <title>The Highway of Tears | Hue and Cry</title>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/highway-of-tears`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The Highway of Tears" />
        <meta property="og:description" content="The Highway of Tears is an isolated 725-kilometer stretch of Highway 16. It has been the location of many unsolved murders and disappearances of Indigenous women." />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/highway-of-tears`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content="https://wordpress.thehueandcry.com/wp-content/uploads/highwayoftears.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <HighwayOfTearsHome/>
    </>
  )
}

export default HighwayOfTearsPage;
