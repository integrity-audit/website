import Image from 'next/future/image'
import imgLogo from '../../public/img-logo-signature.png'

export const ourMissionContent = {
  col1Content:
    <>
      <Image
        className="mx-auto"
        src={imgLogo}
        alt={process.env.siteName} />
    </>,
  col2Content:
    <>
      <p>Our mission is to provide industry leading professional audit and accounting services to our clients in a way that maximizes value, efficiency and cooperation through experience, innovation, technology and integrity.</p>
      <p>The Integrity team is available to conduct your joint venture audits and partnership audits. We can also help with other audit and accounting projects, issues, and inquiries.</p>
    </>
}