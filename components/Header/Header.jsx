import { useHeader } from '../../context/HeaderContext'

import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'

const Header = () => {
  // const { headerTransparent, scrolled } = useHeader()
  const { scrolled } = useHeader()

  return (
    // <header className={`header-container flex justify-between items-center flex-wrap transition-all duration-300 ${scrolled ? 'fixed' : 'relative'}`}>
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <HeaderLogo />
      <HeaderNav />
    </header>
  )
}

export default Header