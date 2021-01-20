import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>The Hue and Cry : True Crime Blog</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default App;
