import React from 'react'
import '../styles/IndexPage.css'
import { Link } from 'react-router-dom';
import IndexPicture from './images/index_me.png'
import loLogo from './images/LastOrdersPortf.png'
import linked_in_logo from './images/linkedin_icon.png'
import github_logo from './images/github_icon.png'
import brandon_cv from './brandon_cv.pdf'

const IndexPage = () => {
    //add more to about section
   
    // Gets the "about" titles id and scrolls until that is on the top of the view
    // move all java projects to one folder and same with each language
    const aboutHandler = () => {
        document.getElementById('about').scrollIntoView({ behavior: "smooth" });
    }

    return (

        <div className="index_container" id="top" >
            <h1 className="full_name_text">Brandon Atkinson<span className="full_stop_text">.</span></h1>
            <h2 className="job_role_text">Full-Stack Software Developer</h2>
            <a href={brandon_cv} target="_blank" ><button className="index_hire_me_button"> Download CV </button></a>
            <button className="index_explore_more_button" onClick={aboutHandler}> Explore More </button>
            
            <h2 className='creator_text'>creator of</h2>
            <img src={loLogo} className='creator_lo_logo' alt="Last Orders Logo"></img>

            <img src={IndexPicture} className="index_image_me" alt="Brandon Atkinson Image"></img>

                <a className="no_list_style" href="https://www.linkedin.com/in/brandondoatkinson/" target="_blank" ><button className="linked_in_button">  <img src={linked_in_logo} className="index_icon" alt="contact_icon"></img> </button> </a>
                <a className="no_list_style" href="https://github.com/itsbrandonowens" target="_blank" ><button className="github_button"> <img src={github_logo} className="index_icon" alt="contact_icon"></img> </button> </a>
  
        </div >

    )
}


export default IndexPage
