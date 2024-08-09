import React from 'react'
import IndexPage from './IndexPage';
import About from './About'
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { motion } from "framer-motion"

const HomePage = () => {

    return (
        <motion.div
        initial ={{opacity:0}}
        animate = {{opacity:1}}
        exit = {{opacity:0}}
        transition = {{duration:1.3}}        
        
        
        >
            <div className="whole_container">
                <IndexPage />
                <About />
                <Service />
                <Portfolio />
                <Contact />
            </div>
        </motion.div>
    )
}

export default HomePage
