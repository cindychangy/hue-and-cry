import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';

const App = ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <>
    <Head>
      <title>The Hue and Cry | True Crime Blog</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="icon" href="https://i1.wp.com/thehueandcry.com/wp-content/uploads/handcry-favicon.png?fit=32%2C29&#038;ssl=1" sizes="32x32" />
      <link rel="icon" href="https://i1.wp.com/thehueandcry.com/wp-content/uploads/handcry-favicon.png?fit=82%2C74&#038;ssl=1" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://i1.wp.com/thehueandcry.com/wp-content/uploads/handcry-favicon.png?fit=82%2C74&#038;ssl=1" />
      <meta name="msapplication-TileImage" content="https://i1.wp.com/thehueandcry.com/wp-content/uploads/handcry-favicon.png?fit=82%2C74&#038;ssl=1" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default App;