import React from 'react'
import Hero from './Hero/Hero'
import WhyAR from './WhyAR/WhyAR'
import ArBooks from './ArBooks/ArBooks'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'

const Main = () => {
    return (
        <div className="main">
            <Hero />
            <WhyAR />
            <ArBooks />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Main