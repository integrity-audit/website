import React, { useContext, useState, useEffect } from 'react'

export const HeaderContext = React.createContext()

export const useHeader = () => useContext(HeaderContext)

export const HeaderProvider = ({ children }) => {
  const [ scrolled, setScrolled ] = useState(false)
  const [ layoutSize, setLayoutSize ] = useState('mobile')
  const [ menuOpened, setMenuOpened ] = useState(false)

  useEffect(() => {
    handleScroll()
    handleResize()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleScroll = () => {
    setScrolled(scrollY > 100 ? true : false)
  }

  const handleResize = () => {
    const windowWidth = window.innerWidth

    if (windowWidth > 1023) {
      setLayoutSize('desktop')
      setMenuOpened(true)
    }
    else {
      setLayoutSize('mobile')
      setMenuOpened(false)
    }
  }

  return (
    <HeaderContext.Provider value={{ scrolled, layoutSize, menuOpened, setMenuOpened }}>
      {children}
    </HeaderContext.Provider>)
}