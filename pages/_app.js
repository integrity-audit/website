import Head from 'next/head'
import { HeaderProvider } from '../context/HeaderContext'
import Layout from '../components/Layout'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-16.png" sizes="16x16"></link>
        <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32"></link>
        <link rel="icon" type="image/png" href="/favicon-96.png" sizes="96x96"></link>
      </Head>
      <HeaderProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HeaderProvider>
    </>
  )
}

export default MyApp