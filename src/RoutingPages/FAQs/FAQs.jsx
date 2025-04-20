import React, { useState } from 'react'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'
import './FAQs.css'
import Container from '../../structure/Container/Container'
import Heading from '../../structure/Heading/Heading'

const faqData = [
    {
        id: 1,
        question: "What is Augmented Reality (AR)?",
        answer: "Augmented Reality is a technology that overlays digital content onto the real world, enhancing your physical environment with computer-generated information, images, and interactive elements."
    },
    {
        id: 2,
        question: "How do AR books work?",
        answer: "AR books combine traditional printed materials with digital content. By scanning specific pages with our app, you can see 3D models, animations, and interactive content come to life right on the page."
    },
    {
        id: 3,
        question: "What devices are compatible with AR books?",
        answer: "Our AR books work with most modern smartphones and tablets that have a camera. Both iOS and Android devices are supported through our dedicated app."
    },
    {
        id: 4,
        question: "What devices are compatible with AR books?",
        answer: "Our AR books work with most modern smartphones and tablets that have a camera. Both iOS and Android devices are supported through our dedicated app."
    },
    {
        id: 5,
        question: "What devices are compatible with AR books?",
        answer: "Our AR books work with most modern smartphones and tablets that have a camera. Both iOS and Android devices are supported through our dedicated app."
    },
    {
        id: 6,
        question: "What devices are compatible with AR books?",
        answer: "Our AR books work with most modern smartphones and tablets that have a camera. Both iOS and Android devices are supported through our dedicated app."
    }
]

const FAQs = () => {
    const [expandedId, setExpandedId] = useState(null)

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <div className="faqs">
            <Heading title="FAQs" />
            <div className="faqs-inner">
                <Container>
                    <div className="faqs-container">
                        {faqData.map((faq) => (
                            <div className="faq-item" key={faq.id}>
                                <div
                                    className="faq-question"
                                    onClick={() => handleToggle(faq.id)}
                                >
                                    <h3>{faq.question}</h3>
                                    {expandedId === faq.id ?
                                        <RemoveIcon className="faq-icon" /> :
                                        <AddIcon className="faq-icon" />
                                    }
                                </div>
                                {expandedId === faq.id && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default FAQs;