import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
// import { ThemeProvider } from '@mui/material/styles';
// import { StylesProvider } from '@mui/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '../theme/theme';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme/theme';
import createEmotionCache from '../theme/createEmotionCache';
import * as gtag from '../../lib/gtag';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Hue and Cry | True Crime Blog</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="google-site-verification"
          content="yIN8gBn7vykoYb98wQQu9PAzJi9_1JAi5rcwDYS4kB4"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/favicon-hc-32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/favicon-hc-16.png`}
        />
        <link
          rel="mask-icon"
          href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/mstile-150x150-1.png`}
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
