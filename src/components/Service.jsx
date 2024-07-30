import React from 'react'
import '../styles/Service.css'
import frontEndImage from './images/frontendimg.png'
import backEndImage from './images/backendimg.png'
import projectImage from './images/projectsimg.png'

const Service = () => {
    //image of my desk or some shit in between service and about just like video 
    // front end - name languages i can do - same for backend and databases ( maybe replace databases with projects)
    return (

        <div className="service_container">
            <h1 className="service_title" id="service">WHAT I DO</h1>
            <div className="about_line_1"></div>
            <div className="about_line_2"></div>
            <div className="service_content_grid">
                <div className="service_frontend">
                    <img src={frontEndImage} className="service_image" alt="Front End"></img>
                    <h1 className="service_header"> Front-End</h1>
                    <p className="service_text"> I am proficient in ReactJS, HTML5 and CSS3. Most of my time and experience is spent on my Last Orders project.</p>
                </div>
                <div className="service_backend">
                    <img src={backEndImage} className="service_image" alt="Front End"></img>
                    <h1 className="service_header"> Back-End</h1>
                    <p className="service_text"> I have experience in Java, learning OOP at FDM and using Spring Boot to create REST API's. </p>
                </div>
                <div className="service_database">

                    <img src={projectImage} className="service_image" alt="Front End"></img>
                    <h1 className="service_header"> Projects </h1>
                    <p className="service_text"> I like creating projects in my spare time, expanding my coding knowledge and skills while creating apps or programs that I can be proud of.</p>
                </div>
            </div>
        </div>

    )
}

export default Service
