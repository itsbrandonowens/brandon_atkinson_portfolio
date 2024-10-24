import React from 'react';
import tmsImage1 from "./images/tmsScreenshot1.png"
import tmsImage2 from "./images/tmsScreenshot2.png"
import tmsImage3 from "./images/tmsScreenshot3.png"
import tmsImage4 from "./images/tmsScreenshot4.png"
import tmsImage5 from "./images/tmsScreenshot5.png"
import tmsImage6 from "./images/tmsScreenshot6.png"
import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"
import { useState } from 'react';


class TMSImageSlider extends React.Component {
    state = {
        images: [
            tmsImage1,
            tmsImage2,
            tmsImage3,
            tmsImage4,
            tmsImage5,
            tmsImage6,
        ],
        currentIndex: 0
    }; // The images to scroll through

    count = 1;
    componentDidMount() {
        this.startSlider();
        window.scrollTo({ top: 0, behavior: 'smooth' }) //starts the slider and scrolls the page to the top 
    }

    componentWillUnmount() {
        this.stopSlider();
    }

    startSlider = () => {
        this.sliderInterval = setInterval(() => {
            const { images, currentIndex } = this.state;
            const nextIndex = (currentIndex + 1) % images.length;
            this.setState({ currentIndex: nextIndex });
        }, 5000);

    }; // Change the duration (in milliseconds) between slides as needed

    stopSlider = () => {
        clearInterval(this.sliderInterval);

    };

    footerHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    prevHandler = () => {
        const { images, currentIndex } = this.state;
        const prevIndex = (currentIndex - 1);
        if (currentIndex > 0) {

            this.setState({ currentIndex: prevIndex })
        }
        console.log("Prev");
    };

    nextHandler = () => {
        const { images, currentIndex } = this.state;
        const nextIndex = (currentIndex + 1);
        if (currentIndex < (images.length - 1)) {

            this.setState({ currentIndex: nextIndex })
        }
        console.log("Next");
    };


    render() {
        const { images, currentIndex } = this.state;
        const currentImage = images[currentIndex];
        let count = this.count;


        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3 }}>
                <div class="portfolio_details_container">
                    <a href="javascript:history.back()"> <button className="back_button" > Go Back </button></a>
                    <h1 className="p_detail_title"> Full Stack - Task Management System </h1>
                    <a href="https://github.com/itsbrandonowens/b_task_management_system" target="_blank"><h1 className="p_detail_subtitle"> GitHub Project Code</h1></a>

                    <img className="p_image" src={currentImage} alt={`Image ${currentIndex}`} />
                    <button className="prev_button" onClick={this.prevHandler}> Prev </button>
                    <button className="next_button" onClick={this.nextHandler}> Next </button>
                    <div className="p_details_container">
                        <p className="p_details_text">
                            This Task Manager application is a full-stack project built with Java and Spring Boot on the backend and ReactJS on the frontend.
                            It allows users to create, view, update, and manage tasks efficiently.It includes features such as task management, search functionality, REST API functionality, Enum Handling,
                            form validation, security, error handling and unit testing.
                        </p>

                        <p className="p_details_text">
                            The backend is built using Java and the Spring Boot framework. It includes a well-structured RESTful API for task management operations. The user interface is built with ReactJS
                            and uses Axios to make HTTP requests to the Spring Boot backend, handling operations such as task creation, retrieval and searching tasks by ID.
                        </p>

                        <p className="p_details_text">
                            This project demonstrates my ability to build full-stack applications using Java for the backend and React for the frontend.
                            It also showcases my knowledge in building and securing REST APIs and applying efficient state management in React.
                        </p>
                        <p className="p_details_text">
                            The link to the code on GitHub can be found <a href="https://github.com/itsbrandonowens/b_task_management_system" target="_blank"> here</a> or above.
                        </p>

                    </div>


                    <footer className="back_to_top" onClick={this.footerHandler}>
                        ^ Back to Top ^
                    </footer>
                </div>
            </motion.div>
        );
    }
}

export default TMSImageSlider;