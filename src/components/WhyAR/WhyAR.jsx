import React from 'react'
import './WhyAR.css'
import Container from '../../structure/Container/Container'
import Heading from '../../structure/Heading/Heading'

const whyARData = [
    {
        id: 1,
        title: "Modern Learning",
        description: "Transforms Traditional Study into Modern Learning",
        icon: "🎓"
    },
    {
        id: 2,
        title: "Easy Visualization",
        description: "Enables Easy Visualization for Kids",
        icon: "👁️"
    },
    {
        id: 3,
        title: "Better Retention",
        description: "Boosts Memory Retention for Longer Learning",
        icon: "🧠"
    },
    {
        id: 4,
        title: "Future Ready",
        description: "Prepares Kids for Tomorrow's Competitive Edge",
        icon: "🚀"
    }
]

const WhyAR = () => {
    return (
        <section className="whyar" id="whyar">
            <Heading title="Why AR?" />
            <div className="whyar-inner">
                <Container>
                    <div className="whyar-heading">
                        <h1>Empower your child with AR—modern learning, clear visuals, lasting memory, and a future-ready edge.</h1>
                    </div>
                    <div className="whyar-circle">
                        {whyARData.map((item) => (
                            <div className="whyar-content" key={item.id}>
                                <div className="whyar-text">
                                    <span className="whyar-icon">{item.icon}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default WhyAR