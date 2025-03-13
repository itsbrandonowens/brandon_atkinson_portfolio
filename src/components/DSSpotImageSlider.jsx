import React from 'react';
import dssImage1 from "./images/dssScreenshot1.png"
import dssImage2 from "./images/dssScreenshot2.png"

import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"

// dots underneath image to show what image its on that are clickable
// add arrows to images 
//make it scroll to top of page when opened

class DSSpotImageSlider extends React.Component {
    state = {
        images: [
            dssImage1,
            dssImage2,
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
                    <h1 className="p_detail_title"> Discord & Spotify Integration App </h1>
                    <h1 className="p_detail_subtitle"> ReactJS, Java and Spring Boot Project</h1>

                    <img className="p_image" src={currentImage} alt={`Image ${currentIndex}`} />
                    <button className="prev_button" onClick={this.prevHandler}> &lt; </button>
                    <button className="next_button" onClick={this.nextHandler}> &gt; </button>
                    <div className="p_details_container">
                        <p className="p_details_text">
                            I developed an application that integrates Discord and Spotify into a single interface, offering a seamless user experience. The application is split into two sections:
                        </p>
                        <p className="p_details_text">
                            Discord Integration (Left Panel): Utilizes a custom Discord bot, created through the Discord Developer Portal, to provide various functionalities within voice channels.
                            Users can disconnect from channels, mute or deafen themselves, and view a list of all users currently in the channel.
                            The bot's operations are managed by a backend built using Java and Spring Boot, ensuring reliable and efficient communication between the app and Discord servers, and yes, my profile picture is 
                            the sugar puff monster in a Newcastle strip.
                        </p>
                        <p className="p_details_text">
                            Spotify Integration (Right Panel): Connects to Spotify's API, allowing users to control playback with advanced features. The app supports skipping tracks, playing/pausing songs,
                            scrubbing to specific timestamps, adjusting the volume, and displaying album artwork with a dynamic "record player" animation.
                            All actions are synchronized across devices via HTTP PUT, GET, and POST requests to Spotify's API, ensuring a consistent and responsive experience across platforms.
                        </p>
                        <p className="p_details_text">
                            This project demonstrates expertise in API integration, real-time data synchronization, backend development with Spring Boot, and building a rich,
                            user-friendly interface for managing both Discord and Spotify services.
                        </p>
                        <p className="p_details_text">
                        The link to the code on GitHub can be found <a href="https://github.com/itsbrandonowens/discord_spotify_integration_app" target="_blank"> here</a>.
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

export default DSSpotImageSlider;