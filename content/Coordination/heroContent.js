import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-audit-coordination-responses.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        AUDIT COORDINATION AND RESPONSES
      </h1>
      <p>Are you being audited? Our team of experts can help you get through it as smoothly as possible. We provide audit coordination services for all stages of joint venture audits. We are also available to assist you with seeing joint venture audits resolved.</p>
      <a href="#contact-us" className="btn-default">Contact Us</a>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}