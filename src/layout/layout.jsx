import React from 'react'
import Navbar from '../components/navbar/navbar-main/Navbar'
import Footer from '../components/footer/footer-main/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className='container'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
