import React, { useState } from 'react'
import TopNav from '../top-nav/TopNav'
import './style.css'
import logo from '../../../assets/logo/misto.png'
import { NavLink } from 'react-router-dom'
import PolygonIcon from '../../../icons/Polygon.png'
// import NavMenu from '../nav-menu/NavMenu'

const Navbar = () => {
    const [BarMenu, setBarMenu] = useState(false)
    return (
        <div className='navigation-bar'>
            <TopNav />
            <div className='main-nav'>
                <div className={`bars-menu ${BarMenu ? 'active' : ''}`}>
                    <div className='bars-menu-item'>
                        <button className='bars-menu-close' onClick={() => { setBarMenu(!BarMenu) }}><i className="fa-regular fa-xmark"></i></button>
                        <p><NavLink to='/login'>log in</NavLink>/<NavLink to='/signup'>sign up</NavLink></p>
                    </div>
                    <div className="bars-menu-ul">
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/aboutus'><li>About Us</li></NavLink>
                        <NavLink to='/categories-woman/Woman' className='ul-women ul-main'><li>Women</li></NavLink>
                        <NavLink to='/categories-men/Men' className='ul-men ul-main'><li>Men</li></NavLink>
                        <NavLink to='/beauty'><li>Beauty</li></NavLink>
                        <NavLink to='/accessories'><li>Accessories</li></NavLink>
                        <NavLink to='/blog'><li>Blog</li></NavLink>
                        <NavLink to='/contact'><li>Contact</li></NavLink>
                    </div>
                </div>
                <div className='bars-logo'>
                    <button className='main-nav-bars' onClick={() => { setBarMenu(!BarMenu) }}><i className="fa-solid fa-bars-staggered"></i></button>
                    <NavLink to='/'>
                        <div className='logo'>
                            <img src={logo} alt="logo Misto" />
                        </div>
                    </NavLink>
                </div>
                <div className="ul">
                    <NavLink to='/aboutus'><li>About Us</li></NavLink>
                    <NavLink to='/categories-woman/Woman' className='ul-women ul-main'>
                        <li>Women</li>
                        <img className='polygon-icon' src={PolygonIcon} alt="polygon" />
                    </NavLink>
                    <NavLink to='/categories-men/Men' className='ul-men ul-main'>
                        <li>Men</li>
                        <img className='polygon-icon' src={PolygonIcon} alt="polygon" />
                    </NavLink>
                    <NavLink to='/beauty'><li>Beauty</li></NavLink>
                    <NavLink to='/accessories'><li>Accessories</li></NavLink>
                    <NavLink to='/blog'><li>Blog</li></NavLink>
                    <NavLink to='/contact'><li>Contact</li></NavLink>
                </div>
                <div className="nav-item">
                    <button className='nav-search btn'><i className="fa-light fa-magnifying-glass"></i></button>
                    <NavLink to='/favorites' className='to-favorites btn'><i className="fa-light fa-heart"></i></NavLink>
                    <NavLink to={localStorage.getItem('access') ? '/profile/info' : '/signup'} className='navbar-profile btn'>
                        <i className="fa-light fa-user"></i>
                    </NavLink>
                    <NavLink to='/cart' className='to-orders btn'><i className="fa-light fa-bag-shopping"></i></NavLink>
                </div>
            </div>
            {/* <NavMenu /> */}
        </div>
    )
}

export default Navbar