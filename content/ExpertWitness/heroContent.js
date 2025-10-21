import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-expert-witness-reports-mediation-dispute-resolution.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        EXPERT WITNESS, MEDIATION, AND DISPUTE RESOLUTION
      </h1>
      <p>Some problems can only be solved with the help of an independent expert. Whether you require an expert witness, mediation, or dispute resolution, we can help you move forward.   
        
</p>
      <a href="mailto:info@integrity-audit.com" className="btn-default">Contact Us</a>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}