import Link from 'next/link'
import Image from 'next/future/image'
import imgLogo from '../../public/img-logo.png'

const HeaderLogo = () => {
  return (
    <Link href="/">
      <a className="logo">
        <Image
          src={imgLogo}
          alt={process.env.siteName} />
      </a>
    </Link>
  )
}

export default HeaderLogo