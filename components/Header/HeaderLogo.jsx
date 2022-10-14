import Link from 'next/link'
import Image from 'next/future/image'
import imgLogo from '../../public/img-logo.png'

const HeaderLogo = () => {
  return (
    <Link href="/">
      <a className="logo">
        <Image
          src={imgLogo}
          alt={process.env.NEXT_PUBLIC_SITE_NAME} />
      </a>
    </Link>
  )
}

export default HeaderLogo