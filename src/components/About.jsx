import React from 'react'
import '../styles/About.css'
import brandon_cv from './brandon_cv.pdf'

const About = () => {

    return (

        <div className="about_container">
            <h1 className="about_title" id="about">ABOUT</h1>
            <div className="about_line_1"></div>
            <div className="about_line_2"></div>
            <p className="about_text"> Hello! I'm Brandon, a software devloper, a ReactJS enthusiast and a man dedicated to creating projects using clean, concise code!
                I am also the creator of <a href="https://lastordersgame.com/" className="lastOrdersLink" target="_blank">Last Orders</a>. If you have a project that you 
                want to hire me for, or potentially need my help with anything then make sure to get in touch.
            </p>
           <a href={brandon_cv} target="_blank" ><button className="download_cv_button"> Download My CV </button> </a>
        </div>

    )
}

export default About
