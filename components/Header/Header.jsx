import { useHeader } from '../../context/HeaderContext'

import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'

const Header = () => {
  const { scrolled } = useHeader()

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <HeaderLogo />
      <HeaderNav />
    </header>
  )
}

export default Header