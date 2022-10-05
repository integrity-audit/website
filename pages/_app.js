import Head from 'next/head'
import { HeaderProvider } from '../context/HeaderContext'
import Layout from '../components/Layout'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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