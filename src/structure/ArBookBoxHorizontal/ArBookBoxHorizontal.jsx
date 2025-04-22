import React, { useEffect } from "react";
import { Grid } from '@mui/material'
import './ArBookBoxHorizontal.css'
import Container from '../Container/Container'
import { Link, useLocation, useNavigate } from 'react-router-dom';



const ArBookBoxHorizontal = ({ ArBookHorizontal }) => {


    const location = useLocation();
    const navigate = useNavigate();

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Handle try button click
    const handleTryClick = (tryLink, bookSlug) => {
        navigate(`/ar-book-detail/${bookSlug}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className="arbook-box-horizontal">
            <Container>
                {ArBookHorizontal.map((book, index) => (
                    <div className="arbook-box-horizontal-content">
                        <Grid
                            container
                            direction={{
                                xs: 'column',
                                md: index % 2 === 0 ? 'row' : 'row-reverse',
                                lg: index % 2 === 0 ? 'row' : 'row-reverse'


                            }}
                            spacing={{ xs: 5, md: 3 }}
                        >
                            <Grid size={{ xs: 12, md: 5 }}>
                                <div className="arbook-box-horizontal-left">
                                    <div className="arbook-box-horizontal-image">
                                        <img src={book.image} alt="" />
                                    </div>
                                    <div className="arbook-box-horizontal-button">
                                        <button className='arbook-box-horizontal-btn-left'>BUY AR!</button>
                                        <button
                                            className='arbook-box-horizontal-btn-right'
                                            onClick={() => handleTryClick(book.tryLink, book.slug)}
                                        >
                                            TRY AR!
                                        </button>
                                    </div>
                                </div>
                            </Grid>

                            <Grid size={{ xs: 12, md: 7 }}>
                                <div className="arbook-box-horizontal-right">
                                    <div className="arbook-box-horizontal-right-text">
                                        <h2>{book.title}</h2>
                                        <p>
                                            {book.description}
                                        </p>
                                    </div>
                                    <div className="arbook-box-horizontal-text-button">
                                        <button className='arbook-box-horizontal-btn-text' onClick={()=> handleTryClick(book.readMoreLink, book.slug)}>Read More</button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default ArBookBoxHorizontal