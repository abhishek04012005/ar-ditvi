import React from 'react'
import './ArBooks.css'
import ArBookBoxHorizontal from '../../structure/ArBookBoxHorizontal/ArBookBoxHorizontal'
import ArBookImage1 from '../../assets/arbook-image/arbook-img1.png'
import Heading from '../../structure/Heading/Heading'

export const arBooks = [
    {
        id: 1,
        title: "AR ALPHABETS",
        image: ArBookImage1,
        description: ` Discover wildlife like never before through interactive Augmented Reality experiences! Discover wildlife like never before through interactive Augmented Reality experiences! Discover wildlife like never before through interactive Augmented Reality experiences!
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem recusandae aliquid ipsam consequuntur? Minus fugiat, quam voluptatibus aliquid iusto ducimus adipisci nobis corrupti! Quibusdam, quos ipsum voluptas sed eum facilis eos ullam. Tenetur, aliquid
                        nesciunt quaerat ipsum neque incidunt at. Quisquam inventore voluptas placeat tempore vel, nam ut eos natus, architecto accusantium earum voluptatibus deleniti explicabo, ducimus pariatur mollitia? Voluptates aliquam, neque doloribus reiciendis voluptas ut ipsa, 
                        tempore saepe voluptatum quisquam corporis reprehenderit dolorum, harum inventore. Similique, vero mollitia quod nulla assumenda dolorum atque deserunt vitae ipsam id maiores rem dignissimos accusamus. Molestias totam quos praesentium repellendus placeat architecto fuga.`,
        buyLink: "/buy/ar-alphabets",
        tryLink: "/ar-ditvi/ar-book-detail/ar-alphabets",
        readMoreLink: "/ar-ditvi/ar-book-detail/ar-alphabets",
        slug: "ar-alphabets",
        recommendedDescription: "Discover wildlife like never before through interactive Augmented Reality experiences! D",
        amazonLink: "https://www.amazon.in/your-product-link",
        flipkartLink: "https://www.flipkart.com/your-product-link",
    },
    {
        id: 2,
        title: "AR ANIMALS",
        image: ArBookImage1, // Replace with actual image
        description: ` Discover wildlife like never before through interactive Augmented Reality experiences! Discover wildlife like never before through interactive Augmented Reality experiences! Discover wildlife like never before through interactive Augmented Reality experiences!
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem recusandae aliquid ipsam consequuntur? Minus fugiat, quam voluptatibus aliquid iusto ducimus adipisci nobis corrupti! Quibusdam, quos ipsum voluptas sed eum facilis eos ullam. Tenetur, aliquid
                        nesciunt quaerat ipsum neque incidunt at. Quisquam inventore voluptas placeat tempore vel, nam ut eos natus, architecto accusantium earum voluptatibus deleniti explicabo, ducimus pariatur mollitia? Voluptates aliquam, neque doloribus reiciendis voluptas ut ipsa, 
                        tempore saepe voluptatum quisquam corporis reprehenderit dolorum, harum inventore. Similique, vero mollitia quod nulla assumenda dolorum atque deserunt vitae ipsam id maiores rem dignissimos accusamus. Molestias totam quos praesentium repellendus placeat architecto fuga.`, buyLink: "/buy/ar-animals",
        tryLink: "/ar-ditvi/ar-book-detail/ar-animals",
        readMoreLink: "/ar-ditvi/ar-book-detail/ar-animals",
        slug: "ar-animals",
        recommendedDescription: "Discover wildlife like never before through interactive Augmented Reality experiences! D",
        amazonLink: "https://www.amazon.in/your-product-link",
        flipkartLink: "https://www.flipkart.com/your-product-link",

    },
    {
        id: 3,
        title: "AR PLANETS",
        image: ArBookImage1,
        description: ` Discover wildlife like never before through interactive Augmented Reality experiences! Discover wildlife like never before through interactive Augmented Reality experiences! Discover wildlife like never before through interactive Augmented Reality experiences!
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem recusandae aliquid ipsam consequuntur? Minus fugiat, quam voluptatibus aliquid iusto ducimus adipisci nobis corrupti! Quibusdam, quos ipsum voluptas sed eum facilis eos ullam. Tenetur, aliquid
                        nesciunt quaerat ipsum neque incidunt at. Quisquam inventore voluptas placeat tempore vel, nam ut eos natus, architecto accusantium earum voluptatibus deleniti explicabo, ducimus pariatur mollitia? Voluptates aliquam, neque doloribus reiciendis voluptas ut ipsa, 
                        tempore saepe voluptatum quisquam corporis reprehenderit dolorum, harum inventore. Similique, vero mollitia quod nulla assumenda dolorum atque deserunt vitae ipsam id maiores rem dignissimos accusamus. Molestias totam quos praesentium repellendus placeat architecto fuga.`, buyLink: "/buy/ar-animals",
        tryLink: "/ar-ditvi/ar-book-detail/ar-planets",
        readMoreLink: "/ar-ditvi/ar-book-detail/ar-planets",
        slug: "ar-planets",
        recommendedDescription: "Discover wildlife like never before through interactive Augmented Reality experiences! D",
        amazonLink: "https://www.amazon.in/your-product-link",
        flipkartLink: "https://www.flipkart.com/your-product-link",

    },
    {
        id: 4,
        title: "AR VEGETABLES",
        image: ArBookImage1,
        description: ` Discover wildlife like never before through interactive Augmented Reality experiences! Discover wildlife like never before through interactive Augmented Reality experiences! Discover wildlife like never before through interactive Augmented Reality experiences!
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem recusandae aliquid ipsam consequuntur? Minus fugiat, quam voluptatibus aliquid iusto ducimus adipisci nobis corrupti! Quibusdam, quos ipsum voluptas sed eum facilis eos ullam. Tenetur, aliquid
                        nesciunt quaerat ipsum neque incidunt at. Quisquam inventore voluptas placeat tempore vel, nam ut eos natus, architecto accusantium earum voluptatibus deleniti explicabo, ducimus pariatur mollitia? Voluptates aliquam, neque doloribus reiciendis voluptas ut ipsa, 
                        tempore saepe voluptatum quisquam corporis reprehenderit dolorum, harum inventore. Similique, vero mollitia quod nulla assumenda dolorum atque deserunt vitae ipsam id maiores rem dignissimos accusamus. Molestias totam quos praesentium repellendus placeat architecto fuga.`, buyLink: "/buy/ar-animals",
        tryLink: "/ar-ditvi/ar-book-detail/ar-vegetables",
        readMoreLink: "/ar-ditvi/ar-book-detail/ar-vegetables",
        slug: "ar-vegetables",
        recommendedDescription: "Discover wildlife like never before through interactive Augmented Reality experiences! D",
        amazonLink: "https://www.amazon.in/your-product-link",
        flipkartLink: "https://www.flipkart.com/your-product-link",

    }

]


const ArBooks = () => {
    return (
        <div className="arbooks">
            <Heading title="AR Books" />
            <ArBookBoxHorizontal ArBookHorizontal={arBooks} />
        </div>
    )
}

export default ArBooks
