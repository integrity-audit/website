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
        Joint Venture and Partnership Auditing
      </h1>
      <p>Since 2011, we have been providing expert audit services that you can count on. Our team members have conducted hundreds of successful joint venture audits, and we are experts in performing energy joint venture audits and partnership audits. We audit Canadian, American, and international joint ventures and partnerships.
      We are a complete joint venture audit service provider, equipped to manage all areas of your audits, including operator/property selection, preparation, scheduling, auditing and response/rebuttal. Contact us today to learn more about how we can help you or for a free quote. 
      
   
      <Link href="#contact-us">
        <a className="btn-default">Contact Us</a>
      </Link>
      </p>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}