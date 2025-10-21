import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-joint-venture-operational-accounting.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        JOINT VENTURE AND OPERATIONAL ACCOUNTING
      </h1>
      <p>Outsourcing joint venture accounting can reduce costs and increase expertise. We offer joint venture accountant, joint venture analyst, and production accountant services for specific projects and also on a part-time or full-time contract basis. Contact us to learn how we can tailor a solution to fit exactly what you need.



</p>
      <a href="mailto:info@integrity-audit.com" className="btn-default">Contact Us</a>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}