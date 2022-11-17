import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-joint-venture-partnership-auditing.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        Joint Venture & Partnership Auditing
      </h1>
      <p>Integrity Audit and Accounting are experts in conducting energy joint venture audits and partnership audits. Established in 2011, we audit Canadian, American, and international joint ventures and partnerships.
      We are a complete joint venture audit service provider, equipped to manage all areas of audits, including operator/property selection, preparation, scheduling, auditing and response/rebuttal.
      
   
      <Link href="#contact-us">
        <a className="btn-default">Contact Us</a>
      </Link>
      </p>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}