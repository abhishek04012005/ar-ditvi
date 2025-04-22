import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navLinks = [
        { id: 'hero', label: 'HOME' },
        { id: 'whyar', label: 'WHY AR?' },
        { id: 'arbooks', label: 'AR BOOKS' },
        { id: 'arbooks', label: 'TRY AR!' }, 
        { id: 'contact', label: 'CONTACT US' }
    ];

    const handleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <div className="navbar">
            <div className="nav">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={Logo} alt="AR Books Logo" />
                    </Link>
                </div>
                
                <div className={`nav-links ${isMobile ? 'active' : ''}`}>
                    <ul>
                        {isHomePage ? (
                            // Home page navigation with smooth scroll
                            navLinks.map((link) => (
                                <li key={link.id}>
                                    <ScrollLink
                                        to={link.id}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        spy={true}
                                        onClick={() => setIsMobile(false)}
                                    >
                                        {link.label}
                                    </ScrollLink>
                                </li>
                            ))
                        ) :
                        
                        
                        
                        
                        
                        (
                            // Other pages navigation with regular links
                            navLinks.map((link) => (
                                <li key={link.id}>
                                    <Link 
                                        to={`/${link.id}`}
                                        onClick={() => setIsMobile(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>

                <div className="nav-button">
                    {isHomePage ? (
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="contact-btn"
                        >
                            CONTACT 
                        </ScrollLink>
                    ) : 
                    []}
                </div>

                <button 
                    className="mobile-menu-btn"
                    onClick={handleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMobile ? 'active' : ''}`}></span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;