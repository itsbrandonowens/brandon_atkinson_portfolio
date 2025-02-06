import React from 'react';
import fdmImage1 from "./images/fdmScreenshot1.png"
import fdmImage2 from "./images/fdmScreenshot2.png"
import fdmImage3 from "./images/fdmScreenshot3.png"
import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"



class FDMImageSlider extends React.Component {
    state = {
        images: [
            fdmImage1,
            fdmImage2,
            fdmImage3,

        ],
        currentIndex: 0
    }; // The images to scroll through

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
        }, 3000);
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
            this.stopSlider();
            this.startSlider();
        }
        console.log("Prev");
    };

    nextHandler = () => {
        const { images, currentIndex } = this.state;
        const nextIndex = (currentIndex + 1);
        if (currentIndex < (images.length - 1)) {

            this.setState({ currentIndex: nextIndex })
            this.stopSlider();
            this.startSlider();
        }
        console.log("Next");
    };

    render() {
        const { images, currentIndex } = this.state;
        const currentImage = images[currentIndex];

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3 }}>
                <div class="portfolio_details_container">
                    <a href="javascript:history.back()"> <button className="back_button" > Go Back </button></a>
                    <h1 className="p_detail_title"> Consultant Career Framework </h1>
                    <h1 className="p_detail_subtitle"> FDM Group</h1>

                    <img className="p_image" src={currentImage} alt={`Image ${currentIndex}`} />
                    <button className="prev_button" onClick={this.prevHandler}> Prev </button>
                    <button className="next_button" onClick={this.nextHandler}> Next </button>
                    <div className="p_details_container">
                        <p className="p_details_text">
                            I was the Lead Developer in creating a Consultant Career Framework at FDM Group. This project lasted from March 2023 until April 2024.
                            This project is used internally at the company to allow Consultants to see exactly what they should be upskilling in if they want to go down a certain career path.

                        </p>
                        <p className="p_details_text">
                            The framework allows the user to pick a general area that is most relevant to their work and shows them the paths that they can go down in that career path. If the user
                            clicks on one of the intersections (Software Engineering, Level 1, Service Delivery for example), it will show them all of the skills that they can upskill in to improve
                            themselves in that career path.
                            This project started off with a 1st iteration that was released in Summer of 2023. After a month of it being released, we decided we could do better, and made
                            iteration 2 which is shown in the screenshots above. Iteration 2 has 5 general areas, each with 6 verticals and 4 levels. Each of those then has 24 skills to upskill in.
                            This means that for iteration 2, me and my team had to go through and populate 2,880 skills throughout the framework.

                        </p>
                        <p className="p_details_text">
                            The framework was created using Microsoft PowerApps, Sharepoint Lists for some data and Microsoft Power Automate.
                            PowerApps was used for the front end of the framework. This is something that I had no experience in at all when I started the project. I had to go away and learn as much
                            about PowerApps as I could before the project started, and continued to learn throughout.

                            Sharepoint Lists were used during this project, but not for the framework. 5 more pages were created to aid the framework, but were never released.

                            Finally, a quiz using Microsoft Forms was created to aid the consultant in figuring out where abouts they sat on the framework, so they knew what skills to upskill in.
                            The consultant would answer some questions, and a Power Automate flow I created would filter through their responses and send them an email explaining what practice, level
                            and vertical they would be sat on.
                        </p>
                        <p className="p_details_text">
                            ReactJS was also slightly used in this project. I was concious that I wanted to learn more coding, and with Power Apps being a low code platform, I decided, with my managers
                            approval, to make pages using ReactJS to use in demonstrations.

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

export default FDMImageSlider;