import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Grid } from '@mui/material';
import Container from '../../structure/Container/Container'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Testimonials.css';
import Heading from '../../structure/Heading/Heading';
import Client1 from '../../assets/client/client1.png'
import Client2 from '../../assets/client/client2.png'
import Client3 from '../../assets/client/client3.png'
import Client4 from '../../assets/client/client4.png'
import Client5 from '../../assets/client/client5.png'
import Client6 from '../../assets/client/client6.png'

const testimonialsDetails = [
    {
        id: 1, testimonial: 'This service has changed my business for the better!',
        name: 'Ajay K.',
        designation: 'Software Developer',
        company: '',
        image: Client1,
    },
    {
        id: 2,
        testimonial: 'Excellent service and professional work. ',
        name: 'Anuradha K.',
        designation: 'Founder',
        company: 'Ditvi Foundation',
        image: Client2,
    },
    {
        id: 3,
        testimonial: 'A best place for digital marketing solution.',
        name: 'Hemlata K.',
        designation: 'Web Designer',
        company: '',
        image: Client3,
    },
    {
        id: 4,
        testimonial: 'Top-notch technology, service, support and amazing skills.',
        name: 'Vishwas',
        designation: '',
        company: 'Ditvi Foundation',
        image: Client4,
    },
    {
        id: 5,
        testimonial: 'I am very happy with the service provided by Ditvi.',
        name: 'Kanchan K.',
        designation: '',
        company: 'Ditvi Foundation',
        image: Client5,
    },
    {
        id: 6,
        testimonial: 'Ditvi is a great place to work and learn.',
        name: 'Indu Devi',
        designation: '',
        company: 'Ditvi Foundation',
        image: Client6,
    },



];


const NextArrow = (props) => {
    const { className, onClick } = props;
    return (

        <ArrowForwardIcon className={`${className} custom-arrow`} onClick={onClick} />
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (

        <ArrowBackIcon className={`${className} custom-arrow`} onClick={onClick} />

    );
};



const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1225, settings: { slidesToShow: 3, slidesToScroll: 1, }, },
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, }, },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, }, },
        ],
    };
    return (
        <div className="testimonial">
            <Heading title="testimonials" />
            <div className="testimonial-inner">
                <Container>
                    <Slider {...settings}>
                        {testimonialsDetails.map((testimonial) => (
                            <Grid
                                container
                                key={testimonial.id}
                                className="testimonial-card" // Apply external CSS class
                            >
                                <div className="testimonial-content">
                                    <p className="quote">“</p>
                                    <p className="testimonial-text">
                                        {testimonial.testimonial}
                                    </p>

                                    <div className="testimonial-info">
                                        <div className="testimonial-name">
                                            <p className="name">
                                                <span className="highlight">@</span>{testimonial.name}
                                            </p>
                                            <p className="designation">
                                                {testimonial.designation} {testimonial.company}
                                            </p>
                                        </div>
                                        <img
                                            src={testimonial.image}
                                            alt={`feedback_by-${testimonial.name}`}
                                            className="testimonial-image"
                                        />
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Slider>
                </Container>
            </div>
        </div>
    )
}

export default Testimonials