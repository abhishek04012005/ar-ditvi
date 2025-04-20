import React from 'react'
import './WhyAR.css'
import Container from '../../structure/Container/Container'
import Heading from '../../structure/Heading/Heading'


const whyAR = [
    {
        id: 1,
        description: "Transforms Traditional Study into Modern Learning."
    },
    {
        id: 2,
        description: "Enables Easy Visualization for Kids."
    },
    {
        id: 3,
        description: "Boosts Memory Retention for Longer Learning."
    },
    {
        id: 4,
        description: "Prepares Kids for Tomorrow's Competitive Edge."
    }
]


const WhyAR = () => {
    return (
        <div className="whyar">
            <Heading title="Why AR?" />
            <div className="whyar-inner">
                <Container>
                    <div className="whyar-heading">
                        <h1>Empower your child with AR—modern learning, clear visuals, lasting memory, and a future-ready edge.</h1>
                    </div>
                    <div className="whyar-circle">
                        {whyAR.map((WHYAR) => (
                            <div className="whyar-content" key={WHYAR.id}>
                                <div className="whyar-text">
                                    <p>{WHYAR.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </Container>
            </div>
        </div>
    )
}

export default WhyAR