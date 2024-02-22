import React from 'react'
import './style.css'
import img1 from '../../../assets/footer-bottom/payment-systems/payment-system-1.svg'
import img2 from '../../../assets/footer-bottom/payment-systems/payment-system-2.svg'
import img3 from '../../../assets/footer-bottom/payment-systems/payment-system-3.svg'
import img4 from '../../../assets/footer-bottom/payment-systems/payment-system-4.svg'
import img5 from '../../../assets/footer-bottom/payment-systems/payment-system-5.svg'
import img6 from '../../../assets/footer-bottom/payment-systems/payment-system-6.svg'
import img7 from '../../../assets/footer-bottom/payment-systems/payment-system-7.svg'

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
      <p className='footer-bottom-copyright'>Copyright © 2024 all rights reserved SDO</p>
      <div className="footer-bottom-payment-systems">
        <a href="https://stripe.com/"><img src={img1} alt="img1" /></a>
        <a href="https://www.kingston.com/"><img src={img2} alt="img2" /></a>
        <a href="https://paypal.com/"><img src={img3} alt="img3" /></a>
        <a href="https://visa.com/"><img src={img4} alt="img4" /></a>
        <a href="https://www.mastercard.ru/ru-ru.html"><img src={img5} alt="img5" /></a>
        <a href="https://www.discoverglobalnetwork.com/"><img src={img6} alt="img6" /></a>
        <a href="https://www.americanexpress.com/"><img src={img7} alt="img7" /></a>
      </div>
      <a className='footer-bottom-designer' href="/">Designed by SDO</a>
    </div>
  )
}

export default FooterBottom