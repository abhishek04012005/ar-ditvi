import React from 'react'
import HeroLeft from '../../assets/background/hero.png'
import './Hero.css'
import Container from '../../structure/Container/Container'

const Hero = () => {
    return (
        <div className="hero">
            <Container>
                <div className="hero-inner">
                    <div className="hero-left">
                        <div className="hero-left-text">
                            <h1 className='hero-left-text-heading'>Magic of AR</h1>
                            <h1 className='hero-left-text-subheading'>Step into a new World
                                of Learning Where
                                Every Page Comes to Life!</h1>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={HeroLeft} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero