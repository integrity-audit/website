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
        containerClass="pt-[258px] md:pt-[505px] pb-[50px] md:pb-[85px] lg:py-[85px] bg-[#F6F6F6] bg-[length:auto_208px] md:bg-[length:auto_420px] lg:bg-cover bg-right-top lg:bg-left-bottom"
        contentClass="lg:max-w-[529px]"
        content={heroContent} />
<a id="joint-venture-audit-services"><br></br></a>
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

      <TwoColumnsWithImage
        columnImageClass="bg-top"
        content={expertsHelpContent} />

      <OurMission />
    </>
  )
}

export default Home