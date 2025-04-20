import React from 'react'
import { Grid } from '@mui/material'
import './RecommendedBooks.css'
import Heading from '../../structure/Heading/Heading'
import Container from '../../structure/Container/Container'
import RecomendedBookImage from '../../assets/arbook-image/arbook-img1.png'

const recommendedBooksData = [
    {
        id: 1,
        title: "AR Alphabets",
        description: "Learn alphabets in an interactive way with AR technology",
        image: RecomendedBookImage,
        buyLink: "/buy/ar-alphabets",
        tryLink: "/try/ar-alphabets"
    },
    {
        id: 2,
        title: "AR Animals",
        description: "Discover amazing animals in 3D with augmented reality",
        image: RecomendedBookImage,
        buyLink: "/buy/ar-animals",
        tryLink: "/try/ar-animals"
    },
    {
        id: 3,
        title: "AR Science",
        description: "Experience scientific concepts come alive with AR",
        image: RecomendedBookImage,
        buyLink: "/buy/ar-science",
        tryLink: "/try/ar-science"
    }
];


const RecommendedBooks = () => {
    if (!recommendedBooksData || recommendedBooksData.length === 0) {
        return <div>No recommended books available</div>;
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
                    {recommendedBooksData.map((book) => (
                        <Grid size={{ xs: 12, md: 4 }} key={book.id}>
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
                                    <p>{book.description}</p>
                                </div>
                                <div className="recommended-book-button">
                                    <a href={book.buyLink}>
                                        <button className='recommended-book-btn-up'>
                                            BUY NOW
                                        </button>
                                    </a>
                                    <a href={book.tryLink}>
                                        <button className='recommended-book-btn-down'>
                                            TRY NOW
                                        </button>
                                    </a>
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