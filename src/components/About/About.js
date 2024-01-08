import React from 'react'
import '../About/About.css'
import myabtimg from '../../images/about.jpg'
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    transition: "opacity 2s ease-in",
  },
  in: {
    opacity: 1,
    transition: "opacity 2s ease-in",
  },
  out: {
    opacity: 0,
    transition: "opacity 2s ease-in",
  },
}

export default function About() {
  return (
    <motion.div className='container text-light'id='aboutsection' initial="out" animate="in" exit="out" variants={pageVariants}>
      {/* About Container */}
        <h1 className="text-white text-center">ABOUT</h1>
        <h5 className='text-C0C0C0 text-center'>I am photographer and I captures the beauty and
          emotion of life's moments. With a keen eye for detail and a passion
          for storytelling, I creates stunning images that are both artistic and authentic. 
          Whether it's a wedding, fashion shoot, or commercial shoot, I brings a unique 
          perspective to every project and It's my speciality. I had developed a professionalism in my work. 
          I strives to create images that exceed expectations and capture memories that will last a lifetime.</h5>
      <br/>
      <br/>

      {/* Name And Pic Container */}
      <div className='text-end'>        
        <blockquote>
          <h2><footer className="blockquote-footer">Praful Bhole</footer></h2>
        </blockquote>
        <img src={myabtimg} width="100" height="150" alt='about'/>
        </div>
    </motion.div>
  )
}
