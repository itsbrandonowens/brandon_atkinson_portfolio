import React from 'react';
import chessImage1 from "./images/chessScreenshot1.png"
import chessImage2 from "./images/chessScreenshot2.png"
import chessImage3 from "./images/chessScreenshot3.png"
import chessImage4 from "./images/chessScreenshot4.png"
import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"
import { useState } from 'react';



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

    pauseHandler = () => {
        
        //checking if the number is even or odd by checking remainder
        let count = this.count;
        const isOdd = count => this.count % 2 === 1;
        const isEven = count => this.count % 2 === 0;
        
        if (isOdd(this.count)) {
            this.stopSlider();
            count++
            if (isEven(this.count)) {
                this.startSlider();
                count++
            }
            //#####################
            //FIX THIS
            //########################
            
          
        }   


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
                    <h1 className="p_detail_title"> Chess in Java </h1>
                    <a href="https://github.com/itsbrandonowens/brandons_simple_chess" target="_blank"><h1 className="p_detail_subtitle"> Java Project Code</h1></a>

                    <img className="p_image" src={currentImage} alt={`Image ${currentIndex}`} />
                    <button className="prev_button" onClick={this.prevHandler}> Prev </button>
                    <button className="next_button" onClick={this.nextHandler}> Next </button>
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