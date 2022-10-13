import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-joint-venture-partnership-auditing.png'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center">
        <Image
          className="width-77"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        Joint Venture & Partnership Auditing
      </h1>
      <p>Integrity Audit and Accounting are experts in conducting energy joint venture audits and partnership audits. Established in 2011, we audit Canadian, American, and international joint ventures and partnerships.</p>
      <p>Audits generally fall into three main categories—Expenditure Audits, Production Allocation & Revenue Audits, and Final Statement of Adjustments (FSOA) Audits—and our team specializes in all three.</p>
      <Link href="#">
        <a className="btn-default">Contact Us</a>
      </Link>
    </>,
  image: '/img-bg-hero.png'
}