import Head from "next/head";
import Hero from "../components/Hero/Hero";
import OneColumn from "../components/OneColumn/OneColumn";
import OurTeam from "../components/OurTeam/OurTeam";
import IconBox from "../components/IconBox/IconBox";
import OurMission from "../components/OurMission/OurMission";

import { heroContent } from "../content/AboutUs/heroContent.js";
import { hereToServeContent } from "../content/AboutUs/hereToServeContent.js";
import { associationsContent } from "../content/AboutUs/associationsContent.js";
import { organizationsContent } from "../content/AboutUs/organizationsContent.js";
import { givingBackContent } from "../content/AboutUs/givingBackContent.js";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Integrity | {process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta
          name="description"
          content="The Integrity Audit and Accounting team."
        />
      </Head>

      <Hero content={heroContent} />

      <OneColumn content={hereToServeContent} />

      <OurTeam />

      <OneColumn bgColor="#F6F6F6" content={associationsContent} />

      <IconBox
        centerContent
        containerClass="max-w-[995px] gap-[50px]"
        itemClass="w-full md:w-[calc(50%-25px)] lg:w-[calc(33.33%-40px)] max-w-[302px]"
        content={organizationsContent}
      />

      <OneColumn bgImage colClass="max-w-[603px]" content={givingBackContent} />

      <OurMission />
    </>
  );
};

export default AboutUs;
