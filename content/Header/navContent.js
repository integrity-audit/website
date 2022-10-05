import { FaPhoneAlt } from 'react-icons/fa'

export const navContent = [
  {
    title: 'Audit & Accounting Services',
    link: '/#energy-solutions',
    extLink: false,
    customColor: false
  },
  {
    title: 'About Integrity',
    link: '/about-us',
    extLink: false,
    customColor: false
  },
  {
    title: 'Energy Accounting Resources',
    link: '/resources',
    extLink: false,
    customColor: false
  },
  {
    title: 'Contact Us',
    link: '#contact-us',
    extLink: false,
    customColor: false
  },
  {
    title: <a className="flex justify-center items-center" target="_blank"><FaPhoneAlt /> (587) 575-1475</a>,
    link: 'tel:5875751475',
    extLink: true,
    customColor: true
  }
]