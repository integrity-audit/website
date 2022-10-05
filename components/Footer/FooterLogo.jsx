import Image from 'next/future/image'
import imgLogo from '../../public/img-logo-footer.png'

const FooterLogo = () => {
  return (
    <Image
      className="mx-auto mb-[50px]"
      src={imgLogo}
      alt={process.env.siteName} />
  )
}

export default FooterLogo