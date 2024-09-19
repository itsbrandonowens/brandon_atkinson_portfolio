import React from 'react';
import bjImage1 from "./images/bjScreenshot1.png"
import '../styles/PortfolioDetails.css'
import { motion } from "framer-motion"

// dots underneath image to show what image its on that are clickable
// add arrows to images 
//make it scroll to top of page when opened

class BJImageSlider extends React.Component {
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
                    <a href="https://itsbrandonowens.github.io/brandon_atkinson_portfolio/"> <button className="back_button" > Go Back </button></a>
                    <h1 className="p_detail_title"> Python Blackjack </h1>
                    <h1 className="p_detail_subtitle"> Personal Project</h1>
 
                    <img className="p_image" src={bjImage1} alt="Python Blackjack" /> 
                   
                    <div className="p_details_container">
                        <p className="p_details_text">
                            I created a working game of Blackjack in Python. I did this as a second project while learning Python. 
                        </p>
                        <p className="p_details_text">
                           The game uses Tkinter to create the UI for the game and uses several if statements to go through the logic of blackjack. The code first allocates your chips and allows you to place a bet.
                           The main function of the game is then created, with all of the winning/losing or tieing logic. Then the game will check if the dealer, or player has recieved blackjack at every stage of
                           a card being drawn and as soon as it is then the game is over. Finally, all of the tkinter logic is created, placing all of the buttons and cards in a grid on the page. 
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

export default BJImageSlider;