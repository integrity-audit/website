import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-inventories-contract-compliance-vendor-audits.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        Inventories, Contract Compliance & Vendor Audits
      </h1>
      <p>We offer inventory reviews (including physical counts), contract compliance audits, and vendor audits. Get the answers you need from professionals you can trust. </p>
      <Link href="#contact-us">
        <a className="btn-default">Contact Us</a>
      </Link>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}