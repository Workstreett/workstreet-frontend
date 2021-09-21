import React, { useState, useContext } from 'react'
import { AuthContext } from './../contexts/AuthContext'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import sitelogo2 from '../img/sitelogo2.png'

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
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/companies"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            SDE
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/consultancy"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Data Science
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/workstreet/core" className="nav-links" onClick={closeMobileMenu}>
                            Core
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/about-us"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Marketing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/dashboard"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/workstreet/sign-out"
                            className="nav-links-mobile"
                            onClick={closeMobileMenu}
                        >
                            Sign Out
                        </Link>
                    </li>
                </ul>
                <Link to="/workstreet/dashboard" className="welcome">
                    <div>Welcome, {username}</div>
                </Link>
            </nav>
        </>
    )
}

export default Navbar
