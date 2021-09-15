import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <Link to="/workstreet/" className="navbar-logo" onClick={closeMobileMenu}>
                    WorkStreet
                    <i className="fab fa-firstdraft" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/workstreet/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/categories"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Categories <i className="fas fa-caret-down" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/companies"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Companies
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workstreet/about-us"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            About Us
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
                <div className="Welcome">
                    <i className="fas fa-user fa-x"></i>
                    Hello User
                </div>
            </nav>
        </>
    )
}

export default Navbar
