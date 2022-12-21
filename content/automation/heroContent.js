import Image from 'next/future/image'
import Link from 'next/link'

import icoJointVenturePartnershipAuditing from '../../public/img-ico-automation-solutions-audit-accounting.svg'

export const heroContent = {
  content:
    <>
      <h1 className="title flex items-center" style={{textAlign: 'left !important'}}>
        <Image
          className="width-90"
          src={icoJointVenturePartnershipAuditing}
          alt="" />
        AUTOMATION SOLUTIONS FOR AUDIT AND ACCOUNTING
      </h1>
      <p>Driven by its belief that innovation is imperative, in 2018 Integrity Audit and Accounting founded a sister company, <a href="https://integrity-techsolutions.com/" target="blank"><u>Integrity Technology Solutions (ITS)</u></a>. Integrity Technology Solutions develops proprietary software for energy accounting and audit automation. These solutions are developed by experienced auditors and energy accountants who understand the unique challenges and opportunities faced by the industry.

</p>
      <Link href="#contact-us">
        <a className="btn-default">Contact Us</a>
      </Link>
    </>,
  image: '/img-bg-hero5-hires.jpg'
}