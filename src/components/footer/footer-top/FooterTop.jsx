import React from 'react'
import './style.css'

const FooterTop = () => {
    return (
        <div className='footer-top'>
            <div className="footer-top-container">
                <p>BE IN TOUCH WITH US:</p>
                <div className="footer-top-searchBx">
                    <input type="text" required placeholder='Enter your email' />
                    <button type='submit'>JOIN US</button>
                </div>
                <div className="footer-top-item">
                    <a target='_blank' rel='noreferrer' href="https://facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    <a target='_blank' rel='noreferrer' href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a target='_blank' rel='noreferrer' href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    <a target='_blank' rel='noreferrer' href="https://pinterest.com/"><i className="fa-brands fa-pinterest"></i></a>
                </div>
            </div>
        </div>
    )
}

export default FooterTop