import React, { useEffect } from "react";
import { EmailOutlined, Facebook, Instagram, WhatsApp, X, YouTube, Pinterest } from '@mui/icons-material';
import { Grid } from "@mui/material";
import './Footer.css'
import Container from '../../structure/Container/Container'
import { Link, useLocation } from 'react-router-dom';


const footerLinks = [
    {
        id: 1,
        title: "Quick Links",
        links: [
            { name: "Home", path: "/" },
            { name: "Why AR?", path: "/#whyar" },
            { name: "AR Books", path: "/#arbooks" },
            { name: "Try AR!", path: "/#tryar" }
        ]
    },
    {
        id: 2,
        title: "Resources",
        links: [
            { name: "FAQs", path: "/faqs" },
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Terms of Use", path: "/terms" }
        ]
    },
    {
        id: 3,
        title: "Support",
        links: [
            { name: "Contact Us", path: "/#contact" },
            { name: "Help Center", path: "/help" },
            { name: "Feedback", path: "/feedback" }
        ]
    },
    {
        id: 4,
        title: "Contact",
        links: [
            { name: "Email: info@ar.ditvi.org", path: "mailto:info@ar.ditvi.org" },
            { name: "Phone: +91 9263767441", path: "tel:+919263767441" }
        ]
    }
];

const socialLinks = [
    {
        id: 1,
        icon: <WhatsApp />,
        url: "https://wa.me/919263767441?text=Hello,%20*Abhishek*%0AI%20wish%20to%20connect%20with%20you."
    },
    {
        id: 2,
        icon: <Instagram />,
        url: "https://www.instagram.com/theabhishekchoudhary0401/"
    },
    {
        id: 3,
        icon: <YouTube />,
        url: "https://www.youtube.com/@theabhishekchoudhary0401"
    },
    {
        id: 4,
        icon: <Pinterest />,
        url: "https://in.pinterest.com/theabhishekchoudhary0401/"
    },
    {
        id: 5,
        icon: <EmailOutlined />,
        url: "mailto:theabhishekchoudhary0401@gmail.com"
    },
    {
        id: 6,
        icon: <Facebook />,
        url: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61568533385928"
    },
    {
        id: 7,
        icon: <X />,
        url: "https://x.com/i/flow/login?redirect_after_login=%2F02mr_abhishek"
    }
];

const Footer = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top whenever the route changes
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="footer">
            <div className="footer-content">
                <Container>
                    <div className="footer-item">
                        <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
                            {footerLinks.map((section) => (
                                <Grid size={{ xs: 12, sm:6, md: 3}} key={section.id}>
                                    <div className="footer-links">
                                        <h4>{section.title}</h4>
                                        <ul>
                                            {section.links.map((link, index) => (
                                                <li key={index}>
                                                    <Link to={link.path}>{link.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>

                        <div className="footer-social-links">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <div className="footer-bottom">
                            <p>Copyright © {new Date().getFullYear()}
                                <Link to="/">www.Ar.ditvi.org</Link>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;