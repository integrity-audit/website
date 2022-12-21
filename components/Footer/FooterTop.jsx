import FooterForm from './FooterForm'
import FooterInfo from './FooterInfo'

import FooterNav from './FooterNav'

const FooterTop = () => {
  return (
    <div id="contact-us" className="footer-top-container">
      <div className="container px-[20px] md:px-[50px] lg:px-[70px] pt-0 pb-[50px] border-b-[5px] border-white border-solid">
        <h3 className="mb-[30px] lg:mb-[48px] pb-0">Get in touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[60px] lg:gap-[173px]">
          <FooterForm />
          <FooterInfo />
        </div>
      </div>
      <div className="container pt-[50px] pb-0 text-center">

        <FooterNav />
      </div>
    </div>
  )
}

export default FooterTop