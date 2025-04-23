import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material'
import './ArBookBoxHorizontal.css'
import Container from '../Container/Container'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BuyPopup from '../BuyPopup/BuyPopup'

const ArBookBoxHorizontal = ({ ArBookHorizontal }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleTryClick = (tryLink, bookSlug) => {
        navigate(`/ar-book-detail/${bookSlug}`);
        window.scrollTo(0, 0);
    };

    const handleBuyClick = (book) => {
        setSelectedBook(book);
        setIsPopupOpen(true);
    };

    return (
        <div className="arbook-box-horizontal">
            <Container>
                {ArBookHorizontal.map((book, index) => (
                    <div className="arbook-box-horizontal-content" key={book.id}>
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
                                        <img src={book.image} alt={book.title} />
                                    </div>
                                    <div className="arbook-box-horizontal-button">
                                        <button 
                                            className='arbook-box-horizontal-btn-left'
                                            onClick={() => handleBuyClick(book)}
                                        >
                                            BUY AR!
                                        </button>
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
                                        <p>{book.description}</p>
                                    </div>
                                    <div className="arbook-box-horizontal-text-button">
                                        <button 
                                            className='arbook-box-horizontal-btn-text' 
                                            onClick={() => handleTryClick(book.readMoreLink, book.slug)}
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </Container>

            <BuyPopup
                isOpen={isPopupOpen}
                onClose={() => {
                    setIsPopupOpen(false);
                    setSelectedBook(null);
                }}
                book={selectedBook}
            />
        </div>
    )
}

export default ArBookBoxHorizontal

