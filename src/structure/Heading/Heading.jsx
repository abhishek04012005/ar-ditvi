import React from 'react'
import './Heading.css'
import HeadingLineImage from '../../assets/headingLine.svg'

const Heading = (props) => {
  return (
    <div className="heading">
        <div className="heading-text">
           <p>{props.title}</p>
        </div>
        <div className="heading-img">
            <img src={HeadingLineImage} alt="" />
        </div>
    </div>
  )
}
export default Heading