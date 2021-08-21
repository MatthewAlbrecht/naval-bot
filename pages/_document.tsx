import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { GA_TRACKING_ID } from 'lib/gtag'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(): React.ReactElement {
    {
      /* TODO (cancan101): add query param tracking - https://github.com/free-agency/free-agency-home/blob/e8527017cd0d60280d91ebe016461f435a57a9d5/goodkit/src/js/main-landing.js */
    }
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/WesFY/WesFY-Black.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          {/* NextJS handles this in its font optimization pass */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          {/* eslint-disable-next-line @next/next/google-font-display */}
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=block"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          {/* the event_callback -> gtagReady is used for the initial load */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              send_page_view: false,
            });

            gtag('event', 'page_view', {
              'event_callback': function() {
                if(window.gtagReady){
                  window.gtagReady();
                }
              }
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
