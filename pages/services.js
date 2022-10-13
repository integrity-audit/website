import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import TwoColumnsWithImage from '../components/TwoColumnsWithImage/TwoColumnsWithImage'
import IconBox from '../components/IconBox/IconBox'
import OurMission from '../components/OurMission/OurMission'

import { heroContent } from '../content/Services/heroContent.js'
import { expenditureAuditsContent } from '../content/Services/expenditureAuditsContent.js'
import { allocationAuditsContent } from '../content/Services/allocationAuditsContent.js'
import { fsoaAuditsContent } from '../content/Services/fsoaAuditsContent.js'
import { integrityAdvantageContent } from '../content/Services/integrityAdvantageContent.js'

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | {process.env.siteName}</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        customImage
        containerClass="py-[50px] md:py-[85px] bg-auto bg-right-bottom"
        contentClass="lg:max-w-[570px]"
        content={heroContent} />

      <TwoColumnsWithImage content={expenditureAuditsContent} />

      <TwoColumnsWithImage
        imageOnRight
        content={allocationAuditsContent} />

      <TwoColumnsWithImage content={fsoaAuditsContent} />

      <IconBox
        container
        iconOnLeft
        bgContainer="transparent linear-gradient(227deg, #2CAC16 0%, #0449A2 100%) 0% 0% no-repeat padding-box"
        containerClass="gap-[40px] lg:gap-[82px]"
        itemClass="w-full lg:w-[calc(50%-41px)]"
        content={integrityAdvantageContent} />

      <OurMission />
    </>
  )
}

export default Services