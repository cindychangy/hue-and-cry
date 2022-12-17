import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../theme/createEmotionCache';
// import { ServerStyleSheets } from '@mui/styles';

const isProduction = process.env.NODE_ENV === 'production';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
            rel="stylesheet"
            as="font"
            crossOrigin="anonymous"
          ></link>
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
          ></link>
          {/* enable analytics script only for production */}
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
