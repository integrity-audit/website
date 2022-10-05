import TwoColumns from '../TwoColumns/TwoColumns'

import { ourMissionContent } from '../../content/OurMission/ourMissionContent.js'

const OurMission = () => {
  return (
    <TwoColumns
      containerClass="flex flex-wrap md:flex-nowrap justify-center items-center gap-[30px] lg:gap-[66px]"
      col1Class="w-full lg:w-auto"
      col2Class="max-w-[741px]"
      content={ourMissionContent} />
  )
}

export default OurMission