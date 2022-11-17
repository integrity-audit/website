import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-custom-industry-training-information-sessions.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        Custom Industry Training and Information Sessions
      </h1>
      <p>Our experienced professionals are able to provide custom training to groups or individuals on any joint venture accounting, joint venture protocol, or operational accounting topic. You decide the kind of custom training you’re interested in, and we can make it happen.</p>
      <Link href="#contact-us">
        <a className="btn-default">Contact Us</a>
      </Link>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}