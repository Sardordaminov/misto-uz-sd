import React from 'react'
import './style.css'
import FooterTop from '../footer-top/FooterTop'
import FooterBottom from '../footer-bottom/FooterBottom'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <FooterTop />
            <div className='footer-main'>
                <div className="footer-main-item">
                    <h1>Categories</h1>
                    <Link to="/"><p>Men</p></Link>
                    <Link to="/"><p>Women</p></Link>
                    <Link to="/"><p>Accessories</p></Link>
                    <Link to="/"><p>Beauty</p></Link>
                </div>
                <div className="footer-main-item">
                    <h1>Infomation</h1>
                    <Link to="/"><p>About Us</p></Link>
                    <Link to="/"><p>Contact Us</p></Link>
                    <Link to="/"><p>Blog</p></Link>
                    <Link to="/"><p>FAQs</p></Link>
                </div>
                <div className="footer-main-item">
                    <h1>Useful links</h1>
                    <Link to="/"><p>Terms & Conditions</p></Link>
                    <Link to="/"><p>Returns & Exchanges</p></Link>
                    <Link to="/"><p>Shipping & Delivery</p></Link>
                    <Link to="/"><p>Privacy Policy</p></Link>
                </div>
                <div className="footer-main-item">
                    <h1>CONTACT US</h1>
                    <Link to="/"><p>Ukraine, Kyiv,Khreshchatyk 1</p></Link>
                    <Link to="/"><p>+38 (050) 12 34 567</p></Link>
                    <Link to="/"><p>All week 24/7</p></Link>
                    <Link to="/"><p>shaman.magic.music@gmail.com</p></Link>
                </div>
            </div>
            <FooterBottom />
        </div>
    )
}

export default Footer