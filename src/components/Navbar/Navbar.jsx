import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="nav-logo">
                    <img src={Logo} alt="afa" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <a href="/">home</a>
                        </li>
                        <li>
                            <a href="/">why ar?</a>
                        </li>
                        <li>
                            <a href="/">ar books</a>
                        </li>
                        <li>
                            <a href="/">try ar!</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button>CONTACT US</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar