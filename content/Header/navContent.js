import { FaPhoneAlt } from 'react-icons/fa'

export const navContent = [
  {
    title: 'Services',
    link: '/#joint-venture-audit-services',
    extLink: false,
    customColor: false
  },
  {
    title: 'About',
    link: '/about-us',
    extLink: false,
    customColor: false
  },
  {
    title: 'Resources',
    link: '/resources',
    extLink: false,
    customColor: false
  },
  {
    title: 'Contact',
    link: 'mailto:info@integrity-audit.com',
    extLink: true,
    customColor: false
  },
  {
    title: <a className="flex justify-center items-center" target="_blank"><FaPhoneAlt /> (587) 575-1475</a>,
    link: 'tel:5875751475',
    extLink: true,
    customColor: true
  }
]