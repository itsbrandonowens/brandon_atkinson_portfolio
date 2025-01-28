import React from 'react'
import '../styles/About.css'
import AboutPicture from './images/about_picture.jpg'

const About = () => {

    return (
        <div className="about_container">
            <h1 className="about_title" id="about">ABOUT</h1>
            <div className='about_grid_container'>
                <img src={AboutPicture} className="about_image" alt="Brandon Atkinson Image"></img>
                <p className="about_text">
                    <span className='hello_text'> Hello! I'm Brandon, a Full-Stack Developer based in Newcastle Upon Tyne!</span>
                    <br></br>
                    <br></br>
                    With experience in object-oriented programming and a commitment to continuous learning, I have developed and implemented a range of projects, including my online game Last Orders and several Spring Boot applications.
                    <br></br>
                    <br></br>
                    I am a determined, passionate developer, driven by curiosity and creativity, constantly striving to learn, innovate, and deliver impactful solutions through my dedication to coding and problem-solving.
                    <br></br>
                    <br></br>
                    I’m a big Newcastle United fan and passionate PC gamer who loves upgrading his hardware and staying updated on tech trends. When I’m not gaming or coding, I enjoy hitting the gym and staying active.

                </p>
            </div>
        </div>
    )
}

export default About
