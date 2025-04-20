import React from "react";
import { EmailOutlined, Facebook, Instagram, WhatsApp, X, YouTube, Pinterest } from '@mui/icons-material';
import { Grid } from "@mui/material";
import './Footer.css'
import Container from '../../structure/Container/Container'
// import {Link}   from 'react-router-dom';


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-content">
                <Container>
                    <div className="footer-item">


                        <Grid container
                            spacing={{ xs: 0, md: 2, lg: 2 }}
                        >


                            <Grid
                                // sx={{ bgcolor: 'blue' }}
                                size={{ xs: 6, md: 3 }}>
                                <div className="footer-links">
                                    <h4>Home</h4>
                                </div>


                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'red' }}
                                size={{ xs: 6, md: 3 }}>
                                <div className="footer-links">
                                <h4>Home</h4>

                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'yellow' }}
                                size={{ xs: 6, md: 3 }}>
                                <div className="footer-links">
                                <h4>Home</h4>

                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'pink' }}
                                size={{ xs: 6, md: 3 }}>
                                <div className="footer-links">
                                <h4>Home</h4>

                                </div>
                            </Grid>


                        </Grid>

                        <div className="footer-social-links">
                            <a
                                href="https://wa.me/919263767441?text=Hello,%20*Abhishek*%0AI%20wish%20to%20connect%20with%20you."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsApp />
                            </a>


                            <a
                                href="https://www.instagram.com/theabhishekchoudhary0401/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><Instagram /></a>

                            <a
                                href="https://www.youtube.com/@theabhishekchoudhary0401"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><YouTube /></a>

                            <a
                                href="https://in.pinterest.com/theabhishekchoudhary0401/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><Pinterest /></a>


                            <a
                                href="mailto:theabhishekchoudhary0401@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><EmailOutlined /></a>

                            <a
                                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61568533385928"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><Facebook /></a>


                            <a
                                href="https://x.com/i/flow/login?redirect_after_login=%2F02mr_abhishek"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><X /></a>
                        </div>
                        <p style={{ textAlign: 'center', color: 'white' }}>Copyright © {new Date().getFullYear()} <a href="/" style={{ color: 'white' }}>www.Ar.ditvi.org</a>  </p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer