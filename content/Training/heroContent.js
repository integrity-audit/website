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
        CUSTOM INDUSTRY TRAINING AND INFORMATION SESSIONS
      </h1>
      <p>Strengthen yourself or your team with custom sessions on joint venture or operational accounting. Our experienced professionals can provide custom training to groups or individuals on any joint venture accounting, joint venture protocol, or operational accounting topic. You decide the kind of custom training you’re interested in, and we can make it happen.</p>
      <a href="#contact-us" className="btn-default">Contact Us</a>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}