import React from 'react'
import '../Home/Home.css'
import rlogo from '../../images/rotateLogo.gif'
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

export default function Home() {
  return (
    <>
    <motion.div className="container center" id="home" initial="initial" animate="in" exit="out" variants={pageVariants}>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-8 text-white">
              <h1>HI I'M PRAFUL BHOLE.</h1>
              <h1>I LOVE PHOTOGRAPHY. </h1>
          </div>
          <div className="col-sm-4 text-center my-3">
            <img className='img-fluid' src={rlogo} alt="Rotating Logo" />
            </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}
