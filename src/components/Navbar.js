import React, { useState, useContext } from 'react'
import { AuthContext } from './../contexts/AuthContext'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import sitelogo2 from '../img/sitelogo2.png'
import {
    HomeIcon,
    DesktopComputerIcon,
    ChartBarIcon,
    ChipIcon,
    CurrencyDollarIcon,
    UserIcon,
    LogoutIcon
} from '@heroicons/react/outline'

function Navbar() {
    const { username } = useContext(AuthContext)
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo-div" onClick={closeMobileMenu}>
                    <img src={sitelogo2} className="navbar-logo-img" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            <HomeIcon className="nav-icon" />
                            <span className="text">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/companies"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            <DesktopComputerIcon className="nav-icon" />
                            <span className="text">SDE</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/consultancy"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            <ChartBarIcon className="nav-icon" />
                            <span className="text">Data Science</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/workstreet/core" className="nav-links" onClick={closeMobileMenu}>
                            <ChipIcon className="nav-icon" />
                            <span className="text">Core</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/about-us"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            <CurrencyDollarIcon className="nav-icon" />
                            <span className="text">Marketing</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/dashboard"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            <UserIcon className="nav-icon" />
                            <span className="text">Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/workstreet/sign-out"
                            className="nav-links-mobile"
                            onClick={closeMobileMenu}
                        >
                            <LogoutIcon className="nav-icon" />
                            <span className="text">Logout</span>
                        </Link>
                    </li>
                </ul>
                <Link to="/workstreet/dashboard" className="welcome">
                    <span>Welcome, {username}</span>
                </Link>
            </nav>
        </>
    )
}

export default Navbar
