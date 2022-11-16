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
    <div className='pb-10'>
        <div className='pt-8 md:h-screen px-10 bg-[#181818]'>
          <Header></Header>
          <Top></Top>
        </div>
        <Descontos></Descontos>
        {/*<Form></Form>
        <Testemunhos></Testemunhos>*/}
    </div>
  )
}
