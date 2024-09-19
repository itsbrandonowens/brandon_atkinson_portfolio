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

// dots underneath image to show what image its on that are clickable
// add arrows to images 
//make it scroll to top of page when opened

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
        const prevIndex = (currentIndex -1);
        if (currentIndex > 0) {

           this.setState({currentIndex:prevIndex})
        }
        console.log("Prev");
    };

    nextHandler = () => {
        const { images, currentIndex } = this.state;
        const nextIndex = (currentIndex +1);
        if (currentIndex < (images.length-1)) {

           this.setState({currentIndex:nextIndex})
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
                    <a href="https://itsbrandonowens.github.io/brandon_atkinson_portfolio/"> <button className="back_button" > Go Back </button></a>
                    <h1 className="p_detail_title"> Last Orders </h1>
                    <a href="https://lastordersgame.com" target="_blank" style={{ color: "black", textDecoration: 'none' }}><h1 className="p_detail_subtitle"> lastordersgame.com </h1></a>

                    <a href="https://lastordersgame.com" target="_blank" style={{ color: "black", textDecoration: 'none' }}> <img className="p_image" src={currentImage} alt={`Image ${currentIndex}`} /> </a>
                    <button className ="prev_button" onClick={this.prevHandler}> Prev </button>
                    <button className ="next_button" onClick={this.nextHandler}> Next </button>
                    <div className="p_details_container">
                        <p className="p_details_text">
                            Last Orders is a card-based drinking game that I started creating in August of 2023.
                        </p> 
                        <p className="p_details_text">
                            I started creating Last Orders just as something to use with my friends on a weekend. I did not anticipate it to become something that I would eventually
                            release to the App Store to the world. It just worked out that way. It started off as a really basic game, with no images, and some horrendous CSS. However,
                            I started really enjoying adding in little features to the game, and updating it every other week from feedback from my mates. Eventually, I decided to make the
                            game into a <a href="https://lastordersgame.com/" className="text_link" target="_blank"> website</a>, and then an app on the <a href="https://lastordersgame.com/" className="text_link" target="_blank">Google Play Store</a>.
                        </p>
                        <p className="p_details_text">
                            Last Orders is created using ReactJS, JavaScript, HTML5 and CSS3 as shown in the tech stack below. I started off by going into photoshop and designing wireframes for how
                            I wanted each page to look and function. This then became a design document including a Brand Manual which includes all of the hex colour codes. I took all of my documentation
                            and just started creating the game. After a few weeks of developing the game in my spare time, the first version was created, simply called "Brandons Drinking Game". After deciding
                            that I was incredibly proud of my work, I came up with the name and logo of the game and added more and more features were added such as the Earthquake, Boozenami and the Chest. The
                            game has continued to recieve little updates and added features and cards until this day.

                        </p>
                        <p className="p_details_text">
                            I want to get Last Orders on IOS, which is currently being worked on. I then will continue to being releasing updates to the game every other month, including new features,
                            new cards and updated graphics. I want to get all of the graphics in the game to become animations that smoothly flow across the screen. I also want to continue expanding the social media
                            associated with the game and get the game to as many people as possible.
                        </p>
                    </div>

                    <h2 className="tech_stack_header"> Tech Stack Used: </h2>

                    <div className="tech_stack_images_group">
                        <img src={reactJSLogo} alt="reactJS" className='tech_stack_used_image' />
                        <img src={javascriptLogo} alt="reactJS" className='tech_stack_used_image' />
                        <img src={htmlLogo} alt="HTML" className='tech_stack_used_image' />
                        <img src={cssLogo} alt="reactJS" className='tech_stack_used_image' />
                    </div>
                    <footer className="back_to_top" onClick={this.footerHandler}>
                        ^ Back to Top ^
                    </footer>
                </div>
            </motion.div>
        );
    }
}

export default LOImageSlider;