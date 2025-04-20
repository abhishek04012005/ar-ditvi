import React from 'react'
import './ARBookDetails.css'
import { Grid } from '@mui/material'
import Heading from '../../structure/Heading/Heading'
import Container from '../../structure/Container/Container'
import BookDetailImage1 from '../../assets/arbook-image/arbook-img1.png'
import TryNow from '../TryNow/TryNow'
import RecommendedBooks from '../RecommendedBooks/RecommendedBooks'

const ARBookDetails = () => {
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
                                        <img src={BookDetailImage1} alt="" />
                                    </div>

                                </div>
                            </Grid>

                            <Grid size={{ xs: 12, md: 7 }}>
                                <div className="arbook-detail-right">
                                    <div className="arbook-detail-right-text">
                                        <h2>AR ALPHABETS</h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere, excepturi architecto consequuntur quaerat aut veritatis natus et at rerum soluta perferendis consequatur esse minima dolore odio doloribus voluptate hic sequi. Tempore consequuntur quos autem, minus velit, molestias vero asperiores cumque doloribus aut reprehenderit hic nam nesciunt ipsam libero vel alias laborum rem delectus maiores officiis possimus aperiam nobis. Fugiat neque itaque minus voluptates asperiores officiis quis in iste! Voluptatibus nam alias maxime quidem labore, ratione praesentium itaque voluptas unde ipsum impedit sed quibusdam eligendi ea ullam nobis error repudiandae culpa optio. Qui corrupti quibusdam doloribus nulla tempore. Rem officiis, accusamus amet ipsa odit dolorem animi, ipsam eveniet, fugiat aliquid temporibus perspiciatis laudantium similique nostrum magnam illo culpa? Soluta a blanditiis esse, voluptas consequuntur at nemo debitis expedita dolorum quidem? Odio ullam consectetur, placeat aut error quidem exercitationem dicta culpa sed voluptatum inventore beatae ab, dolorem quod eaque earum ducimus.
                                        </p>
                                    </div>
                                    <div className="arbook-detail-button">
                                        <button className='arbook-detail-btn-left'>BUY NOW</button>
                                        <button className='arbook-detail-btn-right'>FREE TRIAL E-BOOK</button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <TryNow />
            <RecommendedBooks />
        </>
    )
}

export default ARBookDetails