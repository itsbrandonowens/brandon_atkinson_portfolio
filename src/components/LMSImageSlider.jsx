import React from 'react';
import lmsImage1 from "./images/lmsScreenshot1.png"
import lmsImage2 from "./images/lmsScreenshot2.png"
import lmsImage3 from "./images/lmsScreenshot3.png"
import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"

// dots underneath image to show what image its on that are clickable
// add arrows to images 
//make it scroll to top of page when opened

class LMSImageSlider extends React.Component {
    state = { 
        images: [
            lmsImage1,
            lmsImage2,
            lmsImage3,
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
                    <a href="javascript:history.back()"> <button className="back_button" > Go Back </button></a>
                    <h1 className="p_detail_title"> Library Management System </h1>
                    <h1 className="p_detail_subtitle"> Java Project</h1>

                    <img className="p_image" src={currentImage} alt={`Image ${currentIndex}`} />
                    <button className ="prev_button" onClick={this.prevHandler}> Prev </button>
                    <button className ="next_button" onClick={this.nextHandler}> Next </button>
                    <div className="p_details_container">
                        <p className="p_details_text">
                            The Library Management System is a console-based Java application designed to manage a library's operations efficiently.
                            The system allows for easy handling of books and member registrations, borrowing and returning books, and maintaining an organized library inventory.
                            This project demonstrates my proficiency in Object-Oriented Programming principles, Java Collections, and basic user interface design using the
                            command-line interface.
                        </p>
                        <p className="p_details_text">
                           The key features include Book Management: Adding, removing, searching and listing books. Member Management: Registering, removing and listing members. Borrowing and returning books.
                        </p>
                        <p className="p_details_text">
                            This project is structured around core OOP principles, with classes representing the main entities: "Book", "Member" and "Library". Each class encapsulates its data, 
                            exposing only necessary methods to interact with the objects. Array Lists are used to manage the collection of members and books, while Streams are used for operations like searching
                            and filtering through the collections. The system uses a text based menu interface with the command line and has input validation and error handling. 
                        </p>
                        <p className="p_details_text">
                        This project showcases my ability to design and implement a functional system based on real-world requirements using Java. It highlights my understanding of OOP concepts, 
                        my ability to work with Java Collections and Streams, and my proficiency in building user-friendly, console-based applications. This system could be further developed into 
                        a full-fledged application with a graphical user interface (GUI) or connected to a database for persistent storage.
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

export default LMSImageSlider;