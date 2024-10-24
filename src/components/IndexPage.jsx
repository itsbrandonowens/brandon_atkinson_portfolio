import React from 'react'
import '../styles/IndexPage.css'
import { Link } from 'react-router-dom';
import IndexPicture from './images/index_me.png'
import linkedInLogo from './images/linkedInLogo.png'
import githubLogo from './images/githubLogo.png'
import brandon_cv from './brandon_cv.pdf'

const IndexPage = () => {
    //space between icon and text in navbar needs fixed when sizing is different 
    //improve mobile css

    // Gets the "about" titles id and scrolls until that is on the top of the view
    const aboutHandler = () => {
        document.getElementById('about').scrollIntoView({ behavior: "smooth" });
    }

    return (

        <div className="index_container" id="top" >
            <h1 className="full_name_text">Brandon Atkinson<span className="full_stop_text">.</span></h1>
            <h2 className="job_role_text">Full-Stack Software Developer</h2>
            <a href={brandon_cv} target="_blank" ><button className="index_hire_me_button"> Download CV </button></a>
            <button className="index_explore_more_button" onClick={aboutHandler}> Explore More </button>


            <img src={IndexPicture} className="index_image_me" alt="Brandon Atkinson Image"></img>


            
                <a href="https://www.linkedin.com/in/brandondoatkinson/" target="_blank" >
                    <img src={linkedInLogo} className="socials_index_linked" alt="Brandon Atkinson Image"></img>
                </a>
                <a href="https://github.com/itsbrandonowens" target="_blank" >
                    <img src={githubLogo} className="socials_index_github" alt="Brandon Atkinson Image"></img>
                </a>

            
        </div >

    )
}


export default IndexPage
