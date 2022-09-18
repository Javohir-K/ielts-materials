import React from 'react'
import "./Homepage.css"
import Img1 from "../../img/bg2.jpg"

function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__hero">
            <p className="hero__motto">
                Practice makes perfect!
            </p>
            <h2 className='hero__main'>
                what are you waiting? <br /> join us !
            </h2>
            <button className='hero__btn'>Start practicing now</button>
        </div>
    </div>
  )
}

export default Homepage