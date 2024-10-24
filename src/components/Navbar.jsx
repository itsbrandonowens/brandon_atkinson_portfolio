import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import IndexPicture from './images/index_me.png'
import home_icon from './images/home_icon.png'
import about_icon from './images/about_icon.png'
import service_icon from './images/service_icon.png'
import portfolio_icon from './images/portfolio_icon.png'
import contact_icon from './images/contact_icon.png'
import linked_in_logo from './images/linkedin_icon.png'
import github_logo from './images/github_icon.png'



const Navbar = () => {
    return (


        <div className="navbar_container">
            <img src={IndexPicture} className="nav_image_me" alt="Brandon Atkinson Image"></img>
            <h2 className="navbar_name_text">Brandon Atkinson</h2>
            <p className="navbar_title_text">Software Developer</p>
            <h2 className="navbar_subtitles">Navigation</h2>
            <li className="navbar_list">
                <a href="#top" className="no_list_style"> <ul className="navbar_item"> <img src={home_icon} className="navbar_icon" alt="home_icon"></img> <p className="navbar_text"> Explore </p></ul></a>
                <a href="#about" className="no_list_style"> <ul className="navbar_item"> <img src={about_icon} className="navbar_icon" alt="about_icon"></img><p className="navbar_text"> About </p></ul></a>
                <a href="#service" className="no_list_style"><ul className="navbar_item"> <img src={service_icon} className="navbar_icon" alt="service_icon"></img><p className="navbar_text"> Service </p></ul></a>
                <a href="#portfolio" className="no_list_style"><ul className="navbar_item"> <img src={portfolio_icon} className="navbar_icon" alt="portfolio_icon"></img><p className="navbar_text"> Portfolio </p></ul></a>
                <a href="#contact" className="no_list_style"><ul className="navbar_item"> <img src={contact_icon} className="navbar_icon" alt="contact_icon"></img><p className="navbar_text"> Contact </p></ul></a>
            </li>

            <h2 className="navbar_subtitles">Socials</h2>
            <li className="navbar_list">
                <a className="no_list_style" href="https://www.linkedin.com/in/brandondoatkinson/" target="_blank" > <ul className="navbar_item"> <img src={linked_in_logo} className="navbar_icon" alt="contact_icon"></img><p className="navbar_text"> LinkedIn </p></ul> </a>
                <a className="no_list_style" href="https://github.com/itsbrandonowens" target="_blank" > <ul className="navbar_item"><img src={github_logo} className="navbar_icon" alt="contact_icon"></img> <p className="navbar_text"> GitHub </p></ul> </a>

            </li>

        </div>

    )



}

export default Navbar
