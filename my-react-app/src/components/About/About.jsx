import React from 'react'
import "./About.css"
import myImage from "../../assets/hero.jpg"

const About = () => {
  return (
    <div className='about'> 
      <h1>  About Me</h1>
      <hr />
      <div className="about-content">

        <div className="about-image">
          <img src= {myImage} alt="My Image" />
        </div>
        <div className="about-biography">
          <p>
            I am a passionate developer with a keen interest in creating innovative solutions. 
            My journey in technology has been driven by a desire to learn and grow, and I am 
            excited to continue exploring new challenges in the field.
        </p>
        <p>
            In my free time, I enjoy working on personal projects, contributing to open-source 
            initiatives, and staying updated with the latest trends in technology. I believe 
            in the power of collaboration and am always eager to connect with like-minded individuals.
        </p>
        </div>
      </div>
      
    </div>
  )
}

export default About
