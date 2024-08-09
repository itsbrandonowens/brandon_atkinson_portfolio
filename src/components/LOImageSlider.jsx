import React from 'react';
import loImage1 from "./images/loScreenshot1.png"
import loImage2 from "./images/loScreenshot2.png"
import loImage3 from "./images/loScreenshot3.png"
import loImage4 from "./images/loScreenshot4.png"
import loImage5 from "./images/loScreenshot5.png"
import loImage6 from "./images/loScreenshot6.png"
import loImage7 from "./images/loScreenshot7.png"
import javascriptLogo from './images/javascriptLogo.png'
import pythonLogo from './images/pythonLogo.png'
import javaLogo from './images/javaLogo.png'
import reactJSLogo from './images/reactLogo.png'
import cssLogo from './images/cssLogo.png'
import htmlLogo from './images/htmlLogo.png'
import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"



class LOImageSlider extends React.Component {
    state = {
        images: [
            loImage1,
            loImage2,
            loImage3,
            loImage4,
            loImage5,
            loImage6,
            loImage7
        ],
        currentIndex: 0
    }; // The images to scroll through

    componentDidMount() {
        this.startSlider();
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
                    <div class="portfolio_grid_container">
                        <div class="portfolio_grid_item">
                            <a href="./"> <button className="back_button" > Go Back </button></a>
                            <a href="https://lastordersgame.com" target="_blank" style={{ color: "black", textDecoration: 'none' }}> <img className="portfolio_image_diss" src={currentImage} alt={`Image ${currentIndex}`} /> </a>
                            <h2 className="tech_stack_header">Tech Stack Used: </h2>
                            <div className="tech_stack_images_group">
                                <img src={reactJSLogo} alt="reactJS" className='tech_stack_used_image' />
                                <img src={javascriptLogo} alt="reactJS" className='tech_stack_used_image' />
                                <img src={htmlLogo} alt="HTML" className='tech_stack_used_image' />
                                <img src={cssLogo} alt="reactJS" className='tech_stack_used_image' />
                            </div>
                        </div>
                        <div class="grid-item">
                            <a href="https://lastordersgame.com" target="_blank" style={{ color: "black", textDecoration: 'none' }}><h1 className="p_detail_title"> Last Orders </h1></a>

                            <p className="portfolio_details_description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat nec neque sit amet dignissim. Donec vel ante ultricies, semper mauris in, rutrum eros. Integer vehicula libero ut sagittis pulvinar. Donec non est id leo pretium blandit a non neque. Ut auctor quam libero, quis imperdiet risus auctor ut. Nunc ullamcorper nisi in ex volutpat semper. Nunc aliquam dolor justo, non eleifend dolor aliquam vitae. Mauris congue in sapien eu pretium. Fusce ante elit, elementum a vestibulum et, elementum ac nulla. Curabitur euismod erat a commodo laoreet. </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
}

export default LOImageSlider;