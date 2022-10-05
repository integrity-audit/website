import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import OneColumn from '../components/OneColumn/OneColumn'
import Articles from '../components/Articles/Articles'
import OurMission from '../components/OurMission/OurMission'

import { heroContent } from '../content/Resources/heroContent.js'
import { introContent } from '../content/Resources/introContent.js'

const Resources = () => {
  return (
    <>
      <Head>
        <title>Joint Venture Accounting Resources | {process.env.siteName}</title>
        <meta name="description" content="" />
      </Head>

      <Hero content={heroContent} />

      <OneColumn content={introContent} />

      <Articles />

      <OurMission />
    </>
  )
}

export default Resources