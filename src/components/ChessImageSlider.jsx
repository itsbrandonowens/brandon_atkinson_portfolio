import React from 'react';
import chessImage1 from "./images/chessScreenshot1.png"
import chessImage2 from "./images/chessScreenshot2.png"
import chessImage3 from "./images/chessScreenshot3.png"
import chessImage4 from "./images/chessScreenshot4.png"
import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"

// dots underneath image to show what image its on that are clickable
// add arrows to images 
//make it scroll to top of page when opened

class ChessImageSlider extends React.Component {
    state = {
        images: [
            chessImage1,
            chessImage2,
            chessImage3,
            chessImage4,
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
                    <h1 className="p_detail_title"> Fully Functional Chess Game </h1>
                    <a href="https://github.com/itsbrandonowens/brandons_simple_chess" target="_blank"><h1 className="p_detail_subtitle"> Java Project Code</h1></a>

                    <img className="p_image" src={currentImage} alt={`Image ${currentIndex}`} />

                    <div className="p_details_container">
                        <p className="p_details_text">
                        I developed a fully functional chess game using Java, focusing on object-oriented programming principles. The game features all standard chess rules, 
                        including check, checkmate, and stalemate. The user interface allows players to make moves via a grid-based board, highlighting valid moves for selected pieces.
                         The backend handles complex game logic such as move validation, special rules (e.g., castling, en passant), and piece promotion. The project demonstrates my proficiency in Java and showcases 
                         skills like problem-solving, algorithm design, and clean code practices.
                        </p>
                        <p className="p_details_text">
                            The link to the code on GitHub can be found <a href="https://github.com/itsbrandonowens/brandons_simple_chess" target="_blank"> here</a> or above.
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

export default ChessImageSlider;