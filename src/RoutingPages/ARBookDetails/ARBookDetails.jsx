import React, { useState } from 'react'
import './ARBookDetails.css'
import { Grid } from '@mui/material'
import Heading from '../../structure/Heading/Heading'
import Container from '../../structure/Container/Container'
import TryNow from '../TryNow/TryNow'
import RecommendedBooks from '../RecommendedBooks/RecommendedBooks'
import { useParams } from 'react-router-dom'
import { arBooks } from '../../components/ArBooks/ArBooks';
import BuyPopup from '../../structure/BuyPopup/BuyPopup'


const ARBookDetails = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const { bookSlug } = useParams();

    if (!bookSlug) {
        return <div>No book selected</div>;
    }

    const book = arBooks.find(book => book.slug === bookSlug);

    if (!book) {
        return <div>Book not found</div>;
    }


    const handleBuyClick = () => {
        setIsPopupOpen(true);
    };



    return (
        <>
            <div className="arbook-details">
                <Heading title="Book Details" />
                <Container>
                    <div className="arbook-detail-inner">
                        <Grid
                            container
                            spacing={{ xs: 5, md: 3 }}
                        >
                            <Grid size={{ xs: 12, md: 5 }}>
                                <div className="arbook-detail-left">
                                    <div className="arbook-detail-image">
                                        <img src={book.image} alt={book.title} />
                                    </div>

                                </div>
                            </Grid>

                            <Grid size={{ xs: 12, md: 7 }}>
                                <div className="arbook-detail-right">
                                    <div className="arbook-detail-right-text">
                                        <h2>{book.title}</h2>
                                        <p>
                                            {book.description}
                                        </p>
                                    </div>
                                    <div className="arbook-detail-button">

                                        <button
                                            className='arbook-detail-btn-left'
                                            onClick={handleBuyClick}
                                        >
                                            BUY AR!
                                        </button>
                                        <button className='arbook-detail-btn-right'>FREE TRIAL E-BOOK</button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

            <BuyPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                book={book}
            />
            <TryNow />
            <RecommendedBooks />
        </>
    )
}

export default ARBookDetails