import React from 'react'
import "./Hero.css"
import myImage from "../../assets/developer.jpg"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-content">
          <div className="image-container">
            <img src= {myImage} alt="" className="image" />
          </div>
            <div className="hero-message">
              <h1 className='name'>Ujay</h1>
              <h2>Developer, Computer Scientist</h2>
            </div>
        
        </div>
    </div>
  )
}

export default Hero
