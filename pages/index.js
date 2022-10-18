import Head from 'next/head'
import Image from 'next/image'
import Descontos from '../components/Descontos'
import Form from '../components/Form'
import Header from '../components/Header'
import Testemunhos from '../components/Testemunhos'
import Top from '../components/Top'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Site - Landing Page</title>
        <meta name="description" content="Website Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pb-10">
        <div className='bg-[#FBED04] md:h-screen px-10 pb-4'>
          <Header></Header>
          <Top></Top>
        </div>
        <Descontos></Descontos>
        <Form></Form>
        <Testemunhos></Testemunhos>
      </main>

      <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://static.mailerlite.com/js/w/webforms.min.js?v7316d10e2931a97c7b0f5c7e7e7be3ea"
          defer={false}
          id="element"
        >
                
            {function ml_webform_success_5795106(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-5795106 .row-success").show(),r(".ml-subscribe-form-5795106 .row-form").hide()}}
        </Script>
    </div>
  )
}
