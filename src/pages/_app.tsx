import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme  from '../theme/theme';
import * as gtag from '../../lib/gtag';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);

    
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <>
    <Head>
      <title>Hue and Cry | True Crime Blog</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="google-site-verification" content="yIN8gBn7vykoYb98wQQu9PAzJi9_1JAi5rcwDYS4kB4" />
      <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/favicon-hc-32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/favicon-hc-16.png`} />
      <link rel="mask-icon" href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/safari-pinned-tab.svg`} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileImage" content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/mstile-150x150-1.png`} />

      <link rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous" />

      <link 
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"       
        rel="stylesheet"
        as="font"
        crossOrigin="anonymous" 
      >
      </link>
      <link
        rel="stylesheet"
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
      <StylesProvider injectFirst>
        <CssBaseline />
        <Component {...pageProps} />
      </StylesProvider>
    </ThemeProvider>
  </>
  )
}

export default App;
