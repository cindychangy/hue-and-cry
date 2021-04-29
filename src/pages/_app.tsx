import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';
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
      <title>The Hue and Cry | True Crime Blog</title>
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
        as="style" 
        rel="stylesheet preload"
        href="/fonts/style.css"
        crossOrigin="anonymous"
      >
      </link>
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default App;