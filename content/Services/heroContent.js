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
      <p>Integrity Audit and Accounting are experts in conducting energy joint venture audits and partnership audits. Established in 2011, we audit Canadian, American, and international joint ventures and partnerships.</p>
      <p>Audits generally fall into three main categories—Expenditure Audits, Production Allocation and Revenue Audits, and Final Statement of Adjustments (FSOA) Audits—and our team specializes in all three.</p>
      <a href="mailto:info@integrity-audit.com" className="btn-default">Contact Us</a>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}