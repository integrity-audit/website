import { useHeader } from '../../context/HeaderContext'

import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

import { navContent } from '../../content/Header/navContent.js'

const HeaderNav = () => {
  const { layoutSize, menuOpened, setMenuOpened } = useHeader()

  const handleToggleClick = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <>
      <FaBars
          className={`btn-menu-toggle ${!menuOpened && layoutSize === 'mobile' ? 'block' : 'hidden'}`}
          size="30"
          onClick={handleToggleClick} />

      <FaTimes
          className={`btn-menu-toggle ${menuOpened && layoutSize === 'mobile' ? 'block' : 'hidden'}`}
          size="30"
          onClick={handleToggleClick} />

      <div className={`navbar ${menuOpened || layoutSize === 'desktop' ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="nav">
          {navContent.map((item, idx) =>
            <li
              key={idx}
              className={`${item.customColor ? 'text-primary' : ''}`}
              onClick={handleToggleClick}
            >
              <Link href={item.link} passHref={item.extLink}>
                {item.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default HeaderNav