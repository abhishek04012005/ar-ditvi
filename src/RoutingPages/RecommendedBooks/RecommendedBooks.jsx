import React, { useState } from 'react'
import { Grid } from '@mui/material'
import './RecommendedBooks.css'
import Heading from '../../structure/Heading/Heading'
import Container from '../../structure/Container/Container'
import { useParams, useNavigate } from 'react-router-dom'
import { arBooks } from '../../components/ArBooks/ArBooks'
import BuyPopup from '../../structure/BuyPopup/BuyPopup'

const RecommendedBooks = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null); // Add this state
    const { bookSlug } = useParams();
    const navigate = useNavigate();

    const recommendedBooks = arBooks.filter(book => book.slug !== bookSlug);

    if (!recommendedBooks || recommendedBooks.length === 0) {
        return null;
    }

    const handleBuyClick = (book) => { // Update this function
        setSelectedBook(book);
        setIsPopupOpen(true);
    };

    const handleBookClick = (slug) => {
        navigate(`/ar-book-detail/${slug}`);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className="recommended-book">
                <Heading title="Recommended Books" />
                <Container>
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 3, md: 4 }}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {recommendedBooks.map((book) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={book.id}>
                                <div className="recommended-book-box">
                                    <div className="recommended-book-image">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="recommended-book-text">
                                        <h2>{book.title}</h2>
                                        <p>{book.recommendedDescription}</p>
                                    </div>
                                    <div className="recommended-book-button">
                                        <button
                                            className='recommended-book-btn-up'
                                            onClick={() => handleBuyClick(book)} // Pass the book
                                        >
                                            BUY NOW
                                        </button>
                                        <button
                                            className='recommended-book-btn-down'
                                            onClick={() => handleBookClick(book.slug)}
                                        >
                                            TRY NOW
                                        </button>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>

            <BuyPopup
                isOpen={isPopupOpen}
                onClose={() => {
                    setIsPopupOpen(false);
                    setSelectedBook(null); // Clear selected book on close
                }}
                book={selectedBook} // Pass selected book instead of current book
            />
        </>
    );
};

export default RecommendedBooks;