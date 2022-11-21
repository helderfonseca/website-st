import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
          <>
            <Head>
              <title>Website - Cabo Verde</title>
            </Head>
            <Component {...pageProps} />

            <Script
              async="true"
              id='elm'
            >
              {
                function ml_webform_success_5795093(){
                  var r = ml_jQuery||jQuery;
                  r(".ml-subscribe-form-5795093 .row-success").show();
                  r(".ml-subscribe-form-5795093 .row-form").hide();
                }
              }
            </Script>
          </>
        )
}

export default MyApp
