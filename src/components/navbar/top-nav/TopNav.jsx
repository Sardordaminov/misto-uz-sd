import React from 'react'
import './style.css'

const TopNav = () => {
    return (
        <div className='top-nav'>
            <div className='top-nav-container'>
                <div className="top-nav-item">
                    <p><i className="fa-solid fa-phone"></i> +38 (050) 12 34 567</p>
                    <p><i className="fa-solid fa-location-dot"></i> Ukraine, Kyiv,Khreshchatyk 1</p>
                    <p><i className="fa-solid fa-clock"></i> All week 24/7</p>
                </div>
                <div className="top-nav-item sec">
                    <a target='_blank' rel='noreferrer' href="https://facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    <a target='_blank' rel='noreferrer' href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a target='_blank' rel='noreferrer' href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    <a target='_blank' rel='noreferrer' href="https://pinterest.com/"><i className="fa-brands fa-pinterest"></i></a>
                </div>
            </div>
        </div>
    )
}

export default TopNav