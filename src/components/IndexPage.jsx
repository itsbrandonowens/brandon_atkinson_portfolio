import React from 'react'
import '../styles/IndexPage.css'
import { Link } from 'react-router-dom';
import IndexPicture from './images/index_me.png'
import linkedInLogo from './images/linkedInLogo.png'
import githubLogo from './images/githubLogo.png'


const IndexPage = () => {
    // Java projects, python projects catagories for portfolio
    // add dots to images in portfolio
    // look at tailwind for css
    // images in portfolio are too big, make them smaller 




    // Scrolls back to the top of the page when "home" is clicked
    const homeHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    // Gets the "about" titles id and scrolls until that is on the top of the view
    const aboutHandler = () => {
        document.getElementById('about').scrollIntoView({ behavior: "smooth" });

    };

    // Gets the "service" titles id and scrolls until that is on the top of the view
    const serviceHandler = () => {
        document.getElementById('service').scrollIntoView({ behavior: "smooth" });
    };

    // Gets the "service" titles id and scrolls until that is on the top of the view
    const portfolioHandler = () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: "smooth" });
    };

    // Gets the "service" titles id and scrolls until that is on the top of the view
    const contactHandler = () => {
        document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
    };

    return (

        <div className="index_container" >
            <div className="navbar_container">
                <li className="navbar_list">
                    <ul className="navbar_item" onClick={homeHandler}> <p className="navbar_text"> HOME </p></ul>
                    <ul className="navbar_item" onClick={aboutHandler}> <p className="navbar_text"> ABOUT </p></ul>
                    <ul className="navbar_item" onClick={serviceHandler}> <p className="navbar_text"> SERVICE </p></ul>
                    <ul className="navbar_item" onClick={portfolioHandler}> <p className="navbar_text"> PORTFOLIO </p></ul>
                    <ul className="navbar_item" onClick={contactHandler}> <p className="navbar_text"> CONTACT </p></ul>
                </li>

            </div>

            <h1 className="full_name_text">Brandon Atkinson<span className="full_stop_text">.</span></h1>
            <h2 className="job_role_text">Software Developer</h2>
            <button className="index_hire_me_button" onClick={contactHandler}> Hire Me </button>
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
