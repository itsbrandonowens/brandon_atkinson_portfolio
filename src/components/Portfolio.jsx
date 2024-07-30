import React from 'react'
import '../styles/Portfolio.css'
import loPortf1 from './images/LastOrdersPortf.png'
import fdmPortf1 from './images/FDMPortf.png'
import blackjackPort from './images/blackjackPortf.png'
import tictactoePort from './images/tictactoePortf.png'


//https://www.youtube.com/watch?v=hr4JiDr7Aec

// add individual pages that give more detail

const Portfolio = () => {
    return (

        <div className="portfolio_container">
            <h1 className="portfolio_title" id="portfolio">MY PORTFOLIO</h1>
            <div className="about_line_1"></div>
            <div className="about_line_2"></div>
            <div className="portfolio_grid">

                <div className="imageBox">
                    <div className="portfolio_hovered">
                        <h1 className="portfolio_image_text">Last Orders</h1>
                        <a href="https://lastordersgame.com/" target="_blank"><h1 className="portfolio_image_link"> 🔗</h1></a>
                    </div>
                    <img src={loPortf1} className="image_portfolio" alt="Last Orders"></img>
                </div>


                <div className="imageBox">
                    <div className="portfolio_hovered">
                        <h1 className="portfolio_image_text">Consultant Framework</h1>
                        <a href="" target="_blank"><h1 className="portfolio_image_link"> 👁️</h1></a>
                        
                    </div>
                    <img src={fdmPortf1} className="image_portfolio" alt="FDM Consultant Career Framework"></img>
                </div>

                <div className="imageBox">
                    <div className="portfolio_hovered">
                        <h1 className="portfolio_image_text">Python Blackjack</h1>
                        <a href="" target="_blank"><h1 className="portfolio_image_link"> 👁️</h1></a>
                        
                    </div>
                    <img src={blackjackPort} className="image_portfolio" alt="Blackjack"></img>
                </div>

                <div className="imageBox">
                    <div className="portfolio_hovered">
                        <h1 className="portfolio_image_text">Python Tic-Tac-Toe</h1>
                        <a href="" target="_blank"><h1 className="portfolio_image_link"> 👁️</h1></a>
                        
                    </div>
                    <img src={tictactoePort} className="image_portfolio" alt="Blackjack"></img>
                </div>






            </div>
        </div>

    )
}

export default Portfolio
