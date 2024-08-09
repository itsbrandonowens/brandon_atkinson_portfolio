import React from 'react'
import '../styles/Portfolio.css'
import loPortf1 from './images/LastOrdersPortf.png'
import fdmPortf1 from './images/FDMPortf.png'
import pythonPort from './images/pythonPortf.png'

import { Link } from 'react-router-dom'

//https://olaolu.dev/work/hellotax/

const Portfolio = () => {
    return (

        <div className="portfolio_container">
            <h1 className="portfolio_title" id="portfolio">MY PORTFOLIO</h1>
            <div className="about_line_1"></div>
            <div className="about_line_2"></div>
            <div className="portfolio_grid">

                <Link to="/LastOrders" style={{ color: "black", textDecoration: 'none' }}> <div className="portfolio_mini_grid">
                    <div className="portfolio_top">
                        <img src={loPortf1} className="portfolio_image" alt="Last Orders"></img>
                    </div>
                    <div className="portfolio_bottom">
                        <h1 className="portfolio_text"> Last Orders</h1>
                        <h2 className="portfolio_text_2"> lastordersgame.com</h2>
                    </div>
                </div></Link>

                <Link to="/LastOrders" style={{ color: "black", textDecoration: 'none' }}> <div className="portfolio_mini_grid">
                    <div className="portfolio_top">
                        <img src={fdmPortf1} className="portfolio_image" alt="Last Orders"></img>
                    </div>
                    <div className="portfolio_bottom">
                        <h1 className="portfolio_text"> Consultant Framework </h1>
                        <h2 className="portfolio_text_2"> FDM Group</h2>
                    </div>
                </div></Link>      

                <Link to="/LastOrders" style={{ color: "black", textDecoration: 'none' }}> <div className="portfolio_mini_grid">
                    <div className="portfolio_top">
                        <img src={pythonPort} className="portfolio_image" alt="Last Orders"></img>
                    </div>
                    <div className="portfolio_bottom">
                        <h1 className="portfolio_text"> Blackjack Game</h1>
                        <h2 className="portfolio_text_2"> github.com/itsbrandonowens</h2>
                    </div>
                </div></Link>

                <Link to="/LastOrders" style={{ color: "black", textDecoration: 'none' }}> <div className="portfolio_mini_grid">
                    <div className="portfolio_top">
                        <img src={pythonPort} className="portfolio_image" alt="Last Orders"></img>
                    </div>
                    <div className="portfolio_bottom">
                        <h1 className="portfolio_text"> Tic-Tac-Toe Game</h1>
                        <h2 className="portfolio_text_2"> github.com/itsbrandonowens</h2>
                    </div>
                </div></Link>



            </div>
        </div>

    )
}

export default Portfolio
