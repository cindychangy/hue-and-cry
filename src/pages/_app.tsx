import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme  from '../theme/theme';
import * as gtag from '../../lib/gtag';
import createEmotionCache from '../theme/createEmotionCache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  useEffect(() => {

    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
    <Head>
      <title>Hue and Cry | True Crime Blog</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="google-site-verification" content="yIN8gBn7vykoYb98wQQu9PAzJi9_1JAi5rcwDYS4kB4" />
      <link rel="icon" href="https://i1.wp.com/wordpress.thehueandcry.com/wp-content/uploads/handcry-favicon.png?fit=32%2C29&#038;ssl=1" sizes="32x32" />
      <link rel="icon" href="https://i1.wp.com/wordpress.thehueandcry.com/wp-content/uploads/handcry-favicon.png?fit=82%2C74&#038;ssl=1" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://i1.wp.com/wordpress.thehueandcry.com/wp-content/uploads/handcry-favicon.png?fit=82%2C74&#038;ssl=1" />
      <meta name="msapplication-TileImage" content="https://i1.wp.com/wordpress.thehueandcry.com/wp-content/uploads/handcry-favicon.png?fit=82%2C74&#038;ssl=1" />

      <link 
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"       
        rel="stylesheet preload"
        as="font"
        crossOrigin="anonymous" 
      >
      </link>
      <link
        rel="preload"
        href="/fonts/tiempos-regular-webfont.woff2"
        as="font"
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      <link 
        as="style" 
        rel="stylesheet"
        href="styles.css"
        crossOrigin="anonymous"
      >
      </link>
    </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

