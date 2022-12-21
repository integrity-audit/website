import icoDiploma from '../../public/img-ico-diploma-2.svg'
import icoCustomerSupport from '../../public/img-ico-customer-support.svg'
import icoApproval from '../../public/img-ico-approval.svg'
import icoIdea from '../../public/img-ico-idea.svg'

export const integrityAdvantageContent = {
  title: 'The Benefits of Audit-iQ',
  description:
  <>
    <p>With AiQ, charges can be analyzed using statistical modelling (machine learning) and data analytics. This software provides the first level of detection for coding errors and ineligible charges. While the application does not eliminate the need for human auditors, it facilitates the capability to review up to 95% of reviewable documents, compared with only 30-40% of invoices that are reviewed in traditional (manual) audit. As a propriety technology Audit-iQ is exclusively available to Integrity clients and is not available anywhere else in the industry.

</p>
  </>,
  items: [
    {
      title: <h3 className="title">Reduced Audit Costs</h3>,
      icon: icoApproval,
      alt: '',
      content:
        <>
          <p>The audit automation software developed by Integrity Technology Solutions (ITS) provides the first level of vouching and reviewing that was traditionally completed by auditors manually.</p><p>By automating this step, we can to reduce the total amount of audit time required, which reduces the total cost for audits. We pass this savings on to our clients, making audits more accessible to large and small companies alike.</p>
        </>
    },
    {
      title: <h3 className="title">Increased Coverage</h3>,
      icon: icoApproval,
      alt: '',
      content:
        <>
          <p>Manual reviews of invoices are slow and time-consuming. Auditors frequently are only able to sample portions of the total invoices under audit. By automating the initial stage of reviewing invoices, there is the potential for significantly more invoices to be reviewed in the same or less time.</p><p>The increased audit coverage provided by Audit-iQ means increased diligence and certaintity, making your audits more beneficial.</p>
        </>
    },
    {
      title: <h3 className="title">Increased Accuracey</h3>,
      icon: icoApproval,
      alt: '',
      content:
        <>
          <p>It is said, “to err is human.” However, Integrity’s software does not become weary, even after reviewing thousands of invoices in the span of a few hours. This can lead to increases in audit accuracy, as items that may be overlooked by a human are identified by the software and flagged for additional reviews by auditors.</p><p>This last step, human review, is crucial. Human auditors are capable of the additional critical thinking and problem solving to verify if flagged items should be raised as audit exceptions</p>
        </>
    }
  ]
}