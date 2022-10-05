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
        <title>{process.env.siteName}</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        customImage
        containerClass="py-[50px] md:py-[85px] bg-auto bg-right-bottom mix-blend-multiply"
        contentClass="lg:max-w-[529px]"
        content={heroContent} />

      <IconBox
        centerContent
        containerId="energy-solutions"
        containerClass="max-w-[995px] gap-[50px] lg:gap-[100px]"
        itemClass="basis-full md:basis-1/2 lg:basis-1/3 max-w-[265px] p-[30px] hover:shadow-xl"
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