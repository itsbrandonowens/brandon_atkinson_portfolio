import React from 'react';
import tttImage1 from "./images/tttScreenshot1.png"
import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"

// dots underneath image to show what image its on that are clickable
// add arrows to images 
//make it scroll to top of page when opened

class TTTImageSlider extends React.Component {
    footerHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }) 
    };

    render() {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3 }}>
                <div class="portfolio_details_container">
                    <a href="./brandon_atkinson_portfolio"> <button className="back_button" > Go Back </button></a>
                    <h1 className="p_detail_title"> Python Tic-Tac-Toe </h1>
                    <h1 className="p_detail_subtitle"> Personal Project</h1>

                    <img className="p_image" src={tttImage1} alt="Python Blackjack" /> 

                    <div className="p_details_container">
                        <p className="p_details_text">
                            I created a working game of Tic-Tac-Toe in Python. I did this as a way to start learning Python. 
                        </p>
                        <p className="p_details_text">
                            This was my first attempt at creating a project using Python so it is INCREDIBLY basic. 
                            The game uses Tkinter to create the UI. There are currently 2 modes in the game. One where you play locally with someone in the same room, so every time you click a box it will
                            alternate between X and O. There is also an Easy AI option where you play against the computer. This AI is extremely trivial and will basically just randomly pick a box that has not
                            already been picked.
                        </p>
                        <p className="p_details_text">
                            I would like to revisit this project by making the UI look better, and adding more difficulty options with stronger AI. 
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

export default TTTImageSlider;