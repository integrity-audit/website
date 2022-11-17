import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-iogc-trucking-audits.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        Indian Oil and Gas Canada (IOGC) Trucking Audits
      </h1>
      <p>Indian Oil and Gas Canada (IOGC) trucking audits possess unique challenges, including large data sets, a variety of typed and handwritten invoices, volumetric reviews, and IOGC scrutiny. You need experts who can navigate these obstacles and provide results you can count on. Integrity has the expertise, people, and technology to optimize IOGC trucking audits.</p>
      <Link href="#contact-us">
        <a className="btn-default">Contact Us</a>
      </Link>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}