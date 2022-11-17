import icoDiploma from '../../public/img-ico-diploma-2.svg'
import icoCustomerSupport from '../../public/img-ico-customer-support.svg'
import icoApproval from '../../public/img-ico-approval.svg'
import icoIdea from '../../public/img-ico-idea.svg'

export const integrityAdvantageContent = {
  title: 'The Integrity Advantage',
  description:
    <>
      <p>Joint venture audits and partnership audits in the oil and gas industry require expertise in a number of areas, including accounting, operations, contract compliance, systems, and technology. These audits demand well-rounded experts who can make the most of limited time, quickly getting up to speed on properties, agreements, and processes.</p>
      <p>Our team of experienced auditors can help identify issues and validate the accounting of expenditures, revenue, and product allocations according to the terms of the governing agreements. Our auditors can also watch for procedures and controls, providing expert insights into the joint venture accounting.</p>
    </>,
  items: [
    {
      title: <h3 className="title">Experience</h3>,
      icon: icoDiploma,
      alt: '',
      content:
        <>
          <p>Integrity Audit and Accounting employs a team of auditors with a proven track record in joint venture accounting and auditing. Many of our auditors have worked in senior industry positions, and they bring their experience to bear on every audit. Our auditors are equipped to conduct detailed reviews of drilling and completions, construction, overhead, payroll, property tax, electrical power, allocated expenses, production accounting, product allocations, and revenue distribution, amoung other areas.</p>
        </>
    },
    {
      title: <h3 className="title">Client Support</h3>,
      icon: icoCustomerSupport,
      alt: '',
      content:
        <>
          <p>We support clients who require assistance with preparation, including selecting operators/properties, preparing mail ballots and participation letters, scheduling audits with operators, and also reviewing audit responses and rebuttals. We are also prepared to dig into specific questions or concerns you may have about properties under audit. With Integrity, help is only a call or email away.</p>
        </>
    },
    {
      title: <h3 className="title">Protocol Compliant</h3>,
      icon: icoApproval,
      alt: '',
      content:
        <>
          <p>There are strict protocols in place for how joint venture audits are to be conducted. Our auditors know and follow these protocols, which helps maintain positive relationships with Operators and promotes successful audits.</p>
        </>
    },
    {
      title: <h3 className="title">Proprietary Technology</h3>,
      icon: icoIdea,
      alt: '',
      content:
        <>
          <p>Our custom sofware application uses a combination of data-analytics, AI, and machine learning technologies to make audits more accurate and efficient. This technology reduces audit time, which saves you money and gets results faster.</p>
        </>
    }
  ]
}