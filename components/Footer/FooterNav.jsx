import Link from 'next/link'

import { navContent } from '../../content/Footer/navContent.js'

const FooterNav = () => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-[30px] lg:gap-[44px]">
        {navContent.map(({title, link}, idx) =>
          <li key={idx} className="leading-[24px] text-[20px] uppercase">
            <Link href={link}>
              {title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default FooterNav