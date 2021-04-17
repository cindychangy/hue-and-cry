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
      <meta name="description" content="A true crime blog focusing on crimes against women and girls who have yet to see justice." />
      <link rel="canonical" href="https://thehueandcry.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Hue and Cry | True Crime Blog" />
      <meta property="og:description" content="A true crime blog focusing on crimes against women and girls who have yet to see justice." />
      <meta property="og:url" content="https://thehueandcry.com/" />
      <meta property="og:site_name" content="Hue and Cry" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thehue_andcry" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default App;