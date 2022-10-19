import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="/scripts/ml.js"
          defer={false}
          id="element">
        
            {function ml_webform_success_5795106(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-5795106 .row-success").show(),r(".ml-subscribe-form-5795106 .row-form").hide()}}
        </Script>
      </body>
    </Html>
  )
}