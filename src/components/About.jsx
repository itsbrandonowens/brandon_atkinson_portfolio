import React from 'react'
import '../styles/About.css'

const About = () => {

    return (
        <div className="about_container">
            <h1 className="about_title" id="about">ABOUT</h1>

            <p className="about_text"> Hello! I'm Brandon, a Full-Stack Software Developer based in Newcastle Upon Tyne. I’m a passionate software developer with a strong foundation in Java and a growing interest in full-stack development. With experience in object-oriented
                programming and a commitment to continuous learning, I have developed and implemented a range of projects with a range of languages, including a fully functional chess game in Java and an
                online game with ReactJS. I enjoy taking on new challenges and translating ideas into functional, user-friendly applications.
            </p>

            <div className="about_grid">
                <div className="about_grid_item">
                    <h2 className="about_subtitle"> Tech Stack </h2>
                    <p className="about_grid_text">
                        <li className="about_navbar_list">
                            <ul className="about_navbar_item"> <p className="navbar_text"> Java w/ Spring Boot </p></ul>
                            <ul className="about_navbar_item"> <p className="navbar_text"> ReactJS </p></ul>
                            <ul className="about_navbar_item"><p className="navbar_text"> HTML/CSS </p></ul>
                            <ul className="about_navbar_item"><p className="navbar_text"> Python </p></ul>
                            <ul className="about_navbar_item"><p className="navbar_text"> SQL </p></ul>
                        </li>
                    </p>
                </div>
                <div className="about_grid_item">
                    <h2 className="about_subtitle"> Hobbies and Interests </h2>
                    <p className="about_grid_text">
                        I am a big Newcastle United fan, and football in general. I have an avid interest in PC Gaming, and upgrading my PC at home whenever I can.
                         I love to go to the gym and play 5-aside with my friends whenever I get the chance. 
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About
