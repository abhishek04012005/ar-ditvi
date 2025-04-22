import React from 'react'
import { Grid } from '@mui/material'
import './RecommendedBooks.css'
import Heading from '../../structure/Heading/Heading'
import Container from '../../structure/Container/Container'
import { useParams, useNavigate } from 'react-router-dom'
import { arBooks } from '../../components/ArBooks/ArBooks'

const RecommendedBooks = () => {
    const { bookSlug } = useParams()
    const navigate = useNavigate()

    // Filter out the current book and get other recommendations
    const recommendedBooks = arBooks.filter(book => book.slug !== bookSlug)

    if (!recommendedBooks || recommendedBooks.length === 0) {
        return null // Don't show section if no recommendations
    }

    const handleBookClick = (slug) => {
        navigate(`/ar-book-detail/${slug}`)
        window.scrollTo(0, 0)
    }

    return (
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
                        <Grid size={{ xs: 12, sm:6, md: 4 }} key={book.id}>
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
                                        onClick={() => window.location.href = book.buyLink}
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
    )
}

export default RecommendedBooks