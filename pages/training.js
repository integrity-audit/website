import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import TwoColumnsWithImage from '../components/TwoColumnsWithImage/TwoColumnsWithImage'
import IconBox from '../components/IconBox/IconBox'
import OurMission from '../components/OurMission/OurMission'

import { heroContent } from '../content/Training/heroContent.js'
import { expenditureAuditsContent } from '../content/Training/joint-venture-training.js'
import { allocationAuditsContent } from '../content/Training/operational-accounting.js'
import { integrityAdvantageContent } from '../content/Training/integrityAdvantageContent.js'

const Services = () => {
  return (
    <>
      <Head>
        <title>Custom Industry Training and Information Sessions | {process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta name="description" content="Oil and gas joint venture auditing and accounting services based in Calgary, Alberta." />
      </Head>

      <Hero
        customImage
        containerClass="pt-[258px] md:pt-[505px] pb-[50px] md:pb-[85px] lg:py-[85px] bg-[#F6F6F6] bg-[length:auto_208px] md:bg-[length:auto_420px] lg:bg-cover bg-right-top lg:bg-left-bottom"
        contentClass="lg:max-w-[570px]"
        content={heroContent} />

      <TwoColumnsWithImage
        container
        containerClass="pb-0"
        columnContentClass="first"
        content={expenditureAuditsContent} />

      <TwoColumnsWithImage
        container
        imageOnRight
        containerClass="pt-0"
        content={allocationAuditsContent} />

<IconBox
        container
        iconOnLeft
        bgContainer="transparent linear-gradient(227deg, #2CAC16 0%, #0449A2 100%) 0% 0% no-repeat padding-box"
        containerClass="gap-[40px] lg:gap-[82px]"
        itemClass="w-full lg:w-[calc(32%-41px)]"
        content={integrityAdvantageContent} />
      <OurMission />
 

    </>
  )
}

export default Services