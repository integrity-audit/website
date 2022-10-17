import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import IconBox from '../components/IconBox/IconBox'
import TwoColumnsWithImage from '../components/TwoColumnsWithImage/TwoColumnsWithImage'
import OurMission from '../components/OurMission/OurMission'

import { heroContent } from '../content/Home/heroContent.js'
import { energySolutionsContent } from '../content/Home/energySolutionsContent.js'
import { empoweredTechnologyContent } from '../content/Home/empoweredTechnologyContent.js'
import { trustedProfessionalsContent } from '../content/Home/trustedProfessionalsContent.js'
import { expertsHelpContent } from '../content/Home/expertsHelpContent.js'

const Home = () => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta name="description" content="Oil and gas joint venture auditing and accounting services based in Calgary, Alberta." />
      </Head>

      <Hero
        customImage
        // containerClass="pt-[50px] pb-[194px] md:pt-[85px] md:pb-[400px] lg:py-[85px] bg-[#F6F6F6] bg-contain bg-right-bottom"
        containerClass="pt-[50px] pb-[194px] md:pt-[85px] md:pb-[400px] lg:py-[85px] bg-[#F6F6F6] bg-cover bg-left-bottom"
        contentClass="lg:max-w-[529px]"
        content={heroContent} />

      <IconBox
        centerContent
        containerId="energy-solutions"
        containerClass="max-w-[995px] gap-[25px] md:gap-[50px]"
        itemClass="basis-full md:basis-1/2 lg:basis-1/3 max-w-[265px] p-[15px] md:p-[30px] hover:shadow-xl"
        imageClass="max-w-[90px]"
        content={energySolutionsContent} />

      <TwoColumnsWithImage content={empoweredTechnologyContent} />

      <TwoColumnsWithImage
        imageOnRight
        content={trustedProfessionalsContent} />

      <TwoColumnsWithImage content={expertsHelpContent} />

      <OurMission />
    </>
  )
}

export default Home