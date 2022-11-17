import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-fraud-investigation.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        Fraud Investigation
      </h1>
      <p>Fraud or “white collar” crime is increasing at an alarming rate both in Canada and around the world. Integrity understands the complexity, confidentiality and discretion required when completing fraud investigations and forensic accounting engagements.</p>
      <Link href="#contact-us">
        <a className="btn-default">Contact Us</a>
      </Link>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}