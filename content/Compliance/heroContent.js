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
        INVENTORIES, CONTRACT COMPLIANCE, AND VENDOR AUDITS
      </h1>
      <p>If you are looking for expertise or due diligence, our team are here to assist you. We offer inventory reviews (including physical counts), contract compliance audits, and vendor audits. Get the answers you need from professionals you can trust. </p>
      <a href="mailto:info@integrity-audit.com" className="btn-default">Contact Us</a>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}